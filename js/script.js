// =========================================
// المتغيرات الأساسية
// =========================================
const fakeError = document.getElementById('fake-error');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');

// الرقم السري مدة المقلب (حالياً دقيقة = 60000)
const CORRECT_PASSWORD = "1029"; 

setTimeout(() => {
    fakeError.classList.add('hidden');
    setTimeout(() => {
        passwordScreen.classList.remove('hidden');
        passwordScreen.style.zIndex = "5";
    }, 800); // 800 جزء من الثانية ليتماشى مع نعومة الانتقال الجديد
}, 10000);

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
        // إعادة تحريك كلاس الاهتزاز
        errorMsg.style.animation = 'none';
        errorMsg.offsetHeight; 
        errorMsg.style.animation = null; 
    }
});

// =========================================
// متغيرات الترحيب والموسيقى
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

// ضبط مستوى الصوت الافتراضي على النص (50%)
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
    typeWriter();
}

function typeWriter() {
    if (charIndex < welcomeChars.length) {
        welcomeTextElement.textContent += welcomeChars[charIndex];
        charIndex++;
        setTimeout(typeWriter, 40); // سرعنا الكتابة قليلاً لتناسب الحماس
    } else {
        nextGameBtn.classList.remove('hidden');
        welcomeTextElement.style.borderLeft = "none"; 
    }
}

// تغيير ستايل الأزرار عند اختيار الموسيقى
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
