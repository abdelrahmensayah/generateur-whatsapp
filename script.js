const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const generateBtn = document.getElementById('generateBtn');
const resultArea = document.getElementById('resultArea');
const resultLink = document.getElementById('resultLink');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', function() {
    let phone = phoneInput.value.trim();
    let message = messageInput.value.trim();

    if (phone === '') {
        alert("Il faut au moins taper un numéro de téléphone !");
        return;
    }

    // Nettoyage : on ne garde que les chiffres
    phone = phone.replace(/[^0-9]/g, '');

    // Correction automatique : si l'utilisateur a laissé le 0 après le 33 (ex: 3306...)
    if (phone.startsWith('330')) {
        phone = '33' + phone.substring(3); // On recolle le 33 avec le reste du numéro sans le 0
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