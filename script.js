function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";

    document.querySelector(".active").classList.remove("underlineHover");
    document.querySelector(".inactive").classList.remove("active");
    document.querySelector(".inactive").classList.add("active");
    document.querySelector(".active").classList.add("underlineHover");
}

function showSignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";

    document.querySelector(".active").classList.remove("active");
    document.querySelector(".inactive").classList.remove("underlineHover");
    document.querySelector(".inactive").classList.add("active");
    document.querySelector(".active").classList.add("underlineHover");

}
function proceedToPayment() {
    // Tu môžete pridať kód na spracovanie platby
    alert('Pokračuje sa s platbou...');
}

// Funkcia na zabezpečenie, aby bolo možné vybrať iba jednu možnosť dopravy
const dopravaOptions = document.querySelectorAll('input[name="doprava"]');
dopravaOptions.forEach(option => {
    option.addEventListener('change', () => {
        dopravaOptions.forEach(o => {
            if (o !== option) {
                o.checked = false;
            }
        });
    });
});

// Funkcia na zabezpečenie, aby bolo možné vybrať iba jednu možnosť platby
const platbaOptions = document.querySelectorAll('input[name="platba"]');
platbaOptions.forEach(option => {
    option.addEventListener('change', () => {
        platbaOptions.forEach(o => {
            if (o !== option) {
                o.checked = false;
            }
        });
    });
});
function removeProduct(productId) {
    const product = document.getElementById(`product${productId}`);
    if (product) {
        product.style.display = "none";
    }
}

