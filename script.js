// كلمة المرور
const PASSWORD = "love";

// تاريخ البداية - 23 يناير 2025
const startDate = new Date("2025-01-23T00:00:00");

// التحقق من تسجيل الدخول عند تحميل الصفحة
window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
        showMainContent();
    }
};

// دالة التحقق من كلمة المرور
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMsg');
    const music = document.getElementById("bgMusic");

    if (input === PASSWORD) {

        sessionStorage.setItem('loggedIn', 'true');
        showMainContent();

        // تشغيل الأغنية بعد ما الباسورد يكون صح
        if (music) {
            music.volume = 0.4;
            music.play().catch(() => {
                document.body.addEventListener("click", () => {
                    music.play();
                }, { once: true });
            });
        }

    } else {

        errorMsg.innerText = "Wrong ❌";
        errorMsg.classList.add('show');
        document.getElementById('passwordInput').value = '';

        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 2000);
    }
}

// دالة إظهار المحتوى الرئيسي
function showMainContent() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainContent').classList.add('show');
};

// دالة العد التنازلي
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};

setInterval(updateCounter, 1000);
updateCounter();

// دوال القلوب الخلفية
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🤎';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
};

setInterval(createHeart, 500);



// دوال المودال
function openModal() {
    document.getElementById('reasonModal').style.display = 'flex';
};

function closeModal() {
    document.getElementById('reasonModal').style.display = 'none';
};

function addNewReason() {
    const icon = document.getElementById('newReasonIcon').value;
    const text = document.getElementById('newReasonText').value;

    if (icon && text) {
        const reasonsContainer = document.querySelector('.reasons');
        const navButtons = document.querySelector('.reason-nav');

        const newReason = document.createElement('div');
        newReason.classList.add('reason-card');
        newReason.innerHTML = `
            <div class="icon">${icon}</div>
            <p>${text}</p>
        `;

        reasonsContainer.insertBefore(newReason, navButtons);

        // إعادة تعيين الحقول
        document.getElementById('newReasonIcon').value = '';
        document.getElementById('newReasonText').value = '';

        // إغلاق المودال
        closeModal();

        // عرض السبب الجديد
        currentReason = reasons.length - 1;
        showReason(currentReason);
    }
};

window.addEventListener("load", function() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.4; // مستوى صوت هادي
    music.play().catch(() => {
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});

function openLetter() {
    document.getElementById("envelopeWrapper").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".envelope").classList.add("open");
    }, 200);
}

function openLetter() {
    const overlay = document.getElementById("letterOverlay");
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("bigLetter");

    overlay.style.display = "flex";

    setTimeout(() => {
        envelope.classList.add("open");
    }, 500);

    setTimeout(() => {
        letter.classList.add("show");
    }, 1200);
}

function closeLetter() {
    document.getElementById("letterOverlay").style.display = "none";
    document.getElementById("bigLetter").classList.remove("show");
    document.getElementById("envelope").classList.remove("open");
}

const reasons = [
"لإن وجودك راحة وأمان ❤️",
"لإنك بتدعمني في كل حاجة 💪",
"لإن ضحكتك بتصلح يومي 😄",
"حتة معاكي بحس إن الكون كله بيرقص حوالينا 🌟",
"كل لحظة معاكي هي أحلى لحظة في عمري ✨",
"الوقت يطير وإحنا مع بعض وما نحس بيه 💕",
"أنتِ أجمل شيء حدث لي في حياتي كلها 💖",
"لإن صوتك بيطمني مهما كنت متضايق 🎧",
"لإنك بتفهميني من غير ما أتكلم 🤍",
"لإنك دايمًا في ضهري 💎",
"لإنك حلم اتحقق 🥺",
"لإن تفاصيلك الصغيرة بتسعدني 🌸",
"لإنك أحن قلب في الدنيا 💗",
"لإن وجودك في حياتي نعمة أحمد ربنا عليها 🙏",
"لإنك ببساطة نصي التاني 👩‍❤️‍👨",
"لإن حضنك بيطمن قلبي 🤍",
"لإنك أحلى قدر حصل في حياتي ✨",
"لإنك بتخليني نسخة أحسن من نفسي 💫",
"لإنك أول حد بحب أشاركه يومي 🌷",
"لإنك حبي الأبدي ♾️"
];

let currentIndex = 0;

function nextReason() {
    currentIndex++;
    if (currentIndex >= reasons.length) {
        currentIndex = 0;
    }

    const text = document.getElementById("loveReason");

    text.classList.remove("fade-in");
    void text.offsetWidth; // restart animation
    text.innerText = reasons[currentIndex];
    text.classList.add("fade-in");
}

// إضافة قلوب عند النقر في أي مكان
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.classList.add('click-heart');
    heart.innerHTML = '🤎';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// تفعيل زر الدخول بالضغط على Enter
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

