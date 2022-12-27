// Task_1

const button = document.querySelector('.btn');
const input = document.querySelector('.text');

button.addEventListener('click', () =>{
    input.value = button.innerText;
});

// Task_2

const valueChangeButton = document.querySelector('.change-value');
const inputLeft = document.querySelector('.left-input');
const inputRight = document.querySelector('.right-input');

valueChangeButton.addEventListener('click', () => {
    let temp = inputLeft.value;
    inputLeft.value = inputRight.value;
    inputRight.value = temp;
})

// Task_3

const inputArea = document.getElementById('text');

document.querySelector('.btn-off').addEventListener('click', () => {
    inputArea.disabled = true;
});
document.querySelector('.btn-on').addEventListener('click', () => {
    inputArea.disabled = false;
});

// Task_4

document.getElementById('btn').addEventListener('click', () => {
    alert(document.getElementById('message').value);
});

// Task_5

document.getElementById('button').addEventListener('click', () => {
    alert(document.getElementById('number').value**2);
})

