const CorrectPins = {
    "0001": "index.html",
    "1317": "GuideSosmed.html"
};

function AppendNumber(number) {
    const PinInput = document.getElementById('PinInput');
    if (PinInput.value.length < 4) {
        PinInput.value += number;
    }
}

function DeleteNumber() {
    const PinInput = document.getElementById('PinInput');
    PinInput.value = PinInput.value.slice(0, -1);
}

function CheckPin() {
    const PinInput = document.getElementById('PinInput').value;
    const ErrorMessage = document.getElementById('ErrorMessage');
    console.log('Entered PIN:', PinInput);
    
    if (CorrectPins[PinInput]) {
        console.log('Redirecting to:', CorrectPins[PinInput]);
        window.location.href = CorrectPins[PinInput];
    } else {
        ErrorMessage.classList.remove('Hidden');
        setTimeout(() => {
            ErrorMessage.classList.add('Hidden');
        }, 2000);
    }
}