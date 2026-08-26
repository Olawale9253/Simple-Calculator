const display = document.getElementById("display");

function updateDisplaySize() {
    const value = display.value;

    if (!value || value === "Syntax Error") {
        display.style.fontSize = "4rem";
        return;
    }

    if (value.length > 12) {
        display.style.fontSize = "2.2rem";
    } else if (value.length > 8) {
        display.style.fontSize = "2.8rem";
    } else {
        display.style.fontSize = "4rem";
    }
}

function appendToDisplay(input) {
    if (display.value === "Syntax Error") {
        display.value = "";
    }

    display.value += input;
    updateDisplaySize();
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
    display.value = "";
    updateDisplaySize();
}

function calculateResult() {
    try {
        const expression = display.value;

        if (!expression) {
            return;
        }

        const result = Function(`"use strict"; return (${expression});`)();
        display.value = result;
    } catch (error) {
        display.value = "Syntax Error";
    }

    updateDisplaySize();
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
    updateDisplaySize();
}

function toggleSign() {
    if (!display.value || display.value === "Syntax Error") {
        return;
    }

    display.value = display.value.startsWith('-')
        ? display.value.slice(1)
        : '-' + display.value;

    updateDisplaySize();
}

updateDisplaySize();

