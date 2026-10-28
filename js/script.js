// =========================================
// المتغيرات الأساسية
// =========================================
const fakeError = document.getElementById('fake-error');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');

// الرقم السري
const CORRECT_PASSWORD = "2910"; 

setTimeout(() => {
    fakeError.classList.add('hidden');
    setTimeout(() => {
        passwordScreen.classList.remove('hidden');
        passwordScreen.style.zIndex = "5";
    }, 800); 
}, 5000); // تم تعديلها إلى 5 ثوانٍ بناءً على كودك

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
    welcomeTextElement.style.borderLeft = "none";
    prankBtn1.classList.remove('hidden');
}

// برمجة مقلب الأزرار المتسلسلة
prankBtn1.addEventListener('click', () => {
    prankBtn1.classList.add('hidden');
    welcomeTextElement.textContent = "خرفتي وانحولتي بعد 😂";
    
    setTimeout(() => {
        prankBtn2.classList.remove('hidden');
    }, 3000);
});

prankBtn2.addEventListener('click', () => {
    prankBtn2.classList.add('hidden');
    welcomeTextElement.textContent = "الله لا يبلانا 🤦‍♀️";
    
    setTimeout(() => {
        prankBtn3.classList.remove('hidden');
    }, 3000);
});

prankBtn3.addEventListener('click', () => {
    prankBtn3.classList.add('hidden');
    welcomeTextElement.textContent = ""; 
    welcomeTextElement.style.borderLeft = "3px solid var(--primary)"; 
    charIndex = 0;
    typeWriter(); 
});

function typeWriter() {
    if (charIndex < welcomeChars.length) {
        welcomeTextElement.textContent += welcomeChars[charIndex];
        charIndex++;
        setTimeout(typeWriter, 120); 
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
// الانتقال لرحلة المنطاد بالتمرير
// =========================================
nextGameBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    
    setTimeout(() => {
        gameScreen.classList.remove('hidden');
        gameScreen.style.zIndex = "5";
        gameScreen.scrollTop = 0; // لضمان بداية التمرير من أعلى الصفحة
    }, 800);
});

// تأثير صعود المنطاد للقمر في نهاية التمرير
gameScreen.addEventListener('scroll', () => {
    const scrollTop = gameScreen.scrollTop;
    const maxScroll = gameScreen.scrollHeight - gameScreen.clientHeight;
    
    const scrollPercent = scrollTop / maxScroll;
    const balloon = document.getElementById('hot-air-balloon');
    
    // إذا وصل المستخدم لنهاية الصفحة (الفضاء)
    if (scrollPercent > 0.9) {
        balloon.style.bottom = "50%";
        balloon.style.transform = "translate(-50%, -50%) scale(0.5)";
        balloon.style.opacity = "0.7";
    } else {
        balloon.style.bottom = "20%";
        balloon.style.transform = "translate(-50%, 0) scale(1)";
        balloon.style.opacity = "1";
    }
});
