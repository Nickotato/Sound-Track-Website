let lastHeading = document.getElementById('headLast');
let lastDesc = document.getElementById('descLast')
let lastButton = document.getElementById('changeLast');

let moodText = document.getElementById('moodText');
let moodButton = document.getElementById('moodButton')

lastButton.addEventListener("click", () => {
    if (lastHeading.textContent === text[1].name1) {
        lastHeading.textContent = text[1].name2;
        lastDesc.innerHTML = text[1].desc2;
    } else {
        lastHeading.textContent = text[1].name1;
        lastDesc.innerHTML = text[1].desc1;
    }
})

moodButton.addEventListener("click", () => {
    if (moodText.textContent === text[0][0]) {
        moodText.textContent = text[0][1];
    } else {
        moodText.textContent = text[0][0]
    }
})