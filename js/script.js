// =========================================
// المتغيرات الأساسية
// =========================================
const fakeError = document.getElementById('fake-error');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');

// الرقم السري مدة المقلب (60000 = دقيقة)
const CORRECT_PASSWORD = "2910"; 

setTimeout(() => {
    fakeError.classList.add('hidden');
    setTimeout(() => {
        passwordScreen.classList.remove('hidden');
        passwordScreen.style.zIndex = "5";
    }, 800); 
}, 60000);

// التحقق من كلمة السر
unlockBtn.addEventListener('click', () => {
    if (passwordInput.value === CORRECT_PASSWORD) {
        passwordScreen.classList.add('hidden');
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            mainContent.style.zIndex = "5";
            startWelcomeSequence(); 
        }, 800);
    } else {
        errorMsg.classList.remove('hidden');
        passwordInput.value = ""; 
        errorMsg.style.animation = 'none';
        errorMsg.offsetHeight; 
        errorMsg.style.animation = null; 
    }
});

// =========================================
// متغيرات الترحيب والموسيقى والمقلب
// =========================================
const welcomeTextElement = document.getElementById('welcome-text');
const musicControls = document.getElementById('music-controls');
const seriousBtn = document.getElementById('serious-music-btn');
const funnyBtn = document.getElementById('funny-music-btn');
const seriousAudio = document.getElementById('serious-audio');
const funnyAudio = document.getElementById('funny-audio');
const volumeControl = document.getElementById('volume-control');
const nextGameBtn = document.getElementById('next-game-btn');
const gameScreen = document.getElementById('game-screen');

// أزرار المقلب
const prankBtn1 = document.getElementById('prank-btn-1');
const prankBtn2 = document.getElementById('prank-btn-2');
const prankBtn3 = document.getElementById('prank-btn-3');

// ضبط الصوت الافتراضي
seriousAudio.volume = 0.5;
funnyAudio.volume = 0.5;

volumeControl.addEventListener('input', (e) => {
    seriousAudio.volume = e.target.value;
    funnyAudio.volume = e.target.value;
});

const welcomeMessage = "أهلاً وسهلاً بعجوزتنا الحارثية! 👵 كبرتي وصرتي من جيل الطيبين. كل عام وأنتِ بخير يا أحلى من يكبر. هذي الصفحة صممناها عشان نختبر ذاكرتك قبل ما تفقدينها تماماً 😂، جاهزة للتحدي عشان تاخذين الهدية الكبيرة؟";
const welcomeChars = [...welcomeMessage]; 
let charIndex = 0;

function startWelcomeSequence() {
    musicControls.classList.remove('hidden');
    // إخفاء مؤشر الكتابة مؤقتاً وإظهار الزر الأول
    welcomeTextElement.style.borderLeft = "none";
    prankBtn1.classList.remove('hidden');
}

// برمجة مقلب الأزرار المتسلسلة
prankBtn1.addEventListener('click', () => {
    prankBtn1.classList.add('hidden');
    welcomeTextElement.textContent = "خرفتي وانحولتي بعد 😂";
    
    // يظهر الزر الثاني بعد 3 ثواني
    setTimeout(() => {
        prankBtn2.classList.remove('hidden');
    }, 3000);
});

prankBtn2.addEventListener('click', () => {
    prankBtn2.classList.add('hidden');
    welcomeTextElement.textContent = "الله لا يبلانا 🤦‍♀️";
    
    // يظهر الزر الثالث بعد 3 ثواني
    setTimeout(() => {
        prankBtn3.classList.remove('hidden');
    }, 3000);
});

prankBtn3.addEventListener('click', () => {
    prankBtn3.classList.add('hidden');
    welcomeTextElement.textContent = ""; // تفريغ النص
    welcomeTextElement.style.borderLeft = "3px solid var(--primary)"; // إرجاع مؤشر الكتابة
    charIndex = 0;
    typeWriter(); // تشغيل الآلة الكاتبة ببطء
});

// الآلة الكاتبة (معدلة للسرعة البطيئة)
function typeWriter() {
    if (charIndex < welcomeChars.length) {
        welcomeTextElement.textContent += welcomeChars[charIndex];
        charIndex++;
        setTimeout(typeWriter, 120); // السرعة بطيئة (120)
    } else {
        nextGameBtn.classList.remove('hidden');
        welcomeTextElement.style.borderLeft = "none"; 
    }
}

function updateMusicButtons(activeBtn, inactiveBtn) {
    activeBtn.classList.remove('outline');
    inactiveBtn.classList.add('outline');
}

seriousBtn.addEventListener('click', () => {
    funnyAudio.pause();
    seriousAudio.play();
    updateMusicButtons(seriousBtn, funnyBtn);
});

funnyBtn.addEventListener('click', () => {
    seriousAudio.pause();
    funnyAudio.play();
    updateMusicButtons(funnyBtn, seriousBtn);
});

// =========================================
// الانتقال للشاشة الرابعة (لعبة الأسئلة)
// =========================================
nextGameBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    
    setTimeout(() => {
        gameScreen.classList.remove('hidden');
        gameScreen.style.zIndex = "5";
    }, 800);
});
