const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const generateBtn = document.getElementById('generateBtn');
const resultArea = document.getElementById('resultArea');
const resultLink = document.getElementById('resultLink');
const copyBtn = document.getElementById('copyBtn');

const creditCountSpan = document.getElementById('creditCount');
const stripeBtn = document.getElementById('stripeBtn');

// --- LOGIQUE DES CRÉDITS ---
let credits = localStorage.getItem('walink_credits');
if (credits === null) {
    credits = 50;
    localStorage.setItem('walink_credits', 50);
} else {
    credits = parseInt(credits);
}

function updateCreditUI() {
    if (!creditCountSpan) return;
    creditCountSpan.textContent = credits;
    
    if (credits <= 0) {
        generateBtn.classList.add('hidden');
        stripeBtn.classList.remove('hidden');
    } else {
        generateBtn.classList.remove('hidden');
        stripeBtn.classList.add('hidden');
    }
}

updateCreditUI();
// ---------------------------

generateBtn.addEventListener('click', function() {
    let phone = phoneInput.value.trim();
    let message = messageInput.value.trim();

    // S'il n'y a pas de numéro, on bloque et on ne décrémente pas
    if (phone === '') {
        alert("Il faut au moins taper un numéro de téléphone !");
        return;
    }

    // On retire un crédit uniquement si la génération passe
    credits--;
    localStorage.setItem('walink_credits', credits);
    updateCreditUI();

    phone = phone.replace(/[^0-9]/g, '');

    if (phone.startsWith('330')) {
        phone = '33' + phone.substring(3);
    }

    let finalUrl = `https://wa.me/${phone}`;

    if (message !== '') {
        finalUrl += `?text=${encodeURIComponent(message)}`;
    }

    resultLink.value = finalUrl;
    resultArea.classList.remove('hidden');
});

copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(resultLink.value).then(() => {
        copyBtn.textContent = 'Copié ! ✅';
        copyBtn.classList.replace('bg-gray-800', 'bg-green-500');
        
        setTimeout(() => {
            copyBtn.textContent = 'Copier le lien';
            copyBtn.classList.replace('bg-green-500', 'bg-gray-800');
        }, 2000);
    });
});
