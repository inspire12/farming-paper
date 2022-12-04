import type { Question } from "../types";

/**
 *
 * 추가할 키워드
 * 프로그래밍 언어
 * 형식적/비형식적
 * 선언형, 명령성, 객체, 함수
 * 일반성 확장성 표현력 부분성
 * 문자, 토큰, 예약어, 미리 정의된 식별자,
 * 비단말 기호, 단말 기호, (예시)
 * BNF, EBNF, 둘의 차이점 (추가된 메타 기호)
 * EBNF 해석법
 * 정의 - 모호한 문법
 * 파스칼, Algol68 if-then-else
 * 인터프리트 기법
 * 배런의 표기법
 * 바인딩 시간 - 언어의 정의 시간, 언어의 구현 시간, 번역 시간, 실행 시간
 * 명시적 선언의 이점
 * 할당문
 * 열우선 프로그래밍에서 기억장소에 저장되는 순서
 * 배열, 레코드, 포인터, 연상배열
 * 형 변환, 묵시적, 명시적
 * JAVA에서 영역
 * 정적 기억장소 할당
 * 힙, 스택, 준정적 변수, 준동적 변수, 동적 변수
 * 비지역 변수, 정적 체인 사용, 디스플레이 사용, 비지역 변수, 참조 시간, 지역 변수, 정적 링크
 * 실 매개변수, 형식 매개변수 (예시)
 * 값호출, 참조호출 (예시)
 * ---
 * 구문론, 의미론
 * WORA, 구문도표, WORA, 메타 기호
 * 파스 트리, 유도, 루트 노드, 비단말 노드
 * 중첨된 if문
 * 함수 모형. 변수의 네 가지 속성
 * 언어 구현에 필요한 자료 구조
 * 타입 바인딩, 영역 규칙, 서브프로그램, 자유변수, 전역변수, 블록
 * 인수, 타입, 주소, 변수명, 강타입, 약타입
 * 원시타입, 단순타입, 복합타입, 사용자정의타입
 * 수식 (정의)
 * 대입문
 * 자바에서 묵시적 형변환이 일어나는 케이스
 * 제어문 설명
 * 파스칼, 정적 영역 규칙, 체인 변위, 동적 체인 설명, 참조 전달, 값 전달
 */

export const questions: Question[] = [
  {
    type: "short_order",
    message:
      "___ 란 데이터를 저장하거나 나중에 사용할 수 있도록 ___ 를 추상화한 것이다.",
    correct: ["변수", "메모리"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_multi",
    message: "변수의 속성 4가지",
    correct: ["변수명", "타입", "주소", "값"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "변수의 값은 수행시간 동안 바뀔 수 ___ (있다/없다)",
    correct: ["있다"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  언어 구성 요소의 속성이 구체적으로 결정되는 것을 의미한다.",
    correct: ["바인딩"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  변수의 이름, 식별자. ___ : 변수에 저장할 수 있는 데이터 집합의 종류. ___ : 변수가 사용하는 메모리의 위치. 다른 말로 ___ 라고도 한다. ___ : 변수에 저장된 데이터.",
    correct: ["변수명", "타입", "주소", "참조", "값"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "바인딩 시각은 크게 ___ 바인딩과 ___ 바인딩으로 나뉜다.",
    correct: ["바인딩", "동적", "정적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ 에 변화가 있다면 동적 바인딩, 변화가 없다면 정적 바인딩이다.",
    correct: ["수행시점"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "동적 바인딩은 ___ 언어에 유리하고, 정적 바인딩은 ___ 언어에 유리하다.",
    correct: ["인터프리터", "컴파일"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "포인터 변수의 경우 ___ 없이 사용되는 변수에 대한 바인딩도 이루어질 수 있다.",
    correct: ["변수명"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "변수의 속성별 바인딩 순서",
    correct: ["변수명", "타입", "주소", "값"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "변수의 ___ , ___ 바인딩 방법에는 ___ , ___ 이 있다.",
    correct: ["변수명", "타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "변수명의 ___ 선언: 선언문에 명시된 이름으로 변수명을 바인딩",
    correct: ["명시적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "변수명의 ___ 선언: 선언문이 없고 ___ 등에 처음으로 사용된 이름으로 변수명을 바인딩",
    correct: ["묵시적", "대입문", "변수명"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 의 경우 변수명의 시작 알파벳에 따라 타입의 ___ 바인딩이 일어난다.",
    correct: ["포트란", "묵시적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "변수의 ___ : 변수가 메모리를 할당받고 있는 기간",
    correct: ["수명"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "주소 바인딩 시 프로그래머가 지정한 크기만큼 사용하는 것이 ___ 할당이고, 이 경우 무조건 ___ 세그먼트의 ___ 에 저장된다.",
    correct: ["수동", "동적", "힙"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "동적 세그먼트를 구성하는 두 가지",
    correct: ["스택", "힙"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 변수 : 프로그램 수행 전체 기간 동안 메모리에 존재하는 변수. 초기 포트란의 모든 변수. ",
    correct: ["정적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 동적 변수 : ___ 할당을 이용하는 변수 중 정적 변수가 아닌 경우.",
    correct: ["스택", "자동"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ : 프로그램에서 변수를 사용할 수 있는 범위",
    correct: ["영역"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "pick",
    message:
      "정적 변수의 수명이 유효하고 그 변수의 영역이 아닐 때 ,에러가 발생 ___",
    correct: "한다",
    options: ["하지 않는다"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "pick",
    message: "다양한 프로그래밍 패러다임은 ___",
    correct: "상호 보완적이다.",
    options: ["서로 배타적이다."],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "pick",
    message: "파이썬은 ___ 영역 규칙을 사용한다.",
    correct: "정적",
    options: ["동적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "pick",
    message: "하나의 프로그래밍 언어는 ___ 패러다임을 지원한다.",
    correct: "여러 개의",
    options: ["하나의"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ 변수 : 블록 안에서 선언된 변수. ",
    correct: ["지역"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 변수 : 블록 밖에서 선언되었지만 블록 안에서 사용될 수 있는 변수 ",
    correct: ["비지역"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 영역을 구분해 주는 단위로, 프로그램 문장들의 묶음이면서 그 안에서 변수 선언이 가능하다.",
    correct: ["블록"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 한 위치에서 사용할 수 있는 모든 변수의 모음으로, 해당위치의 모든 지역변수와 모든 비지역변수로 구성된다.",
    correct: ["참조 환경"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 변수 : 현재 블록에서 선언되지 않고 사용하려는 변수. 참조 위치를 찾았을 경우 ___ 이고, 참조 위치를 찾지 못한 경우 ___ 이다.",
    correct: ["자유", "비지역변수", "오류"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 규칙 : 블록들의 정적 내포 관계를 이용하여 변수의 참조 위치를 찾는 방법으로, ___ 시점에 결정할 수 있다.",
    correct: ["정적영역", "컴파일"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 규칙 : 블록들의 동적 내포 관계를 이용하며, ___ 시점에 결정할 수 있다.",
    correct: ["동적영역", "수행"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  비지역변수가 같은 이름의 지역변수 때문에 보이지 않는 영역을 의미한다.",
    correct: ["영역구멍"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "동적 영역 규칙이 적용되는 법은, ___ 한 ___ 에 대해 계속해서 검색한다.",
    correct: ["호출", "블록"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 어떤 블록에도 포함되지 않는 곳에서 선언된 변수로 영역은 프로그램 전체가 된다. 모든 블록에서 ___ 변수로 취급된다.",
    correct: ["전역변수", "비지역"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "영역 구멍에서 전역변수를 사용하고 싶다면 ___ 을 사용한다. (C++ - :: )",
    correct: ["영역연산자"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "C++ 에서 ___ 을 통해 이름 공간을 가져올 수 있다.",
    correct: ["using"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___  : 관련성이 높은 변수와 함수를 하나의 묶음으로 관리하는 영역으로, 변수명처럼 영역 자체의 이름을 갖는다.",
    correct: ["이름공간"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  데이터 집합과 연산 집합의 결합이다. 데이터 집합은 처리 대상이 되는 데이터들의 집합이고, 연산 집합은 해당 데이터에 적용 가능한 연산의 집합이다.",
    correct: ["타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 언어 : 모든 타입 오류를 검출하는 언어. Haskell, ML, JAVA(타입캐스팅 제외)가 해당됨. ___ 언어 : 타입 오류를 기본적으로 검출하지만, 일부 타입 오류를 허용한다. C. ___ 언어 : 타입 선언문도 없고 어떤 대상의 타입도 계속 변경되는 것. 파이썬 등 대부분의 스크립트 언어.",
    correct: ["강타입", "약타입", "무타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 프로그래밍 언어에서 기본적으로 제공하는 타입. 정수, 실수, 문자, 문자열 등이 해당됨.",
    correct: ["원시타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ : 사용자가 직접 정의해서 사용하는 타입. 배열, 구조체 등",
    correct: ["사용자정의타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ : 데이터 집합의 요소가 하나의 데이터로만 구성되는 타입",
    correct: ["단순타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 데이터 집합의 요소가 데이터들의 구조로 구성되는 타입. 배열, 구조체, 클래스",
    correct: ["복합타입"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "정수형 타입에서, C/C++ 는 ___ 여부에 따라 타입이 다르지만, JAVA 는 통일된 것 밖에 없다.",
    correct: ["부호"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "실수형 타입은 일반적으로 ___ 수로 표현된다. 여기서 세 가지 정보: ___, ___, ___",
    correct: ["부동소수점", "부호", "지수", "가수"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ 코드: 특수기호, 구두점, 숫자, 영어 등 128개의 문자로 구성",
    correct: ["아스키"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ : 전 세계의 다양한 문자를 표현할 수 있음. JAVA 사용.",
    correct: ["유니코드"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      " C 에서 열거형 타입은 내부적으로 ___ 으로 간주된다. 즉 해당 타입의 연산도 쓸 수 있음.",
    correct: ["정수형"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 동질형 데이터의 모음으로 구성된 타입이다. 그리고 원소는 ___ 로 구별하며, 이것의 개수로 차원을 이야기할 수 있다.",
    correct: ["배열", "첨자"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 저장 : 배열을 저장할 때 하나의 줄을 먼저 전부 저장하고, 그 다음에 그 다음 줄을 전부 저장하는 식. 대부분의 언어임. 그리고 ___ 는 이것이 아님!",
    correct: ["행우선", "포트란"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 형 : 문자가 나열된 타입. C, C++ 에서는 기본적으로 배열을 활용함. 자바에는 클래스가 있음.",
    correct: ["문자열"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      " ___ : 동질형 데이터의 순서 없는 모음으로 구성된 타입으로, 원소는 키로 구별한다. 데이터 집합은 모든 키 타입 데이터와 원소 타입 데이터의 쌍을 포함한다. 연산 집합에는 개별 원소에 대한 연산들이 포함된다. Perl 에서는 hash 타입, C++ 에서는 map 타입",
    correct: ["연관배열"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  다양한 타입의 데이터의 모음으로 구성된 타입으로, 원소는 이름으로 구별한다. 데이터 집합은 원소의 개수와 각 원소의 타입에 따라 다양하게 존재한다. 연산 집합에는 초기화, 대입 연산 등이 포함된다.",
    correct: ["구조체"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  저장공간을 공유하는 데이터의 모음으로 구성된 타입으로, 한 원소의 값이 바뀌면 다른 원소들의 값도 영향을 받는다. 원소는 이름으로 구별하며, 데이터 집합은 각 원소의 타입에 따라 다양하게 존재한다. 연산 집합은 개별 원소 타입의 연산 집합을 따른다.",
    correct: ["공용체"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  특정 데이터가 저장되는 주소 자체를 데이터로 다루는 타입으로, 특정 데이터의 타입은 사용자가 지정한다. 데이터 집합은 가용한 범위의 주소를 포함하며, 연산 집합에는 대입, 덧셈, 뺄셈, ___ 연산 등이 포함된다.",
    correct: ["포인터형", "역참조"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ :  참조형은 사용자가 지정하는 타입의 데이터가 저장된 주소 자체를 자신의 주소로 사용하는 타입이다. 데이터 집합과 연산 집합은 지정한 타입을 따른다.",
    correct: ["참조형"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 피연산자와 연산자로 구성되어 하나의 값을 나타내는 표현이다. 연산자가 없을 수도 있고, 피연산자가 없을 수도 있다(함수 호출). 반면 ___ 은 처리를 나타내는 표현이다.",
    correct: ["수식", "문장"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "피연산자들의 타입이 서로 일치하지 않는 경우 필요한 것.",
    correct: ["타입변환"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 타입변환 : 컴파일러에 의해 자동으로 변환. ___ 타입변환 : 프로그래머가 명시적으로 변환함. 확대변환 및 축소변환 모두 가능하다.",
    correct: ["묵시적", "명시적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 모든 논리 여산을 수행하지 않고도 수식의 값을 얻을 수 있는 것.",
    correct: ["단락평가"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 는 컴퓨터가 수행할 수 있고 사람이 읽을 수 있는 형태로 계산을 나타내는 표기체계이다.",
    correct: ["프로그래밍 언어"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어는 주로 ___ 형태로 사용되고, ___ 에 따라 정의되며, 정확한 ___ 를 표현할 수 있어야 하고, 주로 기계에 명령을 전달하는 ___ 언어이다.",
    correct: ["글", "규칙", "의도", "단방향"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 기본 기능 : ___ : 프로그래머의 의도를 나타낼 수 있도록 하는 기능",
    correct: ["작성력"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 기본 기능 : ___ : 프로그램을 쉽게 해독할 수 있도록 하는 기능",
    correct: ["가독성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 기본 기능 : ___ : 컴퓨터에서 실행될 수 있도록 하는 기능",
    correct: ["가독성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "언어는 우리의 사고 능력과 밀접한 관련이 있으며 프로그래밍은 우리에게 체계적으로 ___ 하는 방법을 가르쳐 준다.",
    correct: ["생각"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 부가기능 : ___ : 어떤 대상을 간략하게 추려 나타내는 방법. ",
    correct: ["추상화"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 부가기능 : ___ : 복잡한 대상을 나누어 구성할 수 있는 방법",
    correct: ["모듈화"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 부가기능 : ___ : 복잡한 대상을 나누어 구성할 수 있는 방법",
    correct: ["모듈화"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 특성 : ___ : 엄밀한 규칙에 따라 처리할 수 있어야 함.",
    correct: ["기계적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 특성 : ___ : 복잡한 구조를 나타낼 수 있어야 함.",
    correct: ["구조적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "프로그래밍 언어의 특성 : ___ : 시대의 필요에 따라 바뀔 수 있음.",
    correct: ["가변적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ 언어 : 기계에 종속적인 언어. 기계어, 어셈블리어.",
    correct: ["저급"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___ 언어 : 기계에 독립적으로 정의되고 실행될 수 있는 언어",
    correct: ["고급"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "___  : 자료를 프로그램이 처리할 수 있는 형태로 나타낸 것",
    correct: ["데이터"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___  : 데이터 처리 방법. 이것의 적용 후 새로운 데이터를 결과로 얻음.",
    correct: ["연산"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___  : 전체 프로그램을 이루는 작은 코드 블록에 이름을 붙인 것. 서브루틴이라고도 함. 결과를 반환하는 건 ___, 반환하지 않는 건 ___ .",
    correct: ["서브프로그램", "함수", "프로시저"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ : 프로그램의 형태적인 측면에서 본 것. ___ : 프로그램의 수행과정 측면에서 본 것.",
    correct: ["구문론", "의미론"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 프로그램 수식이나 문장, 기능 등을 쉽게 표현할 수 있는가",
    correct: ["작성력"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 작성된 프로그램이 오류에 빠지는 가능성을 줄이는가",
    correct: ["가독성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 작성된 프로그램이 오류에 빠지는 가능성을 줄이는가",
    correct: ["신뢰성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 언어의 기능이 서로 간섭하지 않고 자유롭게 조합될 수 있는가",
    correct: ["직교성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 유사한 기능을 같은 형태로 나타낼 수 있는가",
    correct: ["일관성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 사용자가 원하는 새로운 기능을 추가할 수 있는가",
    correct: ["확장성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 작성된 프로그램이 효율적으로 수행될 수 있도록 하는가",
    correct: ["효율성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 평가 기준 - ___ : 프로그래머가 표현하고 싶은 내용을 유연하게 수용하는가",
    correct: ["유연성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "프로그램을 다른 실행 환경으로 이전할 수 있는가",
    correct: ["이식성"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 프로그래밍 패러다임에서 프로그램은 특정 작업을 수행하기 위한 연산 등이 나열된 것이다. 컴퓨터 하드웨어의 속성을 그대로 반영한 형태의 패러다임이다.",
    correct: ["명령형"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 프로그래밍 패러다임은 문제를 해결하기 위한 어떤 집합을 서브루틴 혹은 서브프로그램의 형태로 구현하는 패러다임이다. 프로그램은 서브루틴의 집합이다.",
    correct: ["절차형"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___(A) 형 프로그래밍 패러다임에서는 데이터를 값으로 간주하고, 주어진 데이터로부터 새로운 값을 생성하는 ___(A) 에 초점을 맞추어 프로그램을 작성한다.",
    correct: ["함수"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 프로그래밍 패러다임에서는 문제의 조건을 명시하는 규칙을 표현하고 어떤 사실을 입증해 나가는 방식으로 프로그램을 수행한다. 선언적 프로그래밍 패러다임의 일종이다.",
    correct: ["논리형"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 프로그래밍 패러다임에서는 같은 데이터에 대해 다른 처리 절차를 여러 개 명시해야 하는 경우가 흔히 발생할 때 사용된다.",
    correct: ["객체지향형"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 패러다임의 변화 배경으로는 응용 ___ 의 변화, 프로그램 ___ 방식의 변화, ___ 의 변화 등을 들 수 있다.",
    correct: ["도메인", "구성", "계산모델"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "___ 프로그래밍은 goto 논란으로부터 촉발되었는데 goto 없이 프로그램을 작성하는 패러다임이다.",
    correct: ["구조화"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 ___ 정의 : 프로그래밍 언어의 명확한 구문과 의미를 정의. 이를 통해 명확한 사용체계를 제공.",
    correct: ["형식적"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그래밍 언어의 형식적 정의의 필요성 : 컴퓨터에 있어서는 ___ 을 제거할 수 있고, 작성자에 있어서는 프로그램의 동작을 ___ 가능하다.",
    correct: ["모호함", "예측"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그램의 구조 - ___ : 영어 알파벳, 아라비아 숫자, 특수 기호 등.",
    correct: ["문자"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "프로그램의 구조 - 어휘( ___ ) : 문자의 모임. 최소한의 의밀르 갖는 단어.",
    correct: ["토큰"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "구문을 표현할 때에는 ___ 을 이용한다.",
    correct: ["문맥자유문법"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "문맥자유문법 -  ___ : 정의될 대상",
    correct: ["비단말기호"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "문맥자유문법 -  ___ : 언어에서 직접 사용되는 표현",
    correct: ["단말기호"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "문맥자유문법 -  ___ : 언어에서 독립적으로 사용될 수 있는 단위",
    correct: ["시작비단말기호"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "문맥자유문법 -  ___ : 비단말 기호를 단말 기호와 비단말 기호의 조합으로 정의",
    correct: ["규칙"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "BNF 의 세 가지 메타 기호: 정의 - ___ , 택일 - ___ , 비단말기호 - ___",
    correct: ["::=", "|", "<>"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "EBNF 에서 추가된 메타 기호: 생략가능 - ___ , 0번이상 반복 - ___ , | 와 함께 쓰여 한정된 범위의 택일 - ___ , 메타 기호를 단말 기호로 사용 - ___",
    correct: ["[]", "{}", "()", "''"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message: "구문도표에서 사각형 : ___ , 타원 : ___ ,  화살표 : ___ 또는 규칙",
    correct: ["비단말기호", "단말기호", "연결"],
    tags: ["프로그래밍언어론"],
  },
  {
    type: "short_order",
    message:
      "기능적 의미론에서 추상기계의 상태를 바꾸는 것으로 수행 의미를 표현한다. 상태는 <수행할 ___, ___ 상태>로 나타낸다.",
    correct: ["명령어", "메모리"],
    tags: ["프로그래밍언어론"],
  },
];
