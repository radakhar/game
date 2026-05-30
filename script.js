// رد آخر - نسخه نهایی با سیستم اعتبار کارآگاهی و تبلیغات

const stagesData = [
    {
        id: 1, name: "پناه آخر", location: "کافه آخرین پناه", time: "03:42",
        narrative: "باران روی چرم صندلی‌های کهنه می‌چکد. مردی با کلاه کج پاکت قهوه‌ای را روی میز می‌گذارد. نگاهش می‌گوید حقیقت در همین نزدیکی است. زیر جمجمه‌ای که روی درب قفسه امانات حک شده، نوشته: آنچه همیشه می‌بیند اما دیده نمی‌شود.",
        puzzleQuestion: "رمز عبور قفسه امانات چیست؟",
        options: ["سایه", "نگاه", "باد", "ماه", "آینه"],
        correctIndex: 1,
        clueReward: "چشم‌هایی در تاریکی - نام مظنون: سایه‌نورد",
        evidence: "عکس نیمه سوخته با رد انگشت",
        suspectInfo: "مرد ناشناس، 45 ساله، جای زخم روی دست چپ",
        creditReward: 15,
        focusCost: 0
    },
    {
        id: 2, name: "تئاتر سکوت", location: "تئاتر متروک زوال", time: "01:15",
        narrative: "تئاتر بوی کپک و شراب ریخته می‌دهد. دو سنگ قبر نمادین در ورودی: دروغ و سکوت. صدای خنده خشکی می‌گوید: تنها یکی از اینها تو را عبور می‌دهد.",
        puzzleQuestion: "روی کدام سنگ باید قدم بگذاری؟",
        options: ["سنگ دروغ", "سنگ سکوت", "دور زدن سنگ‌ها", "گفتن رمز به در", "زدن لگد به در"],
        correctIndex: 1,
        clueReward: "سکوت فریاد می‌زند - آدرس: اسکله شرقی، انبار 7",
        evidence: "یادداشت دستنویس با لکه خون",
        suspectInfo: "زن بلوند، رد کفش زنانه روی صحنه، سایز 38",
        creditReward: 20,
        focusCost: 0
    },
    {
        id: 3, name: "سه نت مرگ", location: "سالن اصلی تئاتر", time: "02:20",
        narrative: "پیانوی قدیمی روی صحنه. برگه‌ای: سه نت از قلب شب بنواز: جایی که نور نمی‌تابد، آب جاری نیست، سکوت فریاد می‌زند. اشیاء روی صحنه: شمع، کاسه خالی، آینه شکسته.",
        puzzleQuestion: "ترتیب درست سه شیء برای نواختن نت‌ها چیست؟",
        options: ["شمع، آینه، کاسه", "آینه، کاسه، شمع", "کاسه، شمع، آینه", "شمع، کاسه، آینه", "آینه، شمع، کاسه"],
        correctIndex: 3,
        clueReward: "نت‌ها جعبه را باز کردند - نوار صوتی حقیقت زوال",
        evidence: "نوار کاست با صدای لرزان",
        suspectInfo: "صدای مرد ترسیده، احتمالاً خبرنگار تحقیق",
        creditReward: 25,
        focusCost: 0
    },
    {
        id: 4, name: "صندوق امانات", location: "بانک مرکزی زوال", time: "04:00",
        narrative: "نوار صوتی قطع می‌شود. روی دیوار نوشته: اولین روز هفته در شهر آبی، ساعت 23، پل دوم، پایین‌ترین عدد آسمان.",
        puzzleQuestion: "رمز چهار رقمی صندوق امانات چیست؟",
        options: ["0112", "2311", "1230", "1234", "4213"],
        correctIndex: 0,
        clueReward: "پرونده پروژه زوال و کلید مسی مارپیچ",
        evidence: "مدارک محرمانه با مهر شهرداری",
        suspectInfo: "شهردار زوال و رئیس کلانتری - هر دو درگیر",
        creditReward: 30,
        focusCost: 0
    },
    {
        id: 5, name: "رد آخر", location: "برج ساعت مرکزی", time: "05:30",
        narrative: "زیرزمین برج. روی در حک شده: آغاز و پایان یک سفر؛ شهری که نامش را فراموش کرده‌ای. سرنخ‌های قبلی به کلمه زوال اشاره دارند.",
        puzzleQuestion: "کلمه رمز ورود به زیرزمین چیست؟",
        options: ["طلوع", "آغاز", "انحلال", "سقوط", "رستاخیز"],
        correctIndex: 0,
        clueReward: "حقیقت فاش شد - قتل‌ها دستور از دفتر فرمانداری",
        evidence: "اعتراف ضبط شده با صدای فرماندار",
        suspectInfo: "فرماندار زوال - بازداشت نهایی",
        creditReward: 40,
        focusCost: 0
    }
];

let currentStage = 0;
let gameCompleted = false;
let answerLocked = false;
let collectedClues = [];
let collectedEvidence = [];
let detectiveCredit = 0;
let mentalFocus = 100;
let totalWrong = 0;
let totalCorrect = 0;

const narrativeEl = document.getElementById('narrativeText');
const puzzleQuestionEl = document.getElementById('puzzleQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const messageArea = document.getElementById('messageArea');
const continueBtn = document.getElementById('continueBtn');
const resetBtn = document.getElementById('resetBtn');
const stageNumberEl = document.getElementById('stageNumber');
const locationNameEl = document.getElementById('locationName');
const timeTag = document.getElementById('timeTag');
const clueHintEl = document.getElementById('clueHint');
const detectiveCreditEl = document.getElementById('detectiveCredit');
const mentalFocusEl = document.getElementById('mentalFocus');
const focusFill = document.getElementById('focusFill');
const evidenceCountEl = document.getElementById('evidenceCount');
const evidenceListEl = document.getElementById('evidenceList');
const suspectProfileEl = document.getElementById('suspectProfile');
const lastClueEl = document.getElementById('lastClue');
const sixthSenseBtn = document.getElementById('sixthSenseBtn');
const adContainer = document.getElementById('adContainer');
const toastMsg = document.getElementById('toastMsg');

function init() {
    document.getElementById('totalStages').textContent = stagesData.length;
    loadGame();
    attachEvents();
    updateUI();
    renderEvidence();
}

function attachEvents() {
    continueBtn.addEventListener('click', nextStage);
    resetBtn.addEventListener('click', resetGame);
    sixthSenseBtn.addEventListener('click', useSixthSense);
}

function loadGame() {
    const saved = localStorage.getItem('RadAkharFinal');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (!data.completed && data.currentStage < stagesData.length) {
                currentStage = data.currentStage;
                collectedClues = data.collectedClues || [];
                collectedEvidence = data.collectedEvidence || [];
                detectiveCredit = data.detectiveCredit || 0;
                mentalFocus = data.mentalFocus || 100;
                totalWrong = data.totalWrong || 0;
                totalCorrect = data.totalCorrect || 0;
                loadStage(currentStage);
                showToast('پرونده از مرحله قبل بارگذاری شد');
                return;
            }
        } catch(e) {}
    }
    resetGameData();
    loadStage(0);
}

function resetGameData() {
    currentStage = 0;
    gameCompleted = false;
    answerLocked = false;
    collectedClues = [];
    collectedEvidence = [];
    detectiveCredit = 0;
    mentalFocus = 100;
    totalWrong = 0;
    totalCorrect = 0;
}

function resetGame() {
    resetGameData();
    loadStage(0);
    updateUI();
    renderEvidence();
    showToast('پرونده جدید شروع شد');
    saveGame();
}

function loadStage(index) {
    if (index >= stagesData.length) {
        completeGame();
        return;
    }
    const stage = stagesData[index];
    currentStage = index;
    stageNumberEl.textContent = stage.id;
    locationNameEl.textContent = stage.location;
    timeTag.textContent = stage.time;
    narrativeEl.textContent = stage.narrative;
    puzzleQuestionEl.textContent = stage.puzzleQuestion;
    
    if (collectedClues.length > 0) {
        clueHintEl.textContent = collectedClues[collectedClues.length-1];
        lastClueEl.textContent = collectedClues[collectedClues.length-1].substring(0, 40) + '...';
    } else {
        clueHintEl.textContent = 'هیچ سرنخی ثبت نشده';
        lastClueEl.textContent = 'هیچ';
    }
    
    suspectProfileEl.textContent = stage.suspectInfo;
    renderOptions(stage.options);
    answerLocked = false;
    continueBtn.disabled = true;
    messageArea.innerHTML = 'گزینه مورد نظر را انتخاب کن... حقیقت در یکی از آنهاست.';
    messageArea.className = 'message-area';
    updateUI();
}

function renderOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'option-btn';
        btn.dataset.index = idx;
        btn.addEventListener('click', () => handleAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIdx, btnElement) {
    if (answerLocked || gameCompleted) return;
    const stage = stagesData[currentStage];
    const isCorrect = (selectedIdx === stage.correctIndex);
    answerLocked = true;
    
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        totalCorrect++;
        btnElement.classList.add('correct-highlight');
        detectiveCredit += stage.creditReward;
        
        if (!collectedClues.includes(stage.clueReward)) {
            collectedClues.push(stage.clueReward);
        }
        if (stage.evidence && !collectedEvidence.includes(stage.evidence)) {
            collectedEvidence.push(stage.evidence);
        }
        
        messageArea.innerHTML = `پاسخ درست. +${stage.creditReward} اعتبار کارآگاهی. ${stage.clueReward}`;
        messageArea.className = 'message-area message-success';
        continueBtn.disabled = false;
        renderEvidence();
        updateUI();
        saveGame();
        showToast('پیشرفت ذخیره شد');
    } else {
        totalWrong++;
        btnElement.classList.add('wrong-highlight');
        
        const focusLoss = 12;
        mentalFocus = Math.max(0, mentalFocus - focusLoss);
        
        messageArea.innerHTML = `پاسخ نادرست. -${focusLoss} تمرکز ذهنی. گزینه ${stage.options[selectedIdx]} بیراهه بود. دوباره تلاش کن.`;
        messageArea.className = 'message-area message-fail';
        updateUI();
        
        if (mentalFocus <= 0) {
            messageArea.innerHTML = 'تمرکز ذهنی به صفر رسید. پرونده دوباره بازبینی می‌شود...';
            setTimeout(() => {
                resetGame();
            }, 2000);
            return;
        }
        
        setTimeout(() => {
            if (!gameCompleted && currentStage === stage.id-1 && !continueBtn.disabled) {
                answerLocked = false;
                allBtns.forEach(btn => {
                    btn.disabled = false;
                    btn.classList.remove('wrong-highlight');
                });
                messageArea.innerHTML = 'دوباره بازبینی کن... به جزئیات دقت داشته باش.';
                messageArea.className = 'message-area';
            }
        }, 1500);
    }
    updateUI();
}

function useSixthSense() {
    if (answerLocked || gameCompleted) {
        messageArea.innerHTML = 'حس ششم در این لحظه قابل استفاده نیست.';
        return;
    }
    
    const stage = stagesData[currentStage];
    const cost = 8;
    
    if (mentalFocus < cost) {
        messageArea.innerHTML = `تمرکز ذهنی کافی نیست (نیاز ${cost})`;
        return;
    }
    
    mentalFocus -= cost;
    
    if (adContainer) {
        adContainer.innerHTML = `
            <div class="ad-placeholder">
                <div style="background:#1a120c; padding:8px; border-radius:8px; margin-bottom:6px;">
                    [ فضا برای تبلیغات ]
                </div>
                <div style="font-size:0.6rem; color:#6a5a4a;">پس از مشاهده تبلیغ، راهنمایی دریافت می‌کنی</div>
                <button id="mockAdClose" style="margin-top:6px; background:#3a2a20; border:none; color:#dcae8a; padding:3px 12px; border-radius:20px; font-size:0.65rem; cursor:pointer;">دریافت راهنمایی</button>
            </div>
        `;
        const closeBtn = document.getElementById('mockAdClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                const hint = `راهنمایی حس ششم: گزینه "${stage.options[stage.correctIndex]}" به حقیقت نزدیک‌تر است.`;
                messageArea.innerHTML = hint;
                messageArea.className = 'message-area message-success';
                adContainer.innerHTML = `<div class="ad-placeholder"><span class="ad-icon"></span><span>فضای تبلیغاتی</span></div>`;
                updateUI();
                saveGame();
            });
        }
    }
    
    updateUI();
}

function nextStage() {
    if (!continueBtn.disabled && !gameCompleted) {
        if (currentStage + 1 < stagesData.length) {
            loadStage(currentStage + 1);
        } else {
            completeGame();
        }
        saveGame();
    }
}

function completeGame() {
    gameCompleted = true;
    continueBtn.disabled = true;
    const totalAnswers = totalCorrect + totalWrong;
    const accuracy = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
    narrativeEl.innerHTML = `پرونده زوال برای همیشه بسته شد. حقیقت فاش شد.\n\nاعتبار نهایی کارآگاهی: ${detectiveCredit}\nدقت در بازجویی: ${accuracy}%\n\nشهر زوال نفس می‌کشد... برای اولین بار.`;
    puzzleQuestionEl.textContent = 'پایان پرونده';
    optionsContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#8a6a4a;">ماجرای رد آخر به پایان رسید</div>';
    messageArea.innerHTML = 'تو حقیقت را پیدا کردی. می‌توانی پرونده جدیدی شروع کنی.';
    saveGame();
}

function updateUI() {
    detectiveCreditEl.textContent = detectiveCredit;
    mentalFocusEl.textContent = mentalFocus;
    focusFill.style.width = `${Math.max(0, mentalFocus)}%`;
    evidenceCountEl.textContent = collectedEvidence.length;
    
    if (mentalFocus < 30) {
        focusFill.style.background = '#aa4a2a';
    } else if (mentalFocus < 60) {
        focusFill.style.background = '#da8a6a';
    } else {
        focusFill.style.background = '#c48a6a';
    }
}

function renderEvidence() {
    if (collectedEvidence.length === 0) {
        evidenceListEl.innerHTML = '<div class="empty-hint">هیچ مدرکی ثبت نشده</div>';
        return;
    }
    evidenceListEl.innerHTML = collectedEvidence.map(ev => `<div class="evidence-item">📄 ${ev}</div>`).join('');
}

function saveGame() {
    const saveData = {
        currentStage: currentStage,
        collectedClues: collectedClues,
        collectedEvidence: collectedEvidence,
        detectiveCredit: detectiveCredit,
        mentalFocus: mentalFocus,
        totalWrong: totalWrong,
        totalCorrect: totalCorrect,
        completed: gameCompleted
    };
    localStorage.setItem('RadAkharFinal', JSON.stringify(saveData));
}

function showToast(msg) {
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => {
        toastMsg.classList.remove('show');
    }, 2000);
}

window.addEventListener('DOMContentLoaded', init);
