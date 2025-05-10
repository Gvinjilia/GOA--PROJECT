let btn = document.querySelector('.btn3');
    btn.addEventListener("click", () => {
    window.scrollTo({ 
        top: 800, 
        behavior: "smooth" 
    });
});

let buttonsbyClassName = document.getElementsByClassName('btn1');


let form1 = document.querySelector('form');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = form1.email.value;
    
    let name = form1.firstName.value;

    let question = form1.question.value;

    let phoneNumber = form1.number.value;


    if(!email.includes('@') || email.length >= 25){
        alert(`${name} , Your Email Should Contain 25 symbols`);
    }
    if(email === '' || name === '' || question === ''){
        alert(`${name} Please Fill All Of The Fields`);
    }
    if(phoneNumber.length <= 9){
        alert(`${name} your phone number is too short it should have at least 9 symbols in it`);
    }
    if(!question.includes('?')){
        alert(`${name} your question is not really a question type ? to let us know that it is really a question`)
    }
    else{
        alert(`${name} We have recieved Your question`)
    }
    form1.reset();
});


const getOnOtherPage = () => {
    for (let btn of buttonsbyClassName) {
        btn.addEventListener('click',() => {
            window.location.href = './index3.html';
        });
    }
}

getOnOtherPage();