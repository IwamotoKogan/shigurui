// JavaScript kod za prikazivanje/sakrivanje popup prozora
const orderButton = document.getElementById('order-button');
const popup = document.getElementById('popup');
const confirmOrderButton = document.getElementById('confirm-order-button');

// Funkcija za prikazivanje popup prozora
function showPopup() {
    popup.style.display = 'block';
}

// Funkcija za sakrivanje popup prozora
function hidePopup() {
    popup.style.display = 'none';
}

// Postavljanje događaja "click" na dugme "Naruči" za prikazivanje popup prozora
orderButton.addEventListener('click', showPopup);

// Postavljanje događaja "click" na dugme "Naruči" unutar popup prozora za sakrivanje popup prozora
confirmOrderButton.addEventListener('click', function () {
    hidePopup();
    sendOrderEmail();
});
// Postavljanje događaja "click" na X dugme za zatvaranje popup prozora
const closeButton = document.getElementById('close-popup-button');
closeButton.addEventListener('click', closePopup);
// Funkcija za zatvaranje popup prozora
function closePopup() {
    popup.style.display = 'none';
}



// Funkcija za slanje emaila


// Postavljanje događaja "click" na dugme "Naruči" za prikazivanje popup prozora
orderButton.addEventListener('click', function () {
    showPopup();
    const orderMessage = document.getElementById('order-message');
    const height = orderMessage.getAttribute('data-height');
    const width = orderMessage.getAttribute('data-width');
    const depth = orderMessage.getAttribute('data-depth');
    const price = orderMessage.getAttribute('data-price');

    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `
        <span id="close-popup-button">&times;</span>
        <p>Unesite vaše podatke i potvrdite narudžbinu:</p>
         <p>Dimenzije elementa: ${height} x ${width} x ${depth}</p>
        <p>Cena elementa: ${price} evra</p>
        <form action="https://formsubmit.co/filip.jovetic753@gmail.com" method="POST">
            <input type="hidden" name="height" value="${height}">
            <input type="hidden" name="width" value="${width}">
            <input type="hidden" name="depth" value="${depth}">
            <input type="hidden" name="price" value="${price}">
            <input type="hidden" name="_next" value="https://https://iwamotokogan.github.io/shigurui/thanks.html">
            <input type="text" name="ime" placeholder="Ime" required>
            <input type="text" name="prezime" placeholder="Prezime" required>
            <input type="email" name="email" placeholder="Email Adresa" required>
            <input type="tel" name="telefon" placeholder="Broj Telefona" required>
            <button type="submit">Naruči</button>
        </form>
    `;

   

    
});

// ...

