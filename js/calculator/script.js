const operators = document.getElementsByClassName('operator');
const adads = document.getElementsByClassName('adad');
const clear = document.querySelector('.clean');
const eq = document.querySelector('.eq');
const input = document.querySelector('.input');
let numbers = [];
let ops = [];

// Event listener for numbers
for (let i = 0; i < adads.length; i++) {
    adads[i].addEventListener('click', function () {
        input.value += adads[i].value;
    });
}

// Event listener for operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        input.value += operators[i].value;
    });
}

// Clear input field
clear.addEventListener('click', function () {
    input.value = '';
});

// Evaluate expression
eq.addEventListener('click', function () {
    const my_input = input.value;
    let my_list = [];
    
    for (let i = 0; i < my_input.length; i++) {
        my_list.push(my_input[i]);
    }

    if (my_list.includes('*')) {
        const my_splits = my_input.split('*');
        const total = Number(my_splits[0]) * Number(my_splits[1]);
        console.log(total);
    } else if (my_list.includes('-')) {
        const my_splits = my_input.split('-');
        const total = Number(my_splits[0]) - Number(my_splits[1]);
        console.log(total);
    } else if (my_list.includes('+')) {
        const my_splits = my_input.split('+');
        const total = Number(my_splits[0]) + Number(my_splits[1]);
        console.log(total);
    }
});

