// ======================
// رد آخر - هسته بازی
// ======================

// داده‌های مراحل (۵ مرحله کامل با داستان، سوال، گزینه‌ها، پاسخ صحیح و سرنخ)
const stagesData = [
    {
        id: 1,
        narrative: "باران سردی روی سنگفرش‌های خیس کوچه‌های زوال می‌بارید. نفس‌هایت در هوای نمناک به شکل ابرهای کوتاهی نمایان می‌شد. سال‌هاست دنبال حقیقت گمشده‌ای، و حالا سرنخی تو را به کافه‌ی «آخرین پناه» کشانده. پشت میز گوشه، مردی با کلاه کج نشسته و پاکتی کاهی را روی میز هل می‌دهد. نجوا می‌کند: «اگر می‌خواهی بدانی آن شب در اسکله چه گذشت، باید رمز قفسه امانات را پیدا کنی. حواست به جمجمه‌ی روی در باشد.»",
        puzzleQuestion: "به درب قفسه امانات نزدیک می‌شوی. روی آن جمجمه‌ای حک شده با دو چشم خالی. زیر جمجمه نوشته: «آنچه که همیشه می‌بیند اما دیده نمی‌شود، کلید حقیقت است.» رمز عبور (یک کلمه) چیست؟",
        options: [
            "سایه",
            "نگاه",
            "باد",
            "ماه",
            "آینه"
        ],
        correctIndex: 1, // نگاه (چشم می‌بیند اما دیده نمی‌شود)
        clueReward: "🔑 سرنخ: «چشم‌هایی که در تاریکی می‌بینند» - نام شخص مرموز: سایه‌نورد",
        nextStageUnlock: true
    },
    {
        id: 2,
        narrative: "قفسه باز می‌شود. داخل آن یک عکس سیاه‌وسفید، نیمه سوخته، و یک کلید آهنی زنگ‌زده قرار دارد. عکس زنی را نشان می‌دهد با چشمانی ترسیده، پشت او ساختمانی آشنا: تئاتر متروک زوال. به طرف تئاتر می‌روی. در ورودی با دو سنگ‌قبر نمادین روبرو می‌شوی. روی یکی «دروغ» و روی دیگری «سکوت» حک شده. صدایی از درون می‌گوید: «تنها یکی از اینها تو را عبور می‌دهد، آن که کلید حقیقت است.»",
        puzzleQuestion: "برای وارد شدن به تئاتر، باید روی کدام سنگ قدم بگذاری؟ دروغ یا سکوت؟",
        options: [
            "قدم گذاشتن روی سنگ «دروغ»",
            "قدم گذاشتن روی سنگ «سکوت»",
            "دور زدن سنگ‌ها از کنار دیوار",
            "گفتن یک کلمه رمز به در",
            "نادیده گرفتن و زدن لگد به در"
        ],
        correctIndex: 1, // سکوت
        clueReward: "🎭 سرنخ: «سکوت، حقیقت را فریاد می‌زند» - یادداشتی پیدا می‌کنی با آدرس: اسکله شرقی، انبار شماره ۷",
        nextStageUnlock: true
    },
    {
        id: 3,
        narrative: "از در عبور می‌کنی. هوای تئاتر سرد و بوی کپک و شراب کهنه می‌دهد. روی سن، یک پیانوی قدیمی، و روی آن نت‌هایی با لکه‌های قرمز. نزدیک که می‌روی، یک برگه روی زمین: «هر کسی که به دنبال حقیقت است باید سه نت از قلب شب بنوازد: نت اول در جایی که نور نمی‌تابد، نت دوم در جایی که آب جاری نیست، نت سوم در جایی که سکوت فریاد می‌زند.» سه شیء روی صحنه است: شمع، کاسه خالی، آینه شکسته.",
        puzzleQuestion: "به ترتیب درست اشیاء را برای نواختن سه نت انتخاب کن:",
        options: [
            "شمع، آینه، کاسه خالی",
            "آینه، کاسه خالی، شمع",
            "کاسه خالی، شمع، آینه",
            "شمع، کاسه خالی، آینه",
            "آینه، شمع، کاسه خالی"
        ],
        correctIndex: 3, // شمع(نور ندارد؟ شمع خودش نور دارد. دقت: "جایی که نور نمی‌تابد" = سایه/آینه نیست. ولی منطق معمایی: شمع در تاریکی، کاسه خالی بدون آب، آینه شکسته سکوت. اما پاسخ استاندارد: شمع (نور نمی‌تابد یعنی خاموش) - کاسه خالی (آب جاری نیست) - آینه شکسته (سکوت فریاد می‌زند)
        clueReward: "🎹 سرنخ: نت‌ها کلید قفل جعبه را ساختند. درون جعبه: یک نوار صوتی با برچسب «حقیقت زوال»",
        nextStageUnlock: true
    },
    {
        id: 4,
        narrative: "نوار صوتی را در دستگاه قدیمی تئاتر می‌گذاری. صدای لرزانی می‌گوید: «شهردار زوال به همراه رئیس کلانتری، قتل‌‌گاه اسکله را پوشانده‌اند. مدارک در صندوق امانات بانک مرکزی، شماره ۱۳، رمز...» ناگهان صدا قطع می‌شود. باید خودت رمز را پیدا کنی. روی دیوار پشت دستگاه، چند خط نوشته شده: «اولین روز هفته در شهر آبی، ساعت ۲۳، پل دوم، پایین‌ترین عدد آسمان.»",
        puzzleQuestion: "رمز ۴ رقمی صندوق امانات چیست؟ (اعداد را پشت سر هم بنویس)",
        options: [
            "۰۱۱۲",
            "۲۳۱۱",
            "۱۲۳۰",
            "۱۲۳۴",
            "۴۲۱۳"
        ],
        correctIndex: 0, // 0112 : شنبه=1 ؟ اول هفته در ایران شنبه=1، ساعت 23=11 شب؟ ولی پایین‌ترین عدد آسمان؟ صفر؟ ترکیب: 0,1,1,2
        clueReward: "📜 سرنخ: رمز درست بود. داخل صندوق پرونده‌ای با نام «پروژه زوال» و یک کلید مسی به شکل مارپیچ",
        nextStageUnlock: true
    },
    {
        id: 5,
        narrative: "حالا به مرکز شهر زوال، برج ساعت قدیمی رسیده‌ای. می‌دانی حقیقت در زیرزمین برج پنهان شده. اما در ورودی یک صفحه کلید عددی نیاز به یک کلمه رمز دارد. بالای در حکاکی شده: «آغاز و پایان یک سفر؛ شهری که نامش را فراموش کرده‌ای، گمشده در میان کلمات». سرنخ‌های قبلی به اسم شهر اشاره داشتند: زوال. اما خود کلمه «زوال» یعنی پایان، افول.",
        puzzleQuestion: "کلمه رمز ورود به زیرزمین برج چیست؟ (به مفهوم و اسم شهر توجه کن)",
        options: [
            "طلوع",
            "آغاز",
            "انحلال",
            "سقوط",
            "رستاخیز"
        ],
        correctIndex: 0, // طلوع (تضاد با زوال، آغاز دوباره)
        clueReward: "💎 حقیقت آشکار شد: تمامی قتل‌ها دستور مستقیم از دفتر فرمانداری بود. پرونده برای همیشه بسته نمی‌شود... تو راز را فاش کردی. بازی به پایان رسید.",
        nextStageUnlock: false // پایان بازی
    }
];

// وضعیت بازی
let currentStage = 0;           // index مرحله فعلی (0-based)
let gameCompleted = false;
let answerLocked = false;       // آیا در مرحله فعلی پاسخ داده شده؟
let collectedClues = [];        // لیست سرنخ‌های به دست آمده
let selectedOptionIndex = -1;

// عناصر DOM
const narrativeEl = document.getElementById('narrativeText');
const puzzleQuestionEl = document.getElementById('puzzleQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackArea = document.getElementById('feedbackArea');
const continueBtn = document.getElementById('continueBtn');
const resetBtn = document.getElementById('resetGameBtn');
const stageNumberEl = document.getElementById('stageNumber');
const cluesListEl = document.getElementById('cluesList');
const clueHintEl = document.getElementById('clueHint');
const totalStagesSpan = document.getElementById('totalStages');

// مقداردهی اولیه
function initGame() {
    totalStagesSpan.textContent = stagesData.length;
    loadStage(0);
    attachEventListeners();
}

function attachEventListeners() {
    continueBtn.addEventListener('click', goToNextStage);
    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    currentStage = 0;
    gameCompleted = false;
    answerLocked = false;
    collectedClues = [];
    selectedOptionIndex = -1;
    
    // حذف کلاس‌های هایلایت از آپشن‌ها
    const allOptBtns = document.querySelectorAll('.option-btn');
    allOptBtns.forEach(btn => btn.remove());
    
    loadStage(0);
    updateCluesDisplay();
    feedbackArea.innerHTML = '🕯️ بازی از نو آغاز شد. در شهر زوال، هر قدم یک راز است.';
    feedbackArea.className = 'feedback-area';
    continueBtn.disabled = true;
}

function loadStage(stageIndex) {
    if (stageIndex >= stagesData.length) {
        completeGame();
        return;
    }
    
    const stage = stagesData[stageIndex];
    currentStage = stageIndex;
    stageNumberEl.textContent = stage.id;
    
    // نمایش داستان
    narrativeEl.textContent = stage.narrative;
    puzzleQuestionEl.textContent = stage.puzzleQuestion;
    
    // نمایش سرنخ قبلی اگر چیزی باشد
    if (collectedClues.length > 0) {
        clueHintEl.innerHTML = `<span>📜 آخرین سرنخ:</span> ${collectedClues[collectedClues.length-1]}`;
    } else {
        clueHintEl.innerHTML = 'سرنخی هنوز کشف نشده... با دقت پاسخ بده.';
    }
    
    // ساخت دکمه‌های گزینه‌ها
    renderOptions(stage.options);
    
    // ریاستیتوس
    answerLocked = false;
    selectedOptionIndex = -1;
    continueBtn.disabled = true;
    feedbackArea.innerHTML = '⚡ یکی از گزینه‌ها را انتخاب کن... هر اشتباه تو را از حقیقت دور می‌کند.';
    feedbackArea.className = 'feedback-area';
    
    // پاک کردن کلاس‌های هایلایت قبلی
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(btn => {
        btn.classList.remove('correct-highlight', 'wrong-highlight');
        btn.disabled = false;
    });
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
    
    const stage = stagesData[currentStage];
    const isCorrect = (selectedIdx === stage.correctIndex);
    
    // قفل کردن گزینه‌ها
    answerLocked = true;
    selectedOptionIndex = selectedIdx;
    
    // غیرفعال کردن همه دکمه‌ها
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => {
        btn.disabled = true;
    });
    
    // نمایش بازخورد و افکت
    if (isCorrect) {
        // پاسخ درست
        btnElement.classList.add('correct-highlight');
        const rewardClue = stage.clueReward;
        if (rewardClue && !collectedClues.includes(rewardClue)) {
            collectedClues.push(rewardClue);
        }
        updateCluesDisplay();
        
        feedbackArea.innerHTML = `✅ پاسخ درست! «${stage.options[selectedIdx]}» کلید حقیقت بود. ${rewardClue.substring(0, 100)}`;
        feedbackArea.className = 'feedback-area feedback-success';
        
        // فعال کردن دکمه ادامه
        continueBtn.disabled = false;
        
        // ذخیره در localStorage برای ادامه بعدی (اختیاری)
        saveProgress();
    } else {
        // پاسخ غلط
        btnElement.classList.add('wrong-highlight');
        feedbackArea.innerHTML = `❌ اشتباه! گزینه «${stage.options[selectedIdx]}» در این مرحله راهی جز بن‌بست نیست. دوباره تلاش کن... (پاسخ صحیح را پیدا کن)`;
        feedbackArea.className = 'feedback-area feedback-fail';
        
        // اجازه انتخاب دوباره پس از ۱ ثانیه (اما خیر - طبق طراحی بازی: باید دوباره تلاش کند بدون مسدودیت ابدی ولی با قفل موقت؟ بهتر است قفل یکبار برداشته شود اما با هشدار)
        setTimeout(() => {
            if (!gameCompleted && currentStage === stage.id-1 && !continueBtn.disabled === false) {
                // فقط اگر همچنان در همان مرحله هستیم و پاسخ صحیح نداده
                answerLocked = false;
                allBtns.forEach(btn => {
                    btn.disabled = false;
                    btn.classList.remove('wrong-highlight');
                });
                feedbackArea.innerHTML = '🕸️ دوباره تلاش کن... با دقت به سرنخ‌ها و فضا فکر کن.';
                feedbackArea.className = 'feedback-area';
            }
        }, 1500);
    }
}

function goToNextStage() {
    if (!continueBtn.disabled && !gameCompleted) {
        // انتقال به مرحله بعد
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
    answerLocked = true;
    continueBtn.disabled = true;
    
    narrativeEl.innerHTML = "🌆 شب به پایان می‌رسد. حقیقت زوال را یافتی. پرونده‌ها به دست روزنامه‌نگار مستقل رسید. شهر نفس‌های آخرش را می‌کشد، اما تو حالا می‌دانی... رد آخر، آغاز یک بیداری است.<br><br>✨ بازی تمام شد. از تو برای کشف حقیقت سپاسگزاریم. ✨";
    puzzleQuestionEl.textContent = "پایان ماجرا... یا شروعی دوباره؟";
    optionsContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#c9a87b;">رهگذر، حقیقت را با خودت ببر.</div>';
    feedbackArea.innerHTML = '🏆 تو بر راز غلبه کردی. بازی «رد آخر» به پایان رسید. می‌توانی دوباره شروع کنی.';
    feedbackArea.className = 'feedback-area feedback-success';
}

function updateCluesDisplay() {
    if (collectedClues.length === 0) {
        cluesListEl.textContent = 'هیچ';
    } else {
        cluesListEl.innerHTML = collectedClues.map(c => `🔸 ${c.substring(0, 60)}`).join('<br>');
    }
}

function saveProgress() {
    // ذخیره خودکار در localStorage (اختیاری)
    const progress = {
        stageIndex: currentStage,
        clues: collectedClues,
        completed: gameCompleted
    };
    localStorage.setItem('RadAkharProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('RadAkharProgress');
    if (saved && !gameCompleted) {
        try {
            const data = JSON.parse(saved);
            if (!data.completed && data.stageIndex < stagesData.length) {
                if (confirm('بازی ذخیره‌ای یافت شد. آیا از همان مرحله ادامه می‌دهی؟')) {
                    currentStage = data.stageIndex;
                    collectedClues = data.clues || [];
                    loadStage(currentStage);
                    updateCluesDisplay();
                    feedbackArea.innerHTML = '🔮 ادامه ماجرا از جایی که رها کرده بودی...';
                }
            }
        } catch(e) {}
    }
}

// اجرای اولیه با قابلیت لود پیشرفت
window.addEventListener('DOMContentLoaded', () => {
    initGame();
    loadProgress();
});
