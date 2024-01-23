let textArea = document.querySelector("#main-text");
textArea.addEventListener('input', autoResize, false);

const encryptedList = ["enter", "imes", "ai", "ober", "ufat"];
const normalList = ["e", "i", "a", "o", "u"];

const ciphersToEncrypt = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const ciphersToDecrypt = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function encryptText(text) {
    let convertedText = text;
    normalList.forEach(function (letter) {
        convertedText = convertedText.replaceAll(letter, ciphersToEncrypt[letter]);
    });
    return convertedText;
}

function decryptText(text) {
    let textToConvert = text;
    encryptedList.forEach(function (letter) {
        textToConvert = textToConvert.replaceAll(letter, ciphersToDecrypt[letter]);
    });
    return textToConvert;
}

function encrypt() {
    var textField = document.getElementById("main-text");
    var encryptBtn = document.querySelector("#crypt");

    encryptBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const encryptedText = encryptText(textField.value);

        var emptyField = document.querySelector(".right-side__without-return");
        emptyField.classList.add("show-none");

        var filledField = document.querySelector(".right-side__with-return");
        filledField.classList.remove("show-none");

        var paragraph = document.querySelector(".right-side__with-return p");

        var lowercaseText = encryptedText.toLowerCase();

        // Check for special characters
        function hasSpecialCharacter(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        // Logic to check for accents
        var withAccent = encryptedText;
        var withoutAccent = withAccent.normalize("NFD");

        if (
            encryptedText === lowercaseText &&
            encryptedText === withoutAccent &&
            !hasSpecialCharacter(encryptedText)
        ) {
            paragraph.textContent = encryptedText;
        } else {
            paragraph.textContent = "Somente letras minúsculas e sem acentos.";
        }
    });
}

encrypt();

function decrypt() {
    var textField = document.getElementById("main-text");
    var decryptBtn = document.querySelector("#descrypt");

    decryptBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const decryptedText = decryptText(textField.value);

        var emptyField = document.querySelector(".right-side__without-return");
        emptyField.classList.add("show-none");

        var filledField = document.querySelector(".right-side__with-return");
        filledField.classList.remove("show-none");

        var paragraph = document.querySelector(".right-side__with-return p");

        // Check for lowercase letters
        var lowercaseText = decryptedText.toLowerCase();

        // Check for special characters
        function hasSpecialCharacter(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        // Logic to check for accents
        var withAccent = decryptedText;
        var withoutAccent = withAccent.normalize("NFD");

        if (
            decryptedText === lowercaseText &&
            decryptedText === withoutAccent &&
            !hasSpecialCharacter(decryptedText)
        ) {
            paragraph.textContent = decryptedText;
        } else {
            paragraph.textContent = "Somente letras minúsculas e sem acentos.";
        }
    });
}

decrypt();
