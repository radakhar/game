// ======================
// رد آخر - نسخه جنایی نهایی
// با سیو هوشمند، موسیقی محیطی، حس ششم
// ======================

const stagesData = [
    {
        id: 1, name: "پناه آخر", location: "کافه آخرین پناه", time: "۰۳:۴۲ بامداد",
        narrative: "باران روی چرم صندلی‌های کهنه می‌چکد. مردی با کلاه کج پاکت قهوه‌ای را روی میز می‌گذارد. نگاهش می‌گوید حقیقت در همین نزدیکی است، اما باید خودت پیدایش کنی. زیر جمجمه‌ای که روی درب قفسه امانات حک شده، نوشته: «آنچه همیشه می‌بیند اما دیده نمی‌شود.»",
        puzzleQuestion: "رمز عبور قفسه امانات چیست؟",
        options: ["سایه", "نگاه", "باد", "ماه", "آینه"],
        correctIndex: 1,
        clueReward: "🔑 «چشم‌هایی در تاریکی» - نام مظنون: سایه‌نورد",
        evidence: "عکس نیمه سوخته",
        suspectInfo: "مرد ناشناس، ۴۰-۵۰ ساله، جای زخم روی دست چپ",
        detectiveReward: 20
    },
    {
        id: 2, name: "تئاتر سکوت", location: "تئاتر متروک زوال", time: "۰۱:۱۵ بامداد",
        narrative: "تئاتر بوی کپک و شراب ریخته می‌دهد. دو سنگ قبر نمادین در ورودی: «دروغ» و «سکوت». صدای خنده‌ی خشکی می‌گوید: «تنها یکی از اینها تو را عبور می‌دهد.»",
        puzzleQuestion: "روی کدام سنگ قدم بگذاری؟",
        options: ["سنگ دروغ", "سنگ سکوت", "دور زدن سنگ‌ها", "گفتن رمز", "زدن به در"],
        correctIndex: 1,
        clueReward: "🎭 «سکوت فریاد می‌زند» - آدرس: اسکله شرقی، انبار ۷",
        evidence: "یادداشت دستنویس با خون",
        suspectInfo: "زن بلوند، رد کفش زنانه روی صحنه",
        detectiveReward: 25
    },
    {
        id: 3, name: "سه نت مرگ", location: "سالن اصلی تئاتر", time: "۰۲:۲۰ بامداد",
        narrative: "پیانوی قدیمی روی صحنه. برگه‌ای: «سه نت از قلب شب بنواز: جایی که نور نمی‌تابد، آب جاری نیست، سکوت فریاد می‌زند.» اشیاء: شمع، کاسه خالی، آینه شکسته.",
        puzzleQuestion: "ترتیب درست اشیاء را انتخاب کن:",
        options: ["شمع، آینه، کاسه", "آینه، کاسه، شمع", "کاسه، شمع، آینه", "شمع، کاسه، آینه", "آینه، شمع، کاسه"],
        correctIndex: 3,
        clueReward: "🎵 نت‌ها جعبه را باز کردند. نوار صوتی «حقیقت زوال»",
        evidence: "نوار کاست با صدای لرزان",
        suspectInfo: "صدای مرد ترسیده، احتمالاً خبرنگار",
        detectiveReward: 30
    },
    {
        id: 4, name: "صندوق امانات", location: "بانک مرکزی زوال", time: "۰۴:۰۰ بامداد",
        narrative: "نوار قطع می‌شود. روی دیوار: «اولین روز هفته در شهر آبی، ساعت ۲۳، پل دوم، پایین‌ترین عدد آسمان.»",
        puzzleQuestion: "رمز ۴ رقمی صندوق چیست؟",
        options: ["۰۱۱۲", "۲۳۱۱", "۱۲۳۰", "۱۲۳۴", "۴۲۱۳"],
        correctIndex: 0,
        clueReward: "📜 پرونده «پروژه زوال» و کلید مسی مارپیچ",
        evidence: "مدارک محرمانه با مهر شهرداری",
        suspectInfo: "شهردار زوال و رئیس کلانتری",
        detectiveReward: 35
    },
    {
        id: 5, name: "رد آخر", location: "برج ساعت مرکزی", time: "۰۵:۳۰ بامداد",
        narrative: "زیرزمین برج. روی در حک شده: «آغاز و پایان یک سفر؛ شهری که نامش را فراموش کرده‌ای.» سرنخ‌ها به «زوال» اشاره دارند.",
        puzzleQuestion: "کلمه رمز ورود به زیرزمین چیست؟",
        options: ["طلوع", "آغاز", "انحلال", "سقوط", "رستاخیز"],
        correctIndex: 0,
        clueReward: "💎 حقیقت فاش شد: قتل‌ها دستور از دفتر فرمانداری",
        evidence: "اعتراف ضبط شده",
        suspectInfo: "فرماندار زوال بازداشت شد",
        detectiveReward: 50
    }
];

let currentStage = 0;
let gameCompleted = false;
let answerLocked = false;
let collectedClues = [];
let collectedEvidence = [];
let detectiveScore = 0;
let wrongAnswers = 0;
let totalAnswers = 0;
let musicEnabled = true;
let currentMusic = null;

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
const detectiveScoreEl = document.getElementById('detectiveScore');
const clueCountEl = document.getElementById('clueCount');
const accuracyEl = document.getElementById('accuracyPercent');
const locationNameEl = document.getElementById('locationName');
const timeTag = document.getElementById('timeTag');
const evidenceListEl = document.getElementById('evidenceList');
const suspectTextEl = document.getElementById('suspectText');
const sixthSenseBtn = document.getElementById('sixthSenseBtn');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const saveToast = document.getElementById('saveToast');

// صداها
const clickAudio = document.getElementById('clickSound');
const correctAudio = document.getElementById('correctSound');
const wrongAudio = document.getElementById('wrongSound');
const bgMenu = document.getElementById('bgMusicMenu');
const bgNormal = document.getElementById('bgMusicNormal');
const bgTension = document.getElementById('bgMusicTension');

function initGame() {
    document.getElementById('totalStages').textContent = stagesData.length;
    loadSavedProgress();
    if (!localStorage.getItem('RadAkharCrime')) {
        detectiveScore = 0;
        collectedClues = [];
        collectedEvidence = [];
        wrongAnswers = 0;
        totalAnswers = 0;
        loadStage(0);
    }
    updateUI();
    attachEvents();
    playMusic('normal');
}

function attachEvents() {
    continueBtn.addEventListener('click', goToNextStage);
    resetBtn.addEventListener('click', resetGame);
    sixthSenseBtn.addEventListener('click', useSixthSense);
    musicToggleBtn.addEventListener('click', toggleMusic);
}

function playMusic(type) {
    if (!musicEnabled) return;
    [bgMenu, bgNormal, bgTension].forEach(m => { m.pause(); m.currentTime = 0; });
    let selected = bgNormal;
    if (type === 'menu') selected = bgMenu;
    if (type === 'tension') selected = bgTension;
    selected.volume = 0.3;
    selected.play().catch(e => console.log('Auto-play prevented'));
    currentMusic = selected;
}

function toggleMusic() {
    musicEnabled = !musicEnabled;
    if (musicEnabled && currentMusic) {
        currentMusic.play().catch(e => console.log);
        musicToggleBtn.textContent = '🔊 پخش';
    } else if (currentMusic) {
        currentMusic.pause();
        musicToggleBtn.textContent = '🔇 قطع';
    }
    if (musicEnabled) musicToggleBtn.textContent = '🔊 پخش';
    else musicToggleBtn.textContent = '🔇 قطع';
}

function playSound(soundElem) {
    if (soundElem) {
        soundElem.currentTime = 0;
        soundElem.play().catch(e => console.log);
    }
}

function loadStage(stageIndex) {
    if (stageIndex >= stagesData.length) {
        completeGame();
        return;
    }
    const stage = stagesData[stageIndex];
    currentStage = stageIndex;
    stageNumberEl.textContent = stage.id;
    locationNameEl.textContent = stage.location;
    timeTag.textContent = stage.time;
    narrativeEl.textContent = stage.narrative;
    puzzleQuestionEl.textContent = stage.puzzleQuestion;
    
    if (collectedClues.length > 0) {
        clueHintEl.innerHTML = `📌 آخرین سرنخ: ${collectedClues[collectedClues.length-1]}`;
    } else {
        clueHintEl.innerHTML = 'هیچ سرنخی ثبت نشده';
    }
    
    renderOptions(stage.options);
    answerLocked = false;
    continueBtn.disabled = true;
    feedbackArea.innerHTML = '🕵️ یکی از گزینه‌ها را انتخاب کن... حقیقت در یکی از آنها پنهان است.';
    feedbackArea.className = 'feedback-area';
    updateEvidenceBoard();
    updateUI();
    saveProgress();
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
    if (answerLocked || gameCompleted) return;
    playSound(clickAudio);
    const stage = stagesData[currentStage];
    const isCorrect = (selectedIdx === stage.correctIndex);
    answerLocked = true;
    totalAnswers++;
    
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        playSound(correctAudio);
        btnElement.classList.add('correct-highlight');
        detectiveScore += stage.detectiveReward;
        if (!collectedClues.includes(stage.clueReward)) {
            collectedClues.push(stage.clueReward);
        }
        if (stage.evidence && !collectedEvidence.includes(stage.evidence)) {
            collectedEvidence.push(stage.evidence);
        }
        updateUI();
        updateCluesDisplay();
        updateEvidenceBoard();
        feedbackArea.innerHTML = `✅ درست! +${stage.detectiveReward} حس کارآگاهی. ${stage.clueReward}`;
        feedbackArea.className = 'feedback-area feedback-success';
        continueBtn.disabled = false;
        saveProgress();
        showSaveToast();
    } else {
        playSound(wrongAudio);
        btnElement.classList.add('wrong-highlight');
        wrongAnswers++;
        const penalty = 5;
        detectiveScore = Math.max(0, detectiveScore - penalty);
        updateUI();
        feedbackArea.innerHTML = `❌ اشتباه! -${penalty} حس کارآگاهی. گزینه «${stage.options[selectedIdx]}» بیراهه بود. دوباره تلاش کن...`;
        feedbackArea.className = 'feedback-area feedback-fail';
        
        setTimeout(() => {
            if (!gameCompleted && currentStage === stage.id-1 && !continueBtn.disabled) {
                answerLocked = false;
                allBtns.forEach(btn => {
                    btn.disabled = false;
                    btn.classList.remove('wrong-highlight');
                });
                feedbackArea.innerHTML = '🕸️ دوباره بازجویی کن... به جزئیات دقت کن.';
                feedbackArea.className = 'feedback-area';
            }
        }, 1500);
    }
    updateUI();
}

function useSixthSense() {
    if (answerLocked || gameCompleted) {
        feedbackArea.innerHTML = '⛔ الان نمی‌توانی از حس ششم استفاده کنی.';
        return;
    }
    const stage = stagesData[currentStage];
    const penalty = 10;
    detectiveScore = Math.max(0, detectiveScore - penalty);
    const hint = `💡 حس ششم به تو می‌گوید: «${stage.options[stage.correctIndex]}» می‌تواند کلید باشد...`;
    feedbackArea.innerHTML = `🔮 ${hint} (${penalty} امتیاز کم شد)`;
    feedbackArea.className =
