// المتغيرات
const fakeError = document.getElementById('fake-error');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');

// كلمة السر (اطلب من العميل تاريخ ميلاد البنت، مثلاً لو كان 15 مايو نجعله 1505)
const CORRECT_PASSWORD = "1029"; 

// 1. إخفاء المقلب بعد 3 ثواني وإظهار شاشة القفل
setTimeout(() => {
    fakeError.classList.add('hidden');
    setTimeout(() => {
        passwordScreen.classList.remove('hidden');
        passwordScreen.style.zIndex = "1";
    }, 3000); // ننتظر ثانية حتى ينتهي تأثير الاختفاء
}, 10000);

// 2. التحقق من كلمة السر
unlockBtn.addEventListener('click', () => {
    if (passwordInput.value === CORRECT_PASSWORD) {
        // إذا كانت صحيحة
        passwordScreen.classList.add('hidden');
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            mainContent.style.zIndex = "1";
            startWelcomeSequence(); // دالة سنكتبها لاحقاً لرسالة الترحيب والموسيقى
        }, 1000);
    } else {
        // إذا كانت خاطئة
        errorMsg.classList.remove('hidden');
        passwordInput.value = ""; // تفريغ الحقل
    }
});

// =========================================
// متغيرات الشاشة الثالثة (الترحيب والموسيقى)
// =========================================
const welcomeTextElement = document.getElementById('welcome-text');
const musicControls = document.getElementById('music-controls');
const seriousBtn = document.getElementById('serious-music-btn');
const funnyBtn = document.getElementById('funny-music-btn');
const seriousAudio = document.getElementById('serious-audio');
const funnyAudio = document.getElementById('funny-audio');
const nextGameBtn = document.getElementById('next-game-btn');

// النص الذي سيتم كتابته (يمكنك تغييره لاحقاً بما يطلبه العميل)
const welcomeMessage = "كل عام وأنتِ بخير! كبرتي سنة وصار عمرك... لحظة، كم صار؟ ما علينا! المهم إنك أجمل من كبر. هذي الصفحة صُممت خصيصاً لك، بس عشان تاخذين هديتك لازم تنجحين في الاختبار الجاي!";
let charIndex = 0;

// دالة بدء الترحيب (يتم استدعاؤها بعد إدخال كلمة السر صحيحة)
function startWelcomeSequence() {
    musicControls.classList.remove('hidden');
    typeWriter();
}

// تأثير الآلة الكاتبة
function typeWriter() {
    if (charIndex < welcomeMessage.length) {
        welcomeTextElement.textContent += welcomeMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // سرعة الكتابة 50 جزء من الثانية
    } else {
        nextGameBtn.classList.remove('hidden');
        welcomeTextElement.style.borderLeft = "none"; // إخفاء مؤشر الكتابة بالنهاية
    }
}

// التحكم بالموسيقى وتغيير لون الخلفية حسب المود
seriousBtn.addEventListener('click', () => {
    funnyAudio.pause();
    seriousAudio.play();
    document.getElementById('main-content').style.backgroundColor = "#1a1a2e"; // جو هادي
});

funnyBtn.addEventListener('click', () => {
    seriousAudio.pause();
    funnyAudio.play();
    document.getElementById('main-content').style.backgroundColor = "#ff4757"; // لون أحمر يرمز للجنون
});
