// رد آخر - نسخه نهایی با ۳۰ مرحله

const stagesData = [
    { id:1, name:"پناه آخر", location:"کافه آخرین پناه", time:"03:42", difficulty:"متوسط",
      narrative:"باران روی چرم صندلی‌های کهنه می‌چکد. مردی با کلاه کج پاکت قهوه‌ای را روی میز می‌گذارد. زیر جمجمه روی درب قفسه نوشته: آنچه همیشه می‌بیند اما دیده نمی‌شود.",
      question:"رمز عبور قفسه امانات چیست؟",
      options:["سایه","نگاه","باد","ماه","آینه"], correct:1,
      clue:"چشم‌هایی در تاریکی - نام مظنون: سایه‌نورد",
      evidence:"عکس نیمه سوخته با رد انگشت", suspect:"مرد ناشناس، 45 ساله، جای زخم روی دست چپ", reward:15, focusPenalty:5 },
    { id:2, name:"تئاتر سکوت", location:"تئاتر متروک زوال", time:"01:15", difficulty:"متوسط",
      narrative:"تئاتر بوی کپک و شراب کهنه می‌دهد. دو سنگ قبر در ورودی: دروغ و سکوت. صدایی می‌گوید: تنها یکی از اینها تو را عبور می‌دهد.",
      question:"روی کدام سنگ باید قدم بگذاری؟",
      options:["سنگ دروغ","سنگ سکوت","دور زدن سنگ‌ها","گفتن رمز","زدن لگد"], correct:1,
      clue:"سکوت فریاد می‌زند - آدرس: اسکله شرقی، انبار 7",
      evidence:"یادداشت دستنویس با لکه خون", suspect:"زن بلوند، رد کفش سایز 38 روی صحنه", reward:15, focusPenalty:5 },
    { id:3, name:"سه نت مرگ", location:"سالن اصلی تئاتر", time:"02:20", difficulty:"سخت",
      narrative:"پیانوی قدیمی روی صحنه. برگه: سه نت از قلب شب بنواز: جایی که نور نمی‌تابد، آب جاری نیست، سکوت فریاد می‌زند. اشیاء: شمع، کاسه خالی، آینه شکسته.",
      question:"ترتیب درست سه شیء برای نواختن نت‌ها چیست؟",
      options:["شمع، آینه، کاسه","آینه، کاسه، شمع","کاسه، شمع، آینه","شمع، کاسه، آینه","آینه، شمع، کاسه"], correct:3,
      clue:"نت‌ها جعبه را باز کردند - نوار صوتی حقیقت زوال",
      evidence:"نوار کاست با صدای لرزان", suspect:"مرد ترسیده، احتمالاً خبرنگار", reward:20, focusPenalty:10 },
    { id:4, name:"صندوق امانات", location:"بانک مرکزی زوال", time:"04:00", difficulty:"سخت",
      narrative:"نوار صوتی قطع می‌شود. روی دیوار: اولین روز هفته در شهر آبی، ساعت 23، پل دوم، پایین‌ترین عدد آسمان.",
      question:"رمز چهار رقمی صندوق امانات چیست؟",
      options:["0112","2311","1230","1234","4213"], correct:0,
      clue:"پرونده پروژه زوال و کلید مسی مارپیچ",
      evidence:"مدارک محرمانه با مهر شهرداری", suspect:"شهردار زوال و رئیس کلانتری", reward:20, focusPenalty:10 },
    { id:5, name:"رد آخر", location:"برج ساعت مرکزی", time:"05:30", difficulty:"نهایی",
      narrative:"زیرزمین برج. روی در حک شده: آغاز و پایان یک سفر؛ شهری که نامش را فراموش کرده‌ای. سرنخ‌ها به کلمه زوال اشاره دارند.",
      question:"کلمه رمز ورود به زیرزمین چیست؟",
      options:["طلوع","آغاز","انحلال","سقوط","رستاخیز"], correct:0,
      clue:"حقیقت فاش شد - قتل‌ها دستور از دفتر فرمانداری",
      evidence:"اعتراف ضبط شده", suspect:"فرماندار زوال - بازداشت شد", reward:25, focusPenalty:15 },
    { id:6, name:"کوچه بن‌بست", location:"کوچه پشت تئاتر", time:"00:30", difficulty:"آسان",
      narrative:"در بن‌بست کوچه، یک کبریت سوخته و ته سیگار پیدا می‌کنی. روی دیوار با گچ نوشته: شماره 7 را به خاطر بسپار.",
      question:"چه عددی کلید بعدی است؟", options:["3","5","7","9","11"], correct:2,
      clue:"انبار شماره 7 - اسکله شرقی", evidence:"ته سیگار خارجی", suspect:"فرد سیگاری با کلاه", reward:10, focusPenalty:5 },
    { id:7, name:"اسکله شرقی", location:"اسکله شرقی", time:"01:45", difficulty:"متوسط",
      narrative:"بوی نمک و ماهی فاسد. انبار شماره 7 قفل است. روی قفل حک شده: آنچه هر شب می‌آید اما هرگز نمی‌ماند.",
      question:"رمز قفل چیست؟", options:["سایه","ماه","ستاره","ابر","موج"], correct:1,
      clue:"مهتاب راهنماست - کلید زیر آجر سوم", evidence:"جعبه چوبی خالی", suspect:"ملوان مرموز", reward:15, focusPenalty:5 },
    { id:8, name:"سردخانه", location:"سردخانه متروک", time:"02:10", difficulty:"سخت",
      narrative:"داخل سردخانه، سه قلاب گوشت آویزان است. روی یکی شماره 1، دومی 2، سومی 3. یادداشتی: زنده‌ترین عدد را انتخاب کن.",
      question:"کدام قلاب را بکشی؟", options:["قلاب 1","قلاب 2","قلاب 3","همه با هم","هیچکدام"], correct:2,
      clue:"عدد 3 کلید در پشتی است", evidence:"لکه خون روی قلاب", suspect:"قصاب سابق", reward:20, focusPenalty:10 },
    { id:9, name:"دفتر فرمانداری", location:"دفتر فرمانداری", time:"03:00", difficulty:"سخت",
      narrative:"میز فرماندار به هم ریخته. داخل کشوی مخفی، دفترچه‌ای با رمز سه حرفی. اشاره: حرف اول اسم شهر، حرف آخر اسم خیابان اصلی.",
      question:"رمز سه حرفی چیست؟", options:["زول","زال","وال","دال","الو"], correct:0,
      clue:"زول - کد دسترسی به پرونده اصلی", evidence:"دفترچه یادداشت", suspect:"منشی فرماندار", reward:20, focusPenalty:10 },
    { id:10, name:"بایگانی مخفی", location:"زیرزمین کتابخانه", time:"04:15", difficulty:"نهایی",
      narrative:"قفسه‌های گرد و غبار گرفته. پرونده قرمز رنگ را پیدا می‌کنی. روی آن نوشته: برای باز کردن، بگو نام قاتل.",
      question:"نام قاتل پرونده چیست؟", options:["سایه‌نورد","سکوت","زوال","رستاخیز","طلوع"], correct:2,
      clue:"زوال قاتل است - همه چیز در این شهر فاسد", evidence:"اعتراف کتبی", suspect:"شهردار و فرماندار هر دو", reward:25, focusPenalty:15 },
    { id:11, name:"ایستگاه قطار", location:"ایستگاه مرکزی", time:"00:15", difficulty:"آسان",
      narrative:"بلیط قدیمی روی زمین. شماره سکو محو شده. بلیط: سکوی 2، اما قطار ساعت 2 بامداد. دو برابر 2؟",
      question:"سکو چند است؟", options:["2","4","6","8","10"], correct:1,
      clue:"سکوی 4 - قطار نیمه شب", evidence:"بلیط پاره", suspect:"رفیق سابق", reward:10, focusPenalty:5 },
    { id:12, name:"پل شکسته", location:"پل قدیمی زوال", time:"01:30", difficulty:"متوسط",
      narrative:"زیر پل، جعبه فلزی. روی آن: اولین عدد اول، دومین عدد اول، سومین عدد اول را وارد کن.",
      question:"رمز سه رقمی چیست؟", options:["123","235","357","137","111"], correct:1,
      clue:"235 - کلید گاوصندوق", evidence:"اسلحه خشاب خالی", suspect:"نگهبان شب", reward:15, focusPenalty:5 },
    { id:13, name:"کلوپ شبانه", location:"کلوپ سایه", time:"02:45", difficulty:"متوسط",
      narrative:"داخل کلوپ، جای ویآیپی. روی میز کارت دعوت با رمز: عدد بین 7 و 9.",
      question:"رمز چند است؟", options:["6","7","8","9","10"], correct:2,
      clue:"8 - درب اتاق خصوصی", evidence:"لیوان شراب", suspect:"مدیر کلوپ", reward:15, focusPenalty:5 },
    { id:14, name:"اتاق بازجویی", location:"کلانتری قدیمی", time:"03:30", difficulty:"سخت",
      narrative:"روی میز پرونده قتل. سه مظنون: الف، ب، ج. یادداشت: الف دروغ می‌گوید، ب راست می‌گوید، ج ساکت است. قاتل کسی است که ساکت نیست.",
      question:"قاتل کیست؟", options:["الف","ب","ج","الف و ب","همه"], correct:1,
      clue:"ب قاتل است - اعتراف کرد", evidence:"نوار بازجویی", suspect:"ب - معاون سابق", reward:20, focusPenalty:10 },
    { id:15, name:"آرامستان", location:"آرامستان شرقی", time:"00:00", difficulty:"سخت",
      narrative:"قبر بی‌نام. روی سنگ: تولد 1350، مرگ 1400. سن در زمان مرگ چند سال است؟",
      question:"سن متوفی؟", options:["40","45","50","55","60"], correct:2,
      clue:"50 سال - سرنخ بعدی زیر سنگ", evidence:"حلقه ازدواج", suspect:"بیوه سیاه‌پوش", reward:20, focusPenalty:10 },
    { id:16, name:"کارخانه متروکه", location:"کارخانه نساجی", time:"01:00", difficulty:"متوسط",
      narrative:"داخل کارخانه، سه ردیف دستگاه. یادداشت: ردیف اول 5 ماشین، دومی 3، سومی 7. مجموع همه؟",
      question:"چند ماشین؟", options:["12","13","14","15","16"], correct:4,
      clue:"16 - کمد شماره 16", evidence:"دفترچه حقوق", suspect:"کارگر اخراجی", reward:15, focusPenalty:5 },
    { id:17, name:"برج ناقوس", location:"برج کلیسا", time:"02:30", difficulty:"متوسط",
      narrative:"ناقوس 7 بار به صدا درآمد. سپس 3 بار. سپس 5 بار. چند بار نواخته شد؟",
      question:"تعداد کل؟", options:["10","12","13","15","17"], correct:4,
      clue:"15 ناقوس - کلید زیر ناقوس هفتم", evidence:"طناب پاره", suspect:"ناقوس‌چی سابق", reward:15, focusPenalty:5 },
    { id:18, name:"حمام عمومی", location:"حمام قدیمی", time:"23:45", difficulty:"آسان",
      narrative:"کاشی شماره 4، 8، 12، 16. بعدی چند است؟", question:"عدد بعدی؟", options:["18","20","22","24","26"], correct:1,
      clue:"20 - شیر آب را باز کن", evidence:"مواد مخدر", suspect:"معتاد محلی", reward:10, focusPenalty:5 },
    { id:19, name:"سرداب", location:"سرداب کلیسا", time:"04:00", difficulty:"سخت",
      narrative:"تابوت‌ها به ترتیب: 1920، 1930، 1940، 1950، بعدی؟", question:"سال بعدی؟", options:["1960","1970","1980","1990","2000"], correct:0,
      clue:"1960 - مدارک در تابوت", evidence:"جمجمه شکسته", suspect:"گورکن", reward:20, focusPenalty:10 },
    { id:20, name:"مخفیگاه", location:"زیرزمین خانه فرماندار", time:"05:00", difficulty:"نهایی",
      narrative:"صندوق آهنی. رمز: روز تولد فرماندار (1350/12/5). فقط روز و ماه.", question:"رمز چهار رقمی (روز و ماه)؟", options:["512","512","0512","1205","5120"], correct:2,
      clue:"0512 - پنجم دسامبر", evidence:"اسناد محرمانه", suspect:"فرماندار", reward:25, focusPenalty:15 },
    { id:21, name:"بیمارستان", location:"بیمارستان متروکه", time:"01:20", difficulty:"متوسط",
      narrative:"پرونده پزشکی بیمار X. سن او دو برابر نصف 20 به اضافه 5. چند ساله؟", question:"سن بیمار؟", options:["20","25","30","35","40"], correct:1,
      clue:"25 سال - اتاق 25", evidence:"نسخه پزشکی", suspect:"پرستار شب", reward:15, focusPenalty:5 },
    { id:22, name:"داروخانه", location:"داروخانه شبانه‌روزی", time:"02:00", difficulty:"آسان",
      narrative:"قفسه داروها: آمپول آبی 3 تا، قرمز 5 تا، سفید 2 تا. جمع؟", question:"چند آمپول؟", options:["8","9","10","11","12"], correct:2,
      clue:"10 - کشوی دهم", evidence:"سرنگ استفاده شده", suspect:"داروساز", reward:10, focusPenalty:5 },
    { id:23, name:"مدرسه قدیمی", location:"مدرسه زوال", time:"03:15", difficulty:"متوسط",
      narrative:"تخته سیاه: 2 + 2 = 5 (غلط)، 3 + 3 = 7 (غلط)، 4 + 4 = 9 (غلط). الگو چیست؟", question:"5 + 5 = ?", options:["10","11","12","13","14"], correct:1,
      clue:"11 - صندوق معلم", evidence:"نمره تقلبی", suspect:"معلم ریاضی", reward:15, focusPenalty:5 },
    { id:24, name:"دادگاه", location:"ساختمان دادگستری", time:"12:30", difficulty:"سخت",
      narrative:"پرونده قاضی. سه شاهد: یکی راست می‌گوید، دو تا دروغ. شاهد A: B قاتل است. B: C قاتل است. C: من بی‌گناهم.", question:"قاتل کیست؟", options:["A","B","C","A و B","B و C"], correct:0,
      clue:"A قاتل است - اعتراف ضبط شده", evidence:"حکم قاضی", suspect:"قاضی فاسد", reward:20, focusPenalty:10 },
    { id:25, name:"بندر", location:"بندر قدیمی", time:"04:45", difficulty:"نهایی",
      narrative:"جعبه ضدآب. رمز: تعداد حروف اسم شهر (زوال) ضرب در 5 منهای 3.", question:"رمز چند است؟", options:["12","15","17","18","20"], correct:3,
      clue:"18 - جعبه باز شد", evidence:"مدارک قاچاق", suspect:"ملوان", reward:25, focusPenalty:15 },
    { id:26, name:"رستوران", location:"رستوران شبانه", time:"23:30", difficulty:"آسان",
      narrative:"صورتحساب: قهوه 5، کیک 7، چای 4، شیرینی 3. بیشترین قیمت؟", question:"بیشترین قیمت؟", options:["5","6","7","8","9"], correct:2,
      clue:"7 - زیر بشقاب", evidence:"دستمال خونی", suspect:"پیشخدمت", reward:10, focusPenalty:5 },
    { id:27, name:"خیابان", location:"خیابان اصلی", time:"01:10", difficulty:"متوسط",
      narrative:"سه چراغ: اولی 3 بار روشن، دومی 5 بار، سومی 7 بار. مجموع؟", question:"تعداد روشن شدن؟", options:["13","14","15","16","17"], correct:2,
      clue:"15 - نیمکت پارک", evidence:"ته سیگار", suspect:"راننده تاکسی", reward:15, focusPenalty:5 },
    { id:28, name:"سینما", location:"سینما قدیمی", time:"02:50", difficulty:"متوسط",
      narrative:"صندلی شماره 10، 20، 30، 40. شماره بعدی؟", question:"صندلی بعدی؟", options:["45","48","50","55","60"], correct:2,
      clue:"50 - زیر صندلی", evidence:"بلیط سینما", suspect:"فروشنده بلیط", reward:15, focusPenalty:5 },
    { id:29, name:"بانک", location:"بانک ملی", time:"03:40", difficulty:"سخت",
      narrative:"گاوصندوق اصلی. رمز: جمع ارقام 1350 (سال تولد فرماندار) ضرب در 2.", question:"رمز چند است؟", options:["16","18","20","22","24"], correct:1,
      clue:"18 - گاوصندوق باز", evidence:"دستبند پول", suspect:"نگهبان بانک", reward:20, focusPenalty:10 },
    { id:30, name:"انتهای خط", location:"مقبره زیرزمینی", time:"06:00", difficulty:"نهایی",
      narrative:"سرداب نهایی. حقیقت کامل در اینجاست. کلمه نهایی: آنچه شهر را نابود کرد.", question:"کلمه نهایی چیست؟", options:["طمع","زوال","سکوت","دروغ","فریب"], correct:1,
      clue:"زوال - پرونده برای همیشه بسته شد", evidence:"اعتراف نهایی", suspect:"همه مظنونان دستگیر شدند", reward:30, focusPenalty:15 }
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

const storyText = document.getElementById('storyText');
const puzzleQuestion = document.getElementById('puzzleQuestion');
const optionsArea = document.getElementById('optionsArea');
const messageArea = document.getElementById('messageArea');
const continueBtn = document.getElementById('continueBtn');
const resetBtn = document.getElementById('resetBtn');
const senseBtn = document.getElementById('senseBtn');
const currentStageNum = document.getElementById('currentStageNum');
const totalStagesSpan = document.getElementById('totalStages');
const locationName = document.getElementById('locationName');
const timeTag = document.getElementById('timeTag');
const clueLine = document.getElementById('clueLine');
const lastClue = document.getElementById('lastClue');
const detectiveCreditSpan = document.getElementById('detectiveCredit');
const mentalFocusSpan = document.getElementById('mentalFocus');
const focusBar = document.getElementById('focusBar');
const evidenceCountSpan = document.getElementById('evidenceCount');
const evidenceList = document.getElementById('evidenceList');
const suspectText = document.getElementById('suspectText');
const levelMap = document.getElementById('levelMap');
const difficultyBadge = document.getElementById('difficultyBadge');
const adSpace = document.getElementById('adSpace');
const toast = document.getElementById('toast');

function init() {
    totalStagesSpan.textContent = stagesData.length;
    loadGame();
    renderLevelMap();
    attachEvents();
    updateUI();
}

function attachEvents() {
    continueBtn.addEventListener('click', nextStage);
    resetBtn.addEventListener('click', newCase);
    senseBtn.addEventListener('click', useSixthSense);
}

function renderLevelMap() {
    levelMap.innerHTML = '';
    stagesData.forEach((stage, idx) => {
        const node = document.createElement('div');
        node.className = 'level-node';
        node.textContent = stage.id;
        if (idx < currentStage) node.classList.add('completed');
        else if (idx === currentStage) node.classList.add('current');
        else if (idx > currentStage) node.classList.add('locked');
        levelMap.appendChild(node);
    });
}

function loadStage(index) {
    if (index >= stagesData.length) {
        completeGame();
        return;
    }
    const stage = stagesData[index];
    currentStage = index;
    currentStageNum.textContent = stage.id;
    locationName.textContent = stage.location;
    timeTag.textContent = stage.time;
    storyText.textContent = stage.narrative;
    puzzleQuestion.textContent = stage.question;
    difficultyBadge.textContent = stage.difficulty;
    suspectText.textContent = stage.suspect;
    
    if (collectedClues.length > 0) {
        const last = collectedClues[collectedClues.length-1];
        clueLine.textContent = last;
        lastClue.textContent = last.length > 40 ? last.substring(0,40)+'...' : last;
    } else {
        clueLine.textContent = 'هیچ سرنخی ثبت نشده';
        lastClue.textContent = 'هیچ';
    }
    
    renderOptions(stage.options);
    answerLocked = false;
    continueBtn.disabled = true;
    messageArea.innerHTML = 'گزینه مورد نظر را انتخاب کن... حقیقت در یکی از آنهاست.';
    messageArea.className = 'message-area';
    renderLevelMap();
    updateUI();
}

function renderOptions(options) {
    optionsArea.innerHTML = '';
    options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'option-btn';
        btn.dataset.index = idx;
        btn.addEventListener('click', () => handleAnswer(idx, btn));
        optionsArea.appendChild(btn);
    });
}

function handleAnswer(selectedIdx, btn) {
    if (answerLocked || gameCompleted) return;
    const stage = stagesData[currentStage];
    const isCorrect = (selectedIdx === stage.correct);
    answerLocked = true;
    
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (isCorrect) {
        totalCorrect++;
        btn.classList.add('correct');
        detectiveCredit += stage.reward;
        if (!collectedClues.includes(stage.clue)) collectedClues.push(stage.clue);
        if (stage.evidence && !collectedEvidence.includes(stage.evidence)) collectedEvidence.push(stage.evidence);
        messageArea.innerHTML = `پاسخ درست. +${stage.reward} اعتبار کارآگاهی. ${stage.clue}`;
        messageArea.className = 'message-area message-success';
        continueBtn.disabled = false;
        renderEvidence();
        updateUI();
        saveGame();
        showToast('پیشرفت ذخیره شد');
    } else {
        totalWrong++;
        btn.classList.add('wrong');
        mentalFocus = Math.max(0, mentalFocus - stage.focusPenalty);
        messageArea.innerHTML = `پاسخ نادرست. -${stage.focusPenalty} تمرکز ذهنی. دوباره تلاش کن.`;
        messageArea.className = 'message-area message-fail';
        updateUI();
        
        if (mentalFocus <= 0) {
            messageArea.innerHTML = 'تمرکز ذهنی به صفر رسید. پرونده از ابتدای همین مرحله بازبینی می‌شود...';
            setTimeout(() => {
                mentalFocus = 100;
                loadStage(currentStage);
                updateUI();
                saveGame();
            }, 2000);
            return;
        }
        
        setTimeout(() => {
            if (!gameCompleted && currentStage === stage.id-1 && !continueBtn.disabled) {
                answerLocked = false;
                allBtns.forEach(b => {
                    b.disabled = false;
                    b.classList.remove('wrong');
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
    
    const cost = 10;
    if (mentalFocus < cost) {
        messageArea.innerHTML = `تمرکز ذهنی کافی نیست (نیاز ${cost} واحد)`;
        return;
    }
    
    mentalFocus -= cost;
    updateUI();
    
    adSpace.innerHTML = `
        <div class="ad-placeholder">
            <div style="background:#1a120c; padding:8px; border-radius:8px; margin-bottom:6px; font-size:0.7rem;">[ فضای تبلیغات - اینجا تبلیغ شما می‌آید ]</div>
            <div style="display:flex; gap:8px; justify-content:center; margin-top:6px;">
                <button id="adHintBtn" style="background:#3a2a20; border:none; color:#dcae8a; padding:4px 12px; border-radius:20px; font-size:0.65rem; cursor:pointer;">راهنمایی</button>
                <button id="adBonusBtn" style="background:#3a2a20; border:none; color:#dcae8a; padding:4px 12px; border-radius:20px; font-size:0.65rem; cursor:pointer;">+۱۰ اعتبار</button>
            </div>
        </div>
    `;
    
    const hintBtn = document.getElementById('adHintBtn');
    const bonusBtn = document.getElementById('adBonusBtn');
    const stage = stagesData[currentStage];
    
    if (hintBtn) {
        hintBtn.onclick = () => {
            const hint = `راهنمایی حس ششم: گزینه "${stage.options[stage.correct]}" به حقیقت نزدیک‌تر است.`;
            messageArea.innerHTML = hint;
            messageArea.className = 'message-area message-success';
            adSpace.innerHTML = `<div class="ad-placeholder"><span class="ad-icon">[ تبلیغات ]</span></div>`;
            saveGame();
        };
    }
    
    if (bonusBtn) {
        bonusBtn.onclick = () => {
            detectiveCredit += 10;
            messageArea.innerHTML = '+۱۰ اعتبار کارآگاهی از طریق تبلیغات. متشکریم.';
            messageArea.className = 'message-area message-success';
            adSpace.innerHTML = `<div class="ad-placeholder"><span class="ad-icon">[ تبلیغات ]</span></div>`;
            updateUI();
            saveGame();
        };
    }
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

function newCase() {
    const currentStageId = currentStage;
    totalWrong = 0;
    totalCorrect = 0;
    answerLocked = false;
    gameCompleted = false;
    loadStage(currentStageId);
    updateUI();
    saveGame();
    showToast('پرونده جدید از همین مرحله شروع شد');
}

function completeGame() {
    gameCompleted = true;
    continueBtn.disabled = true;
    const accuracy = totalCorrect + totalWrong > 0 ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0;
    storyText.innerHTML = `پرونده زوال برای همیشه بسته شد.\nاعتبار نهایی کارآگاهی: ${detectiveCredit}\nدقت بازجویی: ${accuracy}%\nشهر زوال نفس می‌کشد... برای اولین بار.`;
    puzzleQuestion.innerHTML = 'پایان پرونده';
    optionsArea.innerHTML = '<div style="text-align:center; padding:20px; color:#8a6a4a;">ماجرای رد آخر به پایان رسید</div>';
    messageArea.innerHTML = 'تو حقیقت را پیدا کردی. می‌توانی پرونده جدیدی شروع کنی.';
    saveGame();
}

function updateUI() {
    detectiveCreditSpan.textContent = detectiveCredit;
    mentalFocusSpan.textContent = mentalFocus;
    const focusPercent = Math.max(0, mentalFocus);
    focusBar.style.width = `${focusPercent}%`;
    if (mentalFocus < 30) focusBar.style.background = '#aa4a2a';
    else if (mentalFocus < 60) focusBar.style.background = '#da8a6a';
    else focusBar.style.background = '#c48a6a';
    evidenceCountSpan.textContent = collectedEvidence.length;
}

function renderEvidence() {
    if (collectedEvidence.length === 0) {
        evidenceList.innerHTML = '<div class="empty-text">هیچ مدرکی ثبت نشده</div>';
        return;
    }
    evidenceList.innerHTML = collectedEvidence.map(ev => `<div class="evidence-item">📄 ${ev}</div>`).join('');
}

function saveGame() {
    const saveData = {
        currentStage, collectedClues, collectedEvidence,
        detectiveCredit, mentalFocus, totalWrong, totalCorrect,
        completed: gameCompleted
    };
    localStorage.setItem('RadAkharFinal30', JSON.stringify(saveData));
}

function loadGame() {
    const saved = localStorage.getItem('RadAkharFinal30');
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
                showToast('پرونده بارگذاری شد');
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

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

window.addEventListener('DOMContentLoaded', init);
