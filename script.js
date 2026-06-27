// --- 문제 은행 (1, 2교시 데이터 통합) ---
const questionBank = [
    // [1교시] 교통안전법 파트
    { 
        code: "A001",
        category: "교통안전법",
        question: "교통 안전에 관한 국가 또는 지방자치단체의 의무·추진체계 및 시책 등을 규정하고 이를 종합적·계획적으로 추진함으로써 교통 안전 증진에 이바지함을 목적으로 제정한 법은?",
        options: ["철도산업발전기본법","철도안전법","교통안전법","철도사업법"],
        answer: 2,
        explanation: "교통안전법은 교통안전에 관한 국가 또는 지방자치단체의 의무·추진체계 및 시책 등을 규정하고 이를 종합적·계획적으로 추진함으로써 교통안전 증진에 이바지함을 목적으로 한다." 
    },

    { 
        code: "A002",
        category: "교통안전법",
        question: "교통안전법의 제정 목적으로 옳지 않은 것은?",
        options: ["국가나 지방자치단체의 의무·추진체계 및 시책 등을 규정","교통 안전에 관한 국가나 지방자치단체의 시책 등을 종합적·계획적으로 추진","자동차 및 도로의 성능 및 안전을 확보하기 위함","교통 안전 증진에 이바지함"],
        answer: 2,
        explanation: "" 
    },


    { 
        code: "A003",
        category: "교통안전법",
        question: "교통안전법에서 말하는 교통수단이 될 수 없는 것은?",
        options: ["해사안전기본법에 의한 선박","철도산업발전기본법에 의한 철도 차량","교통안전법에 의한 차마","항공법에 의한 항공기"],
        answer: 2,
        explanation: `"교통수단"이라 함은 사람이 이동하거나 화물을 운송하는데 이용되는 것으로서 다음 각 목의 어느 하나에 해당하는 운송수단을 말한다. (교통안전법 제2조)

        1.｢도로교통법｣에 의한 차마 또는 노면 전차, ｢철도산업발전 기본법｣에 의한 철도 차량(도시철도를 포함한다) 또는 ｢궤도운송법｣에 따른 궤도에 의하여 교통용으로 사용되는 용구 등 육상교통용으로 사용되는 모든 운송수단(이하 "차량"이라 한다)에 따른 궤도에 의하여 교통용으로 사용되는 용구 등 육상교통용으로 사용되는 모든 운송수단
        2.｢해사안전기본법｣에 의한 선박 등 수상 또는 수중의 항행에 사용되는 모든 운송수단
        3.｢항공안전법｣에 의한 항공기 등 항공교통에 사용되는 모든 운송수단 ` 
    },

    { 
        code: "A004",
        category: "교통안전법",
        question: "다음 중 교통안전법상의 '교통수단'을 규정하고 있는 법으로 옳지 않은 것은?",
        options: ["도로교통법","해양법","철도산업발전기본법","항공안전법"],
        answer: 1,
        explanation: "" 
    },

    { 
        code: "A005",
        category: "교통안전법",
        question: "다음 중 교통안전법상 교통시설에 속하지 않는 것은?",
        options: ["철도","궤도","수로","정류장"],
        answer: 3,
        explanation: `"교통시설"이라 함은 도로·철도·궤도·항만·어항·수로·공항·비행장 등 교통수단의 운행·운항 또는 항행에 필요한 시설과 그 시설에 부속되어 사람의 이동 또는 교통수단의 원활하고 안전한 운행·운항 또는 항행을 보조하는 교통안전 표지·교통 관제시설·항행 안전시설 등의 시설 또는 공작물을 말한다.`
    },

    { 
        code: "A006",
        category: "교통안전법",
        question: "교통안전법 상 주요 내용으로 옳지 않은 것은?",
        options: ["교통사고의 감소 촉진","경찰공무원의 단속 강호","지방자치단체의 책임 강조","운수업자의 안전 의무"],
        answer: 1,
        explanation: "" 
    },

    { 
        code: "A007",
        category: "교통안전법",
        question: "교통안전법상 사람 또는 화물의 이동·운송과 관련된 활동을 수행하기 위하여 개별적으로 또는 서로 유기적으로 연계되어 있는 교통 수단 및 교통시설의 이용·관리·운영체계 또는 이와 관련된 산업 및 제도 등을 무엇이라 하나?",
        options: ["교통수단","교통시설","교통체계","교통사업자"],
        answer: 2,
        explanation: `"교통체계'라 함은 사람 또는 화물의 이동·운송과 관련된 활동을 수행하기 위하여 개별적으로 또는 서로 유기적으로 연계되어 있는 교통 수단 및 교통 시설의 이용·관리·운영체계 또는 이와 관련된 산업 및 제도 등을 말한다.`
    },

    { 
        code: "A008",
        category: "교통안전법",
        question: "교통안전법상 교통수단·교통시설 또는 교통체계를 운행·운항·설치·관리 또는 운영 등을 하는 자 등을 일반적으로 무엇이라고 하는가?",
        options: ["교통사업자","지방행정기관","교통행정기관","교통안전 점검자"],
        answer: 0,
        explanation: `"교통사업자"라 함은 교통수단·교통시설 또는 교통체계를 운행·운항·설치·관리 또는 운영 등을 하는 자로서 다음 각 목의 어느 하나에 해당하는 자를 말한다. (교통안전법 제2조)

        1.여객 자동차운수사업자, 화물자동차운수사업자, 철도사업자, 항공 운송사업자, 해운업자 등 교통 수단을 이용하여 운송 관련 사업을 영위하는 자
        2.교통시설을 설치·관리 또는 운영하는 자
        3.교통수단 운영자 및 교통시설설치·관리자 외에 교통수단 제조사업자, 교통 관련 교육·연구·조사기관 등 교통수단·교통시설 또는 교통체계와 관련된 영리적·비영리적 활동을 수행하는 자`
    },

    {
        code: "A009",
        category: "교통안전법",
        question: "다음 중 교통안전법상의 교통사업자에 해당하지 않는 자는?",
        options: [
            "교통수단 운영자", 
            "교통체계와 관련된 영리적·비영리적 활동을 수행하는 자", 
            "교통시설설치·관리자", 
            "교통 안전 점검자"
        ],
        answer: 3, 
        explanation: ""
    },

    {
        code: "A010",
        category: "교통안전법",
        question: "교통안전법상 교통사업자 중에서 교통수단 운영자로 옳지 않은 자는?",
        options: [
            "교통시설설치·관리자", 
            "여객 자동차 운수사업자", 
            "항공 운송 사업자", 
            "철도사업자"
        ],
        answer: 0, // 가(1번)
        explanation: ""
    },

    {
        code: "A011",
        category: "교통안전법",
        question: "교통안전법상 교통안전에 관한 주요 정책의 심의 조정을 위해 지방기초단체에 설치하는 기구는?",
        options: [
            "국가교통위원회", 
            "지방교통위원회", 
            "시·군·구교통안전위원회", 
            "중앙교통위원회"
        ],
        answer: 2, // 다(3번)
        explanation: ""
    },
    {
        code: "A012",
        category: "교통안전법",
        question: "교통안전법에서 교통안전 정책상 특히 필요성이 인정되는 경우 지정행정기관으로 지정할 수 있는 사람은?",
        options: [
            "대통령", 
            "국무총리", 
            "행정안전부장관", 
            "고용노동부장관"
        ],
        answer: 1,
        explanation: `교통수단·교통시설 또는 교통체계의 운행·운항·설치 또는 운영 등에 관하여 지도·감독을 행하거나 관련 법령·제도를 관장하는 ｢정부조직법｣에 의한 중앙행정기관으로서 대통령령으로 정하는 행정기관으로 다음과 같다.
        (...)
        16. 국무총리가 교통 안전 정책상 특히 필요하다고 인정하여 지정하는 중앙행정기관`
    },

    {
        code: "A013",
        category: "교통안전법",
        question: "교통안전법상 교통 행정기관이 교통안전법 또는 관계 법령에 따라 소관 교통수단에 대하여 교통안전에 관한 위험 요인을 조사·점검 및 평가하는 모든 활동을 무엇이라 하나?",
        options: [
            "교통수단 안전 점검", 
            "교통안전 진단", 
            "교통 안전 평가", 
            "교통안전교육"
        ],
        answer: 0,
        explanation: ""
    },

    {
        code: "A014",
        category: "교통안전법",
        question: "교통안전법에서 지방자치단체의 의무가 아닌 것은?",
        options: [
            "교통 안전에 관한 시책을 수립 및 시행",
            "지역개발·교육·문화 및 법무 등에 관한 계획 및 정책을 수립하는 경우에는 교통 안전에 관한 사항을 배려",
            "주민의 생명·신체 및 재산을 보호",
            "교통시설의 설치 또는 관리"
        ],
        answer: 3, // 라(4번)
        explanation: ""
    },

    {
        code: "A015",
        category: "교통안전법",
        question: "교통안전법상의 용어설명 중 옳지 않은 것은?",
        options: [
            `"교통사고"라 함은 교통수단의 운행·항행·운항과 관련된 사람의 사상 또는 물건의 손괴를 말한다.`,
            `"지정행정기관"이라 함은 교통수단·교통시설 또는 교통체계의 운행·운항·설치 또는 운영 등에 관하여 지도·감독을 행하거나 관련 법령·제도를 관장하는 「정부조직법」에 의한 중앙행정기관으로서 국토교통부령이 정하는 행정기관을 말한다.`,
            `"교통체계"라 함은 사람 또는 화물의 이동·운송과 관련된 활동을 수행하기 위하여 개별적으로 또는 서로 유기적으로 연계되어 있는 교통수단 및 교통시설의 이용·관리·운영체계 또는 이와 관련된 산업 및 제도 등을 말한다.`,
            `"교통행정기관"이라 함은 법령에 의하여 교통수단·교통시설 또는 교통체계의 운행·운항·설치 또는 운영 등에 관하여 교통사업자에 대한 지도·감독을 행하는 지정행정기관의 장, 특별시장·광역시장·도지사·특별자치 도지사 또는 시장·군수·구청장을 말한다.`
        ],
        answer: 1, // 나(2번) (※ 지정행정기관은 '대통령령'으로 정함)
        explanation: ""
    },

    {
        code: "A016",
        category: "교통안전법",
        question: "다음의 교통안전법상 내용 중 옳지 않은 것은?",
        options: [
            "지방자치단체는 국민의 생명·신체 및 재산을 보호하기 위하여 그 관할구역 내의 교통 안전에 관한 종합적인 시책을 수립하고 이를 시행하여야 한다.",
            "선박에 승선하여 항행업무 등에 종사하는 자는 법령이 정하는 바에 따라 당해 선박이 출항하기 전에 검사를 행하여야 하며, 기상 조건·해상조건·항로표지 및 사고의 통보 등을 확인하고 안전 운항을 하여야 한다.",
            "교통수단 제조사업자는 법령이 정하는 바에 따라 그가 제조하는 교통수단의 구조·설비 및 장치의 안전성이 향상되도록 노력하여야 한다.",
            "보행자는 도로를 통행함에 있어서 법령을 준수하여야 하고, 육상교통에 위험과 피해를 주지 아니하도록 노력하여야 한다."
        ],
        answer: 0, //가
        explanation: ""
    },

    {
        code: "A017",
        category: "교통안전법",
        question: "교통안전법상 다음 내용 중 옳지 않은 것은?",
        options: [
            "교통수단 운영자 및 교통시설설치·관리자 외에 교통수단 제조사업자, 교통 관련 교육·연구·조사기관 등 교통수단·교통시설 또는 교통체계와 관련된 영리적·비영리적 활동을 수행하는 자는 교통사업자에 해당한다.",
            "시·군·구 교통 안전 정책심의위원회는 위원장 1명과 부위원장 2명을 포함하여 40명 이내의 위원으로 구성한다.",
            "국토교통부장관은 국가의 전반적인 교통 안전수준의 향상을 도모하기 위하여 교통안전에 관한 기본계획을 5년 단위로 수립하여야 한다.",
            "보행자는 도로를 통행 함에 있어서 법령을 준수하여야 하고, 육상교통에 위험과 피해를 주지 아니하도록 노력하여야 한다."
        ],
        answer: 1, // 나(2번)
        explanation: ""
    },

    {
        code: "A018",
        category: "교통안전법",
        question: "국가 등은 교통 안전 장치 장착을 의무화 할 경우 이에 따른 비용을 대통령령으로 정하는 바에 따라 지원할 수 있는데 대상자가 아닌 것은?",
        options: [
            "여객자동차 운송사업자",
            "화물자동차 운송사업자",
            "화물자동차 운송 가맹사업자",
            "철도사업자"
        ],
        answer: 3, // 라(4번)
        explanation: ""
    },

    {
        code: "A019",
        category: "교통안전법",
        question: "정부가 매년 국회에 정기국회 개회 전까지 제출하여야 할 내용이 아닌 것은?",
        options: [
            "교통사고 상황",
            "국가교통 안전 기본계획",
            "국가교통 안전 시행계획의 추진 상황",
            "차로 이탈 경고장치의 장착 비용 예산"
        ],
        answer: 3, // 라(4번)
        explanation: "정부는 매년 국회에 정기국회 개회 전까지 교통사고 상황, 국가교통안전기본계획 및 국가교통안전시행계획의 추진 상황 등에 관한 보고서를 제출하여야 한다. (교통안전법 제10조)"
    },
    {
        code: "A020",
        category: "교통안전법",
        question: "교통안전법상 교통안전에 관한 주요 정책과 국가교통 안전 기본계획 등을 심의기구에 해당하는 것은?",
        options: [
            "국가교통위원회",
            "지방교통위원회",
            "국가교통 안전 정책위원회",
            "시·군·구 교통 안전위원회"
        ],
        answer: 0, // 가(1번)
        explanation: ""
    },

    {
        code: "A021",
        category: "교통안전법",
        question: "교통안전법상 정부가 장착 비용을 지원하는 첨단 안전장치에 해당하는 것은?",
        options: [
            "차로 이탈 경고장치",
            "자동 제동장치",
            "지능형 최고속도 제한 장치",
            "적응순환 제어 장치"
        ],
        answer: 0,
        explanation: ""
    },

    {
        code: "A022",
        category: "교통안전법",
        question: "교통안전법상 지역별 교통안전에 관한 주요 정책과 지역 교통안전 기본계획을 심의하기 위해 두는 위원회는?",
        options: [
            "국가교통위원회",
            "지방교통위원회",
            "국가교통 안전 실무위원회",
            "지방교통 안전 실무위원회"
        ],
        answer: 1,
        explanation: "지역별 교통안전에 관한 주요 정책과 지역 교통안전 기본계획은 「국가통합교통체계효율화법」에 따른 지방교통위원회 및 시장·군수·구청장 소속으로 설치하는 시·군·구 교통안전정책 심의위원회에서 심의한다. (교통안전법 제13조)"
    },

    {
        code: "A023",
        category: "교통안전법",
        question: "교통안전법상 시·군·구 교통안전 정책심의위원회는 몇 명 이내의 위원으로 구성되는가?",
        options: [
            "10인",
            "20인",
            "30인",
            "50인"
        ],
        answer: 1,
        explanation: "지역별 시·군·구 교통 안전 정책심의위원회는 위원장 1명과 부위원장 1명을 포함하여 20명 이내의 위원으로 구성하되, 교통 안전 관련 행정기관의 소속 공무원 및 교통 안전에 관한 전문지식과 경험이 풍부한 사람 중에서 시장·군수·구청장이 임명하거나 위촉하는 사람을 위원으로 한다. (시행령 제8조)"
    },

    {
        code: "A024",
        category: "교통안전법",
        question: "교통안전법상 교통안전에 관한 기본 계획에 대한 내용으로 옳지 않은 것은?",
        options: [
            "국토교통부장관은 국가의 전반적인 교통 안전수준의 향상을 도모하기 위하여 교통안전에 관한 기본계획을 5년 단위로 수립하여야 한다.",
            "국토교통부장관은 국가 교통안전 기본계획의 수립을 위하여 지정행정기관별로 추진할 교통안전에 관한 주요 계획 또는 시책에 관한 사항이 포함된 지침을 작성하여 지정행정기관의 장에게 통보하여야 하며, 지정행정기관의 장은 통보받은 지침에 따라 소관별 교통안전에 관한 계획안을 국토교통부장관에게 제출하여야 한다.",
            "국토교통부장관은 제출받은 소관별 교통안전에 관한 계획안을 종합·조정하여 국가교통안전 기본계획안을 작성한 후 지방교통위원회의 심의를 거쳐 이를 확정한다.",
            "국토교통부장관은 확정된 국가교통안전기본계획을 지정행정기관의 장과 시·도지사에게 통보하고, 이를 공고(인터넷 게재를 포함한다.)하여야 한다."
        ],
        answer: 2,
        explanation: ""
    },


    //철도산업발전기본법 파트

    { 
        code: "B001",
        category: "철도산업발전기본법",
        question: "철도산업발전기본법 문제 1",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "해설" 
    },

    //철도안전법파트

    { 
        code: "C001",
        category: "철도안전법", 
        question: "철도안전법 문제 1", 
        options: ["1", "2", "3", "4"], 
        answer: 2, 
        explanation: "해설" 
    },
    
    // [2교시] 교통안전관리론 파트
    { 
        code: "D001",
        category: "교통안전관리론",
        question: "교통안전관리론 문제 1", 
        options: ["1", "2", "3", "4"], 
        answer: 0,
        explanation: "해설"
    },

    // 철도 공학 파트

    { 
        code: "E001",
        category: "철도공학",
        question: "철도공학 문제 1",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "해설" 
    },

    //열차운전 파트

    { 
        code: "F001",
        category: "열차운전",
        question: "열차운전 문제 1", 
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "해설"
    }
    // 실제로는 각 과목별로 충분한 문제(최소 25문제 이상)를 채워주세요.
];

// --- 전역 상태 변수 ---
let currentExamStage = 0; // 1 = 1교시, 2 = 2교시
const OMR_ITEMS_PER_PAGE = 25; 
let selectedQuestions = []; 
let userAnswers = [];       
let currentQuestionIndex = 0; 
let currentOmrPage = 0; 
let timeRemaining = 0; 
let timerInterval;

// 누적 데이터 저장 (오답노트 및 최종 계산용)
let accumulatedQuestions = [];
let accumulatedAnswers = [];

// --- DOM 요소 연결 ---
const mainStartScreen = document.getElementById('main-start-screen');
const p1StartScreen = document.getElementById('p1-start-screen');
const p2StartScreen = document.getElementById('p2-start-screen');
const examHeader = document.getElementById('exam-header');
const examWrapper = document.getElementById('exam-wrapper');
const examTitle = document.getElementById('exam-title');
const resultArea = document.getElementById('result-area');
const resultTitle = document.getElementById('result-title');
const scoreDisplay = document.getElementById('score-display');

const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsListEl = document.getElementById('options-list');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

const omrGridEl = document.getElementById('omr-grid');
const omrPageInfo = document.getElementById('omr-page-info');
const omrPrevBtn = document.getElementById('omr-prev-btn');
const omrNextBtn = document.getElementById('omr-next-btn');

const nextStageBtn = document.getElementById('next-stage-btn');
const retryBtn = document.getElementById('retry-btn');
const reviewArea = document.getElementById('review-area');
const reviewBtn = document.getElementById('review-btn');
const reviewListEl = document.getElementById('review-list');

// --- 1. 교시별 네비게이션 이벤트 ---
document.getElementById('go-to-p1-btn').addEventListener('click', () => {
    mainStartScreen.style.display = 'none';
    p1StartScreen.style.display = 'block';
});

document.getElementById('start-p1-btn').addEventListener('click', () => {
    p1StartScreen.style.display = 'none';
    startExam(1);
});

document.getElementById('start-p2-btn').addEventListener('click', () => {
    p2StartScreen.style.display = 'none';
    startExam(2);
});

nextStageBtn.addEventListener('click', () => {
    resultArea.style.display = 'none';
    reviewArea.style.display = 'none';
    p2StartScreen.style.display = 'block';
});

// --- 2. 시험 준비 및 데이터 로드 ---
function startExam(stage) {
    currentExamStage = stage;
    examHeader.style.display = 'flex';
    examWrapper.style.display = 'flex';

    if (stage === 1) {
        // 1교시 진입 시 누적 배열 초기화
        accumulatedQuestions = [];
        accumulatedAnswers = [];

        examTitle.textContent = "1교시: 교통법규";
        
        const poolTraffic = questionBank.filter(q => q.category === "교통안전법").sort(() => 0.5 - Math.random());
        const poolIndustry = questionBank.filter(q => q.category === "철도산업발전기본법").sort(() => 0.5 - Math.random());
        const poolSafety = questionBank.filter(q => q.category === "철도안전법").sort(() => 0.5 - Math.random());

        // ±1~3문제 변동 알고리즘 적용
        let countTraffic = Math.min(poolTraffic.length, 12 + (Math.floor(Math.random() * 5) - 2));
        let countIndustry = Math.min(poolIndustry.length, 15 + (Math.floor(Math.random() * 5) - 2));
        let countSafety = Math.min(poolSafety.length, 50 - countTraffic - countIndustry);

        const sel1 = poolTraffic.slice(0, countTraffic);
        const sel2 = poolIndustry.slice(0, countIndustry);
        const sel3 = poolSafety.slice(0, countSafety);

        selectedQuestions = [...sel1, ...sel2, ...sel3].sort(() => 0.5 - Math.random());
        timeRemaining = 50 * 60; // 50분
    } 
    else if (stage === 2) {
        examTitle.textContent = "2교시: 관리론 / 공학 / 운전";
        
        const poolTheory = questionBank.filter(q => q.category === "교통안전관리론").sort(() => 0.5 - Math.random());
        const poolEng = questionBank.filter(q => q.category === "철도공학").sort(() => 0.5 - Math.random());
        const poolDrive = questionBank.filter(q => q.category === "열차운전").sort(() => 0.5 - Math.random());

        const selTheory = poolTheory.slice(0, Math.min(25, poolTheory.length));
        const selEng = poolEng.slice(0, Math.min(25, poolEng.length));
        const selDrive = poolDrive.slice(0, Math.min(25, poolDrive.length));

        // 2교시는 순서대로 출제되므로 섞지 않음
        selectedQuestions = [...selTheory, ...selEng, ...selDrive];
        timeRemaining = 75 * 60; // 75분
    }

    userAnswers = new Array(selectedQuestions.length).fill(null);
    currentQuestionIndex = 0;
    currentOmrPage = 0;
    
    startTimer();
    renderQuestion();
}

// --- 3. 타이머 제어 ---
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerEl.textContent = `남은 시간: ${minutes}:${seconds}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("제한 시간이 종료되었습니다. 자동으로 제출됩니다.");
            submitExam();
        }
    }, 1000);
}

// --- 4. 화면 및 OMR 렌더링 ---
function renderQuestion() {
    const qData = selectedQuestions[currentQuestionIndex];
    questionNumberEl.textContent = `문제 ${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
    questionTextEl.textContent = qData.question;
    
    optionsListEl.innerHTML = '';
    qData.options.forEach((optText, index) => {
        const li = document.createElement('li');
        
        // CSS Flexbox를 활용해 옵션 번호와 내용을 수직 중앙 정렬
        li.innerHTML = `
            <span class="option-number">${index + 1}.</span>
            <div class="option-content">${optText}</div>
        `;

        if (userAnswers[currentQuestionIndex] === index) {
            li.classList.add('selected');
        }
        li.addEventListener('click', () => selectOption(index, li));
        optionsListEl.appendChild(li);
    });
    
    const expectedOmrPage = Math.floor(currentQuestionIndex / OMR_ITEMS_PER_PAGE);
    if (currentOmrPage !== expectedOmrPage) {
        currentOmrPage = expectedOmrPage;
    }

    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }

    renderOMR(); 
}

function selectOption(selectedIndex, liElement) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    const allOptions = optionsListEl.querySelectorAll('li');
    allOptions.forEach(li => li.classList.remove('selected'));
    liElement.classList.add('selected');
    renderOMR(); 
}

function renderOMR() {
    omrGridEl.innerHTML = ''; 
    const totalPages = Math.ceil(selectedQuestions.length / OMR_ITEMS_PER_PAGE) || 1;
    omrPageInfo.textContent = `${currentOmrPage + 1} / ${totalPages}`;
    
    omrPrevBtn.disabled = currentOmrPage === 0;
    omrNextBtn.disabled = currentOmrPage === totalPages - 1;

    const startIndex = currentOmrPage * OMR_ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + OMR_ITEMS_PER_PAGE, selectedQuestions.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const btn = document.createElement('div');
        btn.className = 'omr-btn';

        const qNum = document.createElement('span');
        qNum.className = 'omr-qnum';
        qNum.textContent = i + 1; 

        const ansNum = document.createElement('span');
        ansNum.className = 'omr-ans';
        
        if (userAnswers[i] !== null) {
            btn.classList.add('answered');
            ansNum.textContent = `(${userAnswers[i] + 1})`; 
        } else {
            ansNum.innerHTML = '&nbsp;'; 
        }

        if (i === currentQuestionIndex) {
            btn.classList.add('current');
        }

        btn.appendChild(qNum);
        btn.appendChild(ansNum);

        btn.addEventListener('click', () => {
            currentQuestionIndex = i;
            renderQuestion();
        });
        
        omrGridEl.appendChild(btn);
    }
}

omrPrevBtn.addEventListener('click', () => { if (currentOmrPage > 0) { currentOmrPage--; renderOMR(); } });
omrNextBtn.addEventListener('click', () => { const totalPages = Math.ceil(selectedQuestions.length / OMR_ITEMS_PER_PAGE); if (currentOmrPage < totalPages - 1) { currentOmrPage++; renderOMR(); } });
prevBtn.addEventListener('click', () => { if (currentQuestionIndex > 0) { currentQuestionIndex--; renderQuestion(); } });
nextBtn.addEventListener('click', () => { if (currentQuestionIndex < selectedQuestions.length - 1) { currentQuestionIndex++; renderQuestion(); } });

submitBtn.addEventListener('click', () => {
    const unansweredCount = userAnswers.filter(ans => ans === null).length;
    let confirmMsg = "정말 제출하시겠습니까?";
    if (unansweredCount > 0) {
        confirmMsg = `아직 풀지 않은 문제가 ${unansweredCount}개 있습니다.\n정말 제출하시겠습니까?`;
    }
    if(confirm(confirmMsg)) { submitExam(); }
});

// --- 5. 제출 및 채점 ---
function submitExam() {
    clearInterval(timerInterval); 
    
    // 현재 교시의 문제와 답안을 전체 누적 배열에 추가
    accumulatedQuestions = accumulatedQuestions.concat(selectedQuestions);
    accumulatedAnswers = accumulatedAnswers.concat(userAnswers);

    examHeader.style.display = 'none';
    examWrapper.style.display = 'none'; 
    resultArea.style.display = 'block';

    if (currentExamStage === 1) {
        // [1교시 종료 처리] 결과나 오답노트를 띄우지 않고 2교시 안내만 표시합니다.
        resultTitle.textContent = "1교시 종료";
        scoreDisplay.innerHTML = `
            <div style="font-size: 1.2rem; color: #333; margin: 30px 0;">
                수고하셨습니다. 1교시가 종료되었습니다.<br>
                <span style="font-size: 0.95rem; color: #d32f2f;">(점수 결과 및 오답노트는 2교시 종료 후에 종합하여 확인할 수 있습니다.)</span>
            </div>
        `;
        
        nextStageBtn.style.display = 'inline-block'; // 2교시 준비 버튼 활성화
        retryBtn.style.display = 'none';
        reviewBtn.style.display = 'none';

    } else if (currentExamStage === 2) {
        // [2교시 종료 처리] 1교시+2교시 데이터 통합하여 성적 산출
        resultTitle.textContent = "모든 시험 종료 (1, 2교시 종합 결과)";
        nextStageBtn.style.display = 'none';
        retryBtn.style.display = 'inline-block';
        reviewListEl.innerHTML = ''; 

        // 과목별 정답 수 집계를 위한 객체
        let subjStats = {
            "교통법규": { correct: 0, total: 0 },
            "교통안전관리론": { correct: 0, total: 0 },
            "철도공학": { correct: 0, total: 0 },
            "열차운전": { correct: 0, total: 0 }
        };

        let wrongCount = 0;

        accumulatedQuestions.forEach((q, index) => {
            let uAns = accumulatedAnswers[index];
            let isCorrect = (uAns === q.answer);
            
            // 1교시의 3개 법령은 '교통법규'로 합산
            let majorSubj = ["교통안전법", "철도산업발전기본법", "철도안전법"].includes(q.category) ? "교통법규" : q.category;
            
            if (subjStats[majorSubj]) {
                subjStats[majorSubj].total++;
                if (isCorrect) subjStats[majorSubj].correct++;
            }

            // 오답노트 작성 (틀린 문제만 추가)
            if (!isCorrect) {
                wrongCount++;
                const li = document.createElement('li');
                li.className = 'review-item';
                
                let userAnswerText = uAns !== null ? `${uAns + 1}. ${q.options[uAns]}` : "선택 안 함";
                let answerClass = uAns !== null ? "user-wrong" : "user-none";
                const correctAnswerText = `${q.answer + 1}. ${q.options[q.answer]}`;

                let explanationHTML = "";
                if (q.explanation) { 
                    const formattedExplanation = q.explanation.replace(/\n/g, '<br>');
                    explanationHTML = `<div class="review-explanation"><strong>💡 해설:</strong><br> ${formattedExplanation}</div>`;
                }

                // 문제 코드가 있는 경우 함께 출력
                let questionCodeHTML = q.code ? `<span class="review-qcode">문제코드: ${q.code}</span>` : '';

                li.innerHTML = `
                    <div class="review-question">문제 ${index + 1}. [${q.category}] ${questionCodeHTML}<br><br>${q.question}</div>
                    <div class="review-answers">
                        <span class="${answerClass}">내 답안: ${userAnswerText}</span>
                        <span class="correct-answer">정답: ${correctAnswerText}</span>
                    </div>
                    ${explanationHTML}
                `;
                reviewListEl.appendChild(li);
            }
        });

        // 점수 100점 만점으로 환산 (문제 수가 부족해 분모가 0이 될 경우를 대비해 || 1 추가)
        let trafficScore = (subjStats["교통법규"].correct / (subjStats["교통법규"].total || 1)) * 100;
        let theoryScore = (subjStats["교통안전관리론"].correct / (subjStats["교통안전관리론"].total || 1)) * 100;
        let engScore = (subjStats["철도공학"].correct / (subjStats["철도공학"].total || 1)) * 100;
        let driveScore = (subjStats["열차운전"].correct / (subjStats["열차운전"].total || 1)) * 100;

        // 총합 점수 계산 (4과목 환산 점수 평균)
        let totalScore = (trafficScore + theoryScore + engScore + driveScore) / 4;

        // 합격 여부 (평균 60 이상, 각 과목 40 이상 과락 면제 조건)
        let isPass = totalScore >= 60 && trafficScore >= 40 && theoryScore >= 40 && engScore >= 40 && driveScore >= 40;

        // 점수판 HTML 생성
        let scoreHTML = `
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; text-align: left; margin: 20px auto; max-width: 450px;">
                <h3 style="margin-top: 0; color: #0052a4; text-align: center;">과목별 성적 (100점 만점 기준)</h3>
                <ul style="list-style: none; padding: 0; line-height: 2; font-size: 1.1rem;">
                    <li><strong>[1교시] 교통법규:</strong> <span style="float: right; ${trafficScore < 40 ? 'color: red; font-weight: bold;' : ''}">${trafficScore.toFixed(1)}점</span></li>
                    <li><strong>[2교시] 교통안전관리론:</strong> <span style="float: right; ${theoryScore < 40 ? 'color: red; font-weight: bold;' : ''}">${theoryScore.toFixed(1)}점</span></li>
                    <li><strong>[2교시] 철도공학:</strong> <span style="float: right; ${engScore < 40 ? 'color: red; font-weight: bold;' : ''}">${engScore.toFixed(1)}점</span></li>
                    <li><strong>[2교시] 열차운전:</strong> <span style="float: right; ${driveScore < 40 ? 'color: red; font-weight: bold;' : ''}">${driveScore.toFixed(1)}점</span></li>
                </ul>
                <hr style="border: 0; border-top: 1px solid #dee2e6; margin: 15px 0;">
                <h3 style="margin: 0; color: #d32f2f; text-align: center; font-size: 1.4rem;">총 평균 점수: ${totalScore.toFixed(1)}점</h3>
            </div>
        `;

        // 합격/불합격 안내 표시
        if (isPass) {
            scoreHTML += `<div style="color: blue; font-weight: bold; margin-top:20px; font-size: 1.3rem;">🎉 축하합니다! 최종 합격 기준을 충족하셨습니다.</div>`;
        } else {
            scoreHTML += `<div style="color: red; font-weight: bold; margin-top:20px; font-size: 1.2rem;">❌ 불합격입니다. (총점 60점 미만 또는 40점 미만 과락 발생)</div>`;
        }

        scoreDisplay.innerHTML = scoreHTML;

        // 만점일 경우 오답노트 숨기기
        if (wrongCount === 0) {
            reviewBtn.style.display = 'none';
        } else {
            reviewBtn.style.display = 'inline-block';
        }
    }
}

// 오답노트 토글 기능
reviewBtn.addEventListener('click', () => {
    if (reviewArea.style.display === 'none') {
        reviewArea.style.display = 'block';
        reviewBtn.textContent = '오답노트 닫기';
    } else {
        reviewArea.style.display = 'none';
        reviewBtn.textContent = '오답노트 보기';
    }
});
