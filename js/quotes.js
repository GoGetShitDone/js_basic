const quotes = [
    {
        "quote": "꿈을 지녀라. 그러면 어려운 현실을 이길 수 있다.",
        "author": "박경리"
    },
    {
        "quote": "산다는 것 그것은 치열한 전투이다.",
        "author": "로망 로랑"
    },
    {
        "quote": "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        "author": "사무엘 존슨"
    },
    {
        "quote": "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        "author": "파울로 코엘료"
    },
    {
        "quote": "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 한다.",
        "author": "찰리 채플린"
    },
    {
        "quote": "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        "author": "엘버트 허버드"
    },
    {
        "quote": "신은 용기있는 자를 결코 버리지 않는다.",
        "author": "켄러"
    },
    {
        "quote": "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
        "author": "헬렌 켈러"
    },
    {
        "quote": "피할 수 없으면 즐겨라.",
        "author": "로버트 엘리엇"
    },
    {
        "quote": "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        "author": "이드리스 샤흐"
    },
    {
        "quote": "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
        "author": "엘사 맥스웰"
    },
    {
        "quote": "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
        "author": "채근담"
    },
    {
        "quote": "한 번의 실패와 영원한 실패를 혼동하지 마라.",
        "author": "F. 스콧 피츠제럴드"
    },
    {
        "quote": "내일은 내일의 태양이 뜬다.",
        "author": "마거릿 미첼"
    },
    {
        "quote": "계단을 밟아야 계단 위에 올라설 수 있다.",
        "author": "터키 속담"
    },
    {
        "quote": "오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한 걸음 더 진보한 일을 할 수 있다.",
        "author": "아이작 뉴턴"
    },
    {
        "quote": "나는 미래에 대해 생각하는 법이 없다. 그것은 곧 닥쳐올 테니까.",
        "author": "알베르트 아인슈타인"
    },
    {
        "quote": "겨울이 오면 봄이 멀지 않으리.",
        "author": "셸리"
    },
    {
        "quote": "일하는 시간과 노는 시간을 뚜렷이 구분하라. 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라.",
        "author": "루이자 메이 올콧"
    },
    {
        "quote": "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        "author": "아인슈타인"
    },
    {
        "quote": "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신의 믿음이 옳다.",
        "author": "헨리 포드"
    },
    {
        "quote": "작은 기회로부터 종종 위대한 업적이 시작된다.",
        "author": "데모스테네스"
    },
    {
        "quote": "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
        "author": "벤 스타인"
    },
    {
        "quote": "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        "author": "하버트 개서"
    },
    {
        "quote": "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
        "author": "윌리엄 제임스"
    },
    {
        "quote": "너 자신이 되라. 다른 사람은 이미 존재하니까.",
        "author": "오스카 와일드"
    },
    {
        "quote": "인생은 자전거를 타는 것과 같다. 균형을 유지하려면 계속 움직여야 한다.",
        "author": "알버트 아인슈타인"
    },
    {
        "quote": "세상에 공짜는 없다.",
        "author": "미국 속담"
    },
    {
        "quote": "인생은 과감한 모험이던가, 아니면 아무것도 아니다.",
        "author": "헬렌 켈러"
    },
    {
        "quote": "남의 불행을 나의 행복으로 삼지 마라.",
        "author": "괴테"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;