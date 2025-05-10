let form3 = document.querySelector('form');
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = form3.email.value;

    if(!email.includes('@') || email.length >= 25){
        alert(`Your Email Should Contain 25 or less symbols`);
    }else{
        alert('We Will Contact You As Soon As Possible')
    }

    form3.reset();
});

let buttonsbyClassName = document.getElementsByClassName('btn1');
const getOnOtherPage = () => {
    for (let btn of buttonsbyClassName) {
        btn.addEventListener('click',() => {
            window.location.href = './index3.html';
        });
    }
}

getOnOtherPage();