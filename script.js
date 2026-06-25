// 1. 문제 은행 데이터 (예시로 6개만 작성. 실제로는 여기에 200개를 채우시면 됩니다.)
const questionBank = [
    {
        category: "교통안전법",
        question: "교통안전법의 제정 목적으로 가장 거리가 먼 것은?",
        options: ["교통안전에 관한 기본적이고 종합적인 시책 추진", "국가 및 지방자치단체의 교통안전 책임 규명", "교통사고로 인한 피해자의 신속한 구제", "교통안전 증진을 통한 국민의 생명과 재산 보호"],
        answer: 2 // 3번 보기가 정답 (인덱스는 0부터 시작하므로 2)
    },
    {
        category: "교통안전법",
        question: "국가교통안전기본계획은 몇 년마다 수립해야 하는가?",
        options: ["3년", "5년", "7년", "10년"],
        answer: 1
    },
    {
        category: "철도산업발전기본법",
        question: "철도산업발전기본법상 '철도시설'에 해당하지 않는 것은?",
        options: ["철도차량", "선로 및 선로에 부대되는 시설", "철도역 시설", "철도 운영을 위한 통신설비"],
        answer: 0
    },
    {
        category: "철도산업발전기본법",
        question: "철도산업발전기본계획의 수립권자는?",
        options: ["대통령", "국무총리", "국토교통부장관", "한국철도공사 사장"],
        answer: 2
    },
    {
        category: "철도안전법",
        question: "철도안전법상 철도차량을 운전하고자 하는 자가 받아야 하는 면허는?",
        options: ["철도운영면허", "철도차량운전면허", "관제자격증명", "철도안전관리자 자격"],
        answer: 1
    },
    {
        category: "철도안전법",
        question: "철도종사자가 음주 상태에서 업무를 수행하는 것을 금지하는 기준(혈중알코올농도)은?",
        options: ["0.03퍼센트 이상", "0.05퍼센트 이상", "0.08퍼센트 이상", "0.1퍼센트 이상"],
        answer: 0
    }
    // ... 이런 식으로 총 200개의 문제를 작성합니다.
];

// 2. 상태 변수 설정
const EXAM_TIME_MINUTES = 50; // 제한 시간 50분
const QUESTIONS_PER_EXAM = 50; // 출제 문제 수

let selectedQuestions = []; // 랜덤 추출된 50문제가 담길 배열
let userAnswers = [];       // 사용자가 선택한 답안을 저장할 배열
let currentQuestionIndex = 0; // 현재 풀고 있는 문제의 인덱스
let timeRemaining = EXAM_TIME_MINUTES * 60; // 초 단위로 변환
let timerInterval;

// DOM 요소 미리 찾아두기
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const categoryEl = document.getElementById('category-badge');
const questionTextEl = document.getElementById('question-text');
const optionsListEl = document.getElementById('options-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// 3. 시험 초기화 함수
function initExam() {
    // 배열을 무작위로 섞은 뒤 원하는 개수만큼 잘라냄 (Fisher-Yates 알고리즘 대신 간단한 sort 셔플 사용)
    selectedQuestions = [...questionBank].sort(() => 0.5 - Math.random());
    
    // 테스트를 위해 문제은행 갯수가 QUESTIONS_PER_EXAM보다 적을 경우를 대비한 안전장치
    const questionCount = Math.min(QUESTIONS_PER_EXAM, selectedQuestions.length);
    selectedQuestions = selectedQuestions.slice(0, questionCount);
    
    // 답안 배열 초기화 (아직 안 푼 문제는 null)
    userAnswers = new Array(selectedQuestions.length).fill(null);
    
    startTimer();
    renderQuestion();
}

// 4. 타이머 함수
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        
        // 10보다 작으면 앞에 0을 붙임
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

// 5. 화면에 문제 렌더링
function renderQuestion() {
    const qData = selectedQuestions[currentQuestionIndex];
    
    questionNumberEl.textContent = `문제 ${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
    
    questionTextEl.textContent = qData.question;
    
    // 보기 렌더링
    optionsListEl.innerHTML = '';
    qData.options.forEach((optText, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${optText}`;
        
        // 이전에 선택한 답안이 있다면 하이라이트 처리
        if (userAnswers[currentQuestionIndex] === index) {
            li.classList.add('selected');
        }
        
        li.addEventListener('click', () => selectOption(index, li));
        optionsListEl.appendChild(li);
    });
    
    // 버튼 상태 업데이트
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// 6. 보기 선택 처리
function selectOption(selectedIndex, liElement) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // 모든 보기의 selected 클래스 제거 후 클릭한 것에만 추가
    const allOptions = optionsListEl.querySelectorAll('li');
    allOptions.forEach(li => li.classList.remove('selected'));
    liElement.classList.add('selected');
}

// 7. 버튼 이벤트 리스너
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
});

submitBtn.addEventListener('click', () => {
    if(confirm("정말 제출하시겠습니까? (선택하지 않은 문제도 오답 처리됩니다.)")) {
        submitExam();
    }
});

// 8. 시험 제출 및 채점
function submitExam() {
    clearInterval(timerInterval); // 타이머 정지
    
    let score = 0;
    let wrongCount = 0;
    const reviewListEl = document.getElementById('review-list');
    reviewListEl.innerHTML = ''; // 기존 오답노트 초기화
    
    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        } else {
            // 틀린 문제이거나 선택하지 않은 문제 처리
            wrongCount++;
            const li = document.createElement('li');
            li.className = 'review-item';
            
            // 사용자가 선택한 답안 텍스트 확인 (null인 경우 '선택 안 함' 처리)
            let userAnswerText = "";
            let answerClass = "user-wrong";
            
            if (userAnswers[index] !== null) {
                userAnswerText = `${userAnswers[index] + 1}. ${q.options[userAnswers[index]]}`;
            } else {
                userAnswerText = "선택 안 함 (시간 초과 또는 미기입)";
                answerClass = "user-none";
            }
            
            const correctAnswerText = `${q.answer + 1}. ${q.options[q.answer]}`;

            // 오답노트에 들어갈 HTML 구조 생성
            li.innerHTML = `
                <div class="review-question">문 ${index + 1}. [${q.category}] ${q.question}</div>
                <div class="review-answers">
                    <span class="${answerClass}">내 답안: ${userAnswerText}</span>
                    <span class="correct-answer">정답: ${correctAnswerText}</span>
                </div>
            `;
            reviewListEl.appendChild(li);
        }
    });
    
    // 백분율 계산
    const finalScore = Math.round((score / selectedQuestions.length) * 100);
    
    document.getElementById('exam-area').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    
    const resultArea = document.getElementById('result-area');
    const scoreDisplay = document.getElementById('score-display');
    const reviewBtn = document.getElementById('review-btn');
    
    resultArea.style.display = 'block';
    scoreDisplay.innerHTML = `총 ${selectedQuestions.length}문제 중 <strong>${score}문제</strong>를 맞혔습니다.<br>점수: <strong>${finalScore}점</strong>`;
    
    // 합격 기준(일반적으로 평균 60점 이상) 안내 추가
    if(finalScore >= 60) {
        scoreDisplay.innerHTML += "<br><br><span style='color:blue; font-weight:bold;'>합격 기준을 충족하셨습니다!</span>";
    } else {
        scoreDisplay.innerHTML += "<br><br><span style='color:red;'>아쉽지만 불합격입니다. 법령을 다시 한번 숙지해보세요.</span>";
    }
}

// [파일의 맨 아래에 다음 코드를 추가하세요]
// 오답노트 토글 기능 (버튼 클릭 시 보이기/숨기기)
const reviewBtn = document.getElementById('review-btn');
const reviewArea = document.getElementById('review-area');

reviewBtn.addEventListener('click', () => {
    if (reviewArea.style.display === 'none') {
        reviewArea.style.display = 'block';
        reviewBtn.textContent = '오답노트 닫기';
    } else {
        reviewArea.style.display = 'none';
        reviewBtn.textContent = '오답노트 보기';
    }
});

// 페이지 로드 시 시험 시작
window.onload = initExam;