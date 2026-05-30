// ======================
// رد آخر - نسخه نخبه با نقشه، امتیاز، تایمر
// ======================

const stagesData = [
    {
        id: 1,
        name: "پناه آخر",
        narrative: "باران سردی روی سنگفرش‌های خیس کوچه‌های زوال می‌بارید. نفس‌هایت در هوای نمناک به شکل ابرهای کوتاهی نمایان می‌شد. سال‌هاست دنبال حقیقت گمشده‌ای، و حالا سرنخی تو را به کافه‌ی «آخرین پناه» کشانده. پشت میز گوشه، مردی با کلاه کج نشسته و پاکتی کاهی را روی میز هل می‌دهد. نجوا می‌کند: «اگر می‌خواهی بدانی آن شب در اسکله چه گذشت، باید رمز قفسه امانات را پیدا کنی. حواست به جمجمه‌ی روی در باشد.»",
        atmosphere: { scent: "بوی قهوه سوخته و تنباکو", sound: "صدای خش خش باران و زنگ در دوردست" },
        puzzleQuestion: "به درب قفسه امانات نزدیک می‌شوی. روی آن جمجمه‌ای حک شده با دو چشم خالی. زیر جمجمه نوشته: «آنچه که همیشه می‌بیند اما دیده نمی‌شود، کلید حقیقت است.» رمز عبور (یک کلمه) چیست؟",
        options: ["سایه", "نگاه", "باد", "ماه", "آینه"],
        correctIndex: 1,
        clueReward: "🔑 سرنخ: «چشم‌هایی که در تاریکی می‌بینند» - نام شخص مرموز: سایه‌نورد",
        insightReward: 20
    },
    {
        id: 2,
        name: "تئاتر سکوت",
        narrative: "قفسه باز می‌شود. داخل آن یک عکس سیاه‌وسفید، نیمه سوخته، و یک کلید آهنی زنگ‌زده قرار دارد. عکس زنی را نشان می‌دهد با چشمانی ترسیده، پشت او ساختمانی آشنا: تئاتر متروک زوال. به طرف تئاتر می‌روی. در ورودی با دو سنگ‌قبر نمادین روبرو می‌شوی. روی یکی «دروغ» و روی دیگری «سکوت» حک شده. صدایی از درون می‌گوید: «تنها یکی از اینها تو را عبور می‌دهد، آن که کلید حقیقت است.»",
        atmosphere: { scent: "گرد و غبار کهنه و پارافین", sound: "سکوت سنگین، فقط ضربان قلبت" },
        puzzleQuestion: "برای وارد شدن به تئاتر، باید روی کدام سنگ قدم بگذاری؟ دروغ یا سکوت؟",
        options: ["قدم گذاشتن روی سنگ «دروغ»", "قدم گذاشتن روی سنگ «سکوت»", "دور زدن سنگ‌ها از کنار دیوار", "گفتن یک کلمه رمز به در", "نادیده گرفتن و زدن لگد به در"],
        correctIndex: 1,
        clueReward: "🎭 سرنخ: «سکوت، حقیقت را فریاد می‌زند» - یادداشتی پیدا می‌کنی با آدرس: اسکله شرقی، انبار شماره ۷",
        insightReward: 25
    },
    {
        id: 3,
        name: "نت‌های گمشده",
        narrative: "از در عبور می‌کنی. هوای تئاتر سرد و بوی کپک و شراب کهنه می‌دهد. روی سن، یک پیانوی قدیمی، و روی آن نت‌هایی با لکه‌های قرمز. نزدیک که می‌روی، یک برگه روی زمین: «هر کسی که به دنبال حقیقت است باید سه نت از قلب شب بنوازد: نت اول در جایی که نور نمی‌تابد، نت دوم در جایی که آب جاری نیست، نت سوم در جایی که سکوت فریاد می‌زند.» سه شیء روی صحنه است: شمع، کاسه خالی، آینه شکسته.",
        atmosphere: { scent: "کپک، چوب نم زده و عطر گلهای خشک", sound: "وزش باد از شکاف در" },
        puzzleQuestion: "به ترتیب درست اشیاء را برای نواختن سه نت انتخاب کن:",
        options: ["شمع، آینه، کاسه خالی", "آینه، کاسه خالی، شمع", "کاسه خالی، شمع، آینه", "شمع، کاسه خالی، آینه", "آینه، شمع، کاسه خالی"],
        correctIndex: 3,
        clueReward: "🎹 سرنخ: نت‌ها کلید قفل جعبه را ساختند. درون جعبه: یک نوار صوتی با برچسب «حقیقت زوال»",
        insightReward: 30
    },
    {
        id: 4,
        name: "صدای حقیقت",
        narrative: "نوار صوتی را در دستگاه قدیمی تئاتر می‌گذاری. صدای لرزانی می‌گوید: «شهردار زوال به همراه رئیس کلانتری، قتل‌گاه اسکله را پوشانده‌اند. مدارک در صندوق امانات بانک مرکزی، شماره ۱۳، رمز...» ناگهان صدا قطع می‌شود. باید خودت رمز را پیدا کنی. روی دیوار پشت دستگاه، چند خط نوشته شده: «اولین روز هفته در شهر آبی، ساعت ۲۳، پل دوم، پایین‌ترین عدد آسمان.»",
        atmosphere: { scent: "پلاستیک سوخته و فلز داغ", sound: "صدای خش خش نوار و وزوز برق" },
        puzzleQuestion: "رمز ۴ رقمی صندوق امانات چیست؟ (اعداد را پشت سر هم بنویس)",
        options: ["۰۱۱۲", "۲۳۱۱", "۱۲۳۰", "۱۲۳۴", "۴۲۱۳"],
        correctIndex: 0,
        clueReward: "📜 سرنخ: رمز درست بود. داخل صندوق پرونده‌ای با نام «پروژه زوال» و یک کلید مسی به شکل مارپیچ",
        insightReward: 35
    },
    {
        id: 5,
        name: "رد آخر",
        narrative: "حالا به مرکز شهر زوال، برج ساعت قدیمی رسیده‌ای. می‌دانی حقیقت در زیرزمین برج پنهان شده. اما در ورودی یک صفحه کلید عددی نیاز به یک کلمه رمز دارد. بالای در حکاکی شده: «آغاز و پایان یک سفر؛ شهری که نامش را فراموش کرده‌ای، گمشده در میان کلمات». سرنخ‌های قبلی به اسم شهر اشاره داشتند: زوال. اما خود کلمه «زوال» یعنی پایان، افول.",
        atmosphere: { scent: "بوی باران بر سنگ و فلز زنگ زده", sound: "صدای قدم‌های خودت در هالهای از پژواک" },
        puzzleQuestion: "کلمه رمز ورود به زیرزمین برج چیست؟ (به مفهوم و اسم شهر توجه کن)",
        options: ["طلوع", "آغاز", "انحلال", "سقوط", "رستاخیز"],
        correctIndex: 0,
        clueReward: "💎 حقیقت آشکار شد: تمامی قتل‌ها دستور مستقیم از دفتر فرمانداری بود. پرونده برای همیشه بسته نمی‌شود... تو راز را فاش کردی.",
        insightReward: 50
    }
];

let currentStage = 0;
let gameCompleted = false;
let answerLocked = false;
let collectedClues = [];
let insightScore = 0;
let timerActive = false;
let timerInterval = null;
let timeLeft = 45;
let selectedAnswerThisStage = false;

// عناصر
const narrativeEl = document.getElementById('narrativeText');
const puzzleQuestionEl = document.getElementById('puzzleQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackArea = document.getElementById('feedbackArea');
const continueBtn = document.getElementById('continueBtn');
const resetBtn = document.getElementById('resetGameBtn');
const stageNumberEl = document.getElementById('stageNumber');
const cluesListEl = document.getElementById('cluesList');
const clueHintEl = document.getElementById('clueHint');
const insightScoreEl = document.getElementById('insightScore');
const clueCountEl = document.getElementById('clueCount');
const timerDisplay = document.getElementById('timerDisplay');
const toggleTimerBtn = document.getElementById('toggleTimerBtn');
const atmosphereSensor = document.getElementById('atmosphereSensor');
const scentText = document.getElementById('scentText');
const soundText = document.getElementById('soundText');
const mapStagesContainer = document.getElementById('mapStagesContainer');

function initGame() {
    document.getElementById('totalStages').textContent = stagesData.length;
    insightScore = 0;
    collectedClues = [];
    updateStatsUI();
    updateCluesDisplay();
    loadStage(0);
    renderStageMap();
    attachEvents();
    if (timerActive) stopTimer();
    timerActive = false;
    toggleTimerBtn.classList.remove('active');
    timerDisplay.textContent = '--';
}

function attachEvents() {
    continueBtn.addEventListener('click', goToNextStage);
    resetBtn.addEventListener('click', resetGame);
    toggleTimerBtn.addEventListener('click', toggleTimer);
}

function toggleTimer() {
    if (gameCompleted) return;
    timerActive = !timerActive;
    if (timerActive) {
        toggleTimerBtn.classList.add('active');
        startTimerForCurrentStage();
    } else {
        toggleTimerBtn.classList.remove('active');
        stopTimer();
        timerDisplay.textContent = '--';
        feedbackArea.innerHTML += '<br>⏸️ تایمر غیرفعال شد.';
    }
}

function startTimerForCurrentStage() {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = 45;
    timerDisplay.textContent = timeLeft;
    timerInterval = setInterval(() => {
        if (!timerActive || answerLocked || gameCompleted) return;
        if (timeLeft <= 1) {
            // زمان تمام شد - جریمه و قفل موقت
            clearInterval(timerInterval);
            timerDisplay.textContent = '0';
            if (!answerLocked && !gameCompleted) {
                feedbackArea.innerHTML = '⏰ زمان به پایان رسید! تمرکزت رو از دست دادی... یک سرنخ از دست رفتی و ۵ امتیاز کم شد.';
                insightScore = Math.max(0, insightScore - 5);
                updateStatsUI();
                answerLocked = true;
                const allBtns = document.querySelectorAll('.option-btn');
                allBtns.forEach(btn => btn.disabled = true);
                setTimeout(() => {
                    if (!gameCompleted && currentStage < stagesData.length) {
                        answerLocked = false;
                        allBtns.forEach(btn => btn.disabled = false);
                        feedbackArea.innerHTML = '⏳ می‌توانی دوباره تلاش کنی. اما زمان دوباره شروع شد.';
                        startTimerForCurrentStage();
                    }
                }, 3000);
            }
        } else {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function renderStageMap() {
    mapStagesContainer.innerHTML = '';
    stagesData.forEach((stage, idx) => {
        let status = 'locked';
        if (idx < currentStage) status = 'completed';
        else if (idx === currentStage) status = 'current';
        else if (idx === currentStage && !answerLocked) status = 'unlocked';
        if (gameCompleted && idx === stagesData.length-1) status = 'completed';
        
        const node = document.createElement('div');
        node.className = 'map-stage-node';
        node.innerHTML = `
            <div class="stage-circle ${status}">${stage.id}</div>
            <div class="stage-name">${stage.name}</div>
        `;
        mapStagesContainer.appendChild(node);
    });
}

function loadStage(stageIndex) {
    if (stageIndex >= stagesData.length) {
        completeGame();
        return;
    }
    const stage = stagesData[stageIndex];
    currentStage = stageIndex;
    stageNumberEl.textContent = stage.id;
    narrativeEl.textContent = stage.narrative;
    puzzleQuestionEl.textContent = stage.puzzleQuestion;
    scentText.textContent = `👃 ${stage.atmosphere.scent}`;
    soundText.textContent = `🔊 ${stage.atmosphere.sound}`;
    
    if (collectedClues.length > 0) {
        clueHintEl.innerHTML = `📌 آخرین سرنخ: ${collectedClues[collectedClues.length-1]}`;
    } else {
        clueHintEl.innerHTML = 'هیچ سرنخی هنوز کشف نشده...';
    }
    
    renderOptions(stage.options);
    answerLocked = false;
    selectedAnswerThisStage = false;
    continueBtn.disabled = true;
    feedbackArea.innerHTML = '⚡ یکی از گزینه‌ها را انتخاب کن... حواست به جزئیات باشد.';
    feedbackArea.className = 'feedback-area';
    
    if (timerActive) {
        stopTimer();
        startTimerForCurrentStage();
    }
    renderStageMap();
}

function renderOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.classList.add('option-btn');
        btn.dataset.index = idx;
        btn.addEventListener('click', () => handleAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIdx, btnElement) {
    if (answerLocked || gameCompleted || selectedAnswerThisStage) return;
    const stage = stagesData[currentStage];
    const isCorrect = (selectedIdx === stage.correctIndex);
    selectedAnswerThisStage = true;
    answerLocked = true;
    
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        btnElement.classList.add('correct-highlight');
        insightScore += stage.insightReward;
        if (!collectedClues.includes(stage.clueReward)) {
            collectedClues.push(stage.clueReward);
        }
        updateStatsUI();
        updateCluesDisplay();
        feedbackArea.innerHTML = `✅ درست! +${stage.insightReward} نفوذ ذهن. ${stage.clueReward.substring(0, 100)}`;
        feedbackArea.className = 'feedback-area feedback-success';
        continueBtn.disabled = false;
        if (timerActive) stopTimer();
        saveProgress();
    } else {
        btnElement.classList.add('wrong-highlight');
        const penalty = 8;
        insightScore = Math.max(0, insightScore - penalty);
        updateStatsUI();
        feedbackArea.innerHTML = `❌ اشتباه! -${penalty} نفوذ ذهن. «${stage.options[selectedIdx]}» راهی جز بن‌بست نیست. دوباره تلاش کن...`;
        feedbackArea.className = 'feedback-area feedback-fail';
        
        setTimeout(() => {
            if (!gameCompleted && currentStage === stage.id-1 && !continueBtn.disabled === false) {
                answerLocked = false;
                selectedAnswerThisStage = false;
                allBtns.forEach(btn => {
                    btn.disabled = false;
                    btn.classList.remove('wrong-highlight');
                });
                feedbackArea.innerHTML = '🕸️ دوباره تلاش کن... با دقت به سرنخ‌ها فکر کن.';
                feedbackArea.className = 'feedback-area';
                if (timerActive) {
                    stopTimer();
                    startTimerForCurrentStage();
                }
            }
        }, 1600);
    }
    renderStageMap();
}

function goToNextStage() {
    if (!continueBtn.disabled && !gameCompleted) {
        if (currentStage + 1 < stagesData.length) {
            loadStage(currentStage + 1);
        } else if (currentStage + 1 === stagesData.length) {
            completeGame();
        } else {
            completeGame();
        }
    }
}

function completeGame() {
    gameCompleted = true;
    continueBtn.disabled = true;
    if (timerActive) stopTimer();
    narrativeEl.innerHTML = "🌆 شب به پایان می‌رسد. حقیقت زوال را یافتی. پرونده‌ها به دست روزنامه‌نگار مستقل رسید. شهر نفس‌های آخرش را می‌کشد، اما تو حالا می‌دانی... رد آخر، آغاز یک بیداری است.<br><br>✨ بازی تمام شد. امتیاز نهایی: " + insightScore + " ✨";
    puzzleQuestionEl.textContent = "پایان ماجرا";
    optionsContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#c9a87b;">حقیقت فاش شد. تو پیروز شدی.</div>';
    feedbackArea.innerHTML = '🏆 تو بر راز غلبه کردی. می‌توانی دوباره شروع کنی.';
    renderStageMap();
}

function updateStatsUI() {
    insightScoreEl.textContent = insightScore;
    clueCountEl.textContent = collectedClues.length;
}

function updateCluesDisplay() {
    if (collectedClues.length === 0) {
        cluesListEl.innerHTML = 'هیچ سرنخی...';
    } else {
        cluesListEl.innerHTML = collectedClues.map(c => `🔸 ${c}`).join('<br>');
    }
}

function saveProgress() {
    const progress = { stageIndex: currentStage, clues: collectedClues, insightScore, completed: gameCompleted };
    localStorage.setItem('RadAkharElite', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('RadAkharElite');
    if (saved && !gameCompleted) {
        try {
            const data = JSON.parse(saved);
            if (!data.completed && data.stageIndex < stagesData.length) {
                if (confirm('بازی ذخیره‌ای یافت شد. ادامه میدی؟')) {
                    currentStage = data.stageIndex;
                    collectedClues = data.clues || [];
                    insightScore = data.insightScore || 0;
                    updateStatsUI();
                    updateCluesDisplay();
                    loadStage(currentStage);
                    feedbackArea.innerHTML = '🔮 ادامه از همان نقطه تاریک...';
                }
            }
        } catch(e) {}
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initGame();
    loadProgress();
});
