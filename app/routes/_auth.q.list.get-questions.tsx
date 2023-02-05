import type { LoaderArgs } from "@remix-run/server-runtime";
import { getSessionWithProfile } from "~/auth/get-session";
import { createQuestion } from "~/question/create";
import type { Question } from "~/question/types";
import { getServerSideSupabaseClient } from "~/supabase/client";
import type { PartialDeep } from "~/types";
import { typedFetcher, withDurationLog } from "~/util";

const numberPerPage = 10;

export type GetQuestionsArgs = {
  page: number;
  search?: string;
  tags?: string[];
  dateFilter?:
    | {
        type: "range";
        start: string;
        end: string;
      }
    | {
        type: "single";
        date: string;
      };
};

const { createArgs, getArgsFromRequest, useFetcher, submit } = typedFetcher<
  typeof loader,
  GetQuestionsArgs
>();

export async function loader({ request }: LoaderArgs) {
  const { dateFilter, search, tags, page } = await getArgsFromRequest(request);
  const response = new Response();
  const { profile } = await getSessionWithProfile({ request, response });

  const db = getServerSideSupabaseClient();

  // search

  // dateFilter

  // tags

  const questionsRes = await withDurationLog(
    "get_q_by_creator",
    db
      .from("questions")
      .select("*", { count: "estimated" })
      .eq("creator", profile.id)
      .is("deleted_at", null)
      .order("updated_at", { ascending: false })
      .range((page - 1) * numberPerPage, page * numberPerPage - 1)
  );

  if (questionsRes.error) {
    throw new Response(questionsRes.error.message, { status: 500 });
  }

  if (questionsRes.count === null) {
    throw new Response("questionsRes.count is null", { status: 500 });
  }

  return {
    items: questionsRes.data.map((q) => ({
      ...q,
      content: createQuestion(q.content as PartialDeep<Question>),
    })),
    total: questionsRes.count,
  };
}

export const createArgsForGetQuestions = createArgs;

export const useGetQuestionsFetcher = useFetcher;

export const getQuestions = submit;
