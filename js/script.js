// المتغيرات الأساسية
const fakeError = document.getElementById('fake-error');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');

// كلمة السر مدة المقلب (60 ثانية)
const CORRECT_PASSWORD = "2910"; 

setTimeout(() => {
    fakeError.classList.add('hidden');
    setTimeout(() => {
        passwordScreen.classList.remove('hidden');
    }, 1000); 
}, 10000);

// التحقق من كلمة السر
unlockBtn.addEventListener('click', () => {
    if (passwordInput.value === CORRECT_PASSWORD) {
        passwordScreen.classList.add('hidden');
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            startWelcomeSequence(); 
        }, 1000);
    } else {
        errorMsg.classList.remove('hidden');
        passwordInput.value = ""; 
    }
});

// متغيرات الترحيب والموسيقى
const welcomeTextElement = document.getElementById(' هلا والله بكهلتنا كل عام وانتي بخير وصحة وسلامة والله يجعلها سنين مديدة وسعيدة الاغلب شارك في الفقره الجاية ونختبر ذاكرتك خرفتي ولا باقي (( مو مهم النتيجة اهم شيء تنبسطي )) ');
const musicControls = document.getElementById('music-controls');
const seriousBtn = document.getElementById('serious-music-btn');
const funnyBtn = document.getElementById('funny-music-btn');
const seriousAudio = document.getElementById('serious-audio');
const funnyAudio = document.getElementById('funny-audio');
const nextGameBtn = document.getElementById('next-game-btn');

const welcomeMessage = "كل عام وأنتِ بخير! كبرتي سنة وصار عمرك... لحظة، كم صار؟ ما علينا! المهم إنك أجمل من كبر. هذي الصفحة صُممت خصيصاً لك، بس عشان تاخذين هديتك لازم تنجحين في الاختبار الجاي!";
let charIndex = 0;

function startWelcomeSequence() {
    musicControls.classList.remove('hidden');
    typeWriter();
}

function typeWriter() {
    if (charIndex < welcomeMessage.length) {
        welcomeTextElement.textContent += welcomeMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); 
    } else {
        nextGameBtn.classList.remove('hidden');
        welcomeTextElement.style.borderLeft = "none"; 
    }
}

seriousBtn.addEventListener('click', () => {
    funnyAudio.pause();
    seriousAudio.play();
    document.getElementById('main-content').style.backgroundColor = "#1a1a2e"; 
});

funnyBtn.addEventListener('click', () => {
    seriousAudio.pause();
    funnyAudio.play();
    document.getElementById('main-content').style.backgroundColor = "#ff4757"; 
});
