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
}, 60000);

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
