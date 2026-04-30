const text = ["Aspiring Full Stack Developer", "Web Designer", "AI Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const typingElement = document.querySelector(".typing");

    if (i < text.length) {

        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        typingElement.textContent = currentText;

        if (j == text[i].length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == text.length) i = 0;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();