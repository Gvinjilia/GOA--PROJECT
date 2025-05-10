let buttonsbyClassName = document.getElementsByClassName('btn1');
let form2 = document.querySelector('form');
let messageDiv = document.querySelector('.message');
let paragraphDiv = document.querySelector('.paragraphDiv')
let imageDiv = document.querySelector('.image-div');
let btn2 = document.querySelector('.btn2');

btn2.addEventListener('click',(e) => {
        e.preventDefault();

        let name = form2.firstName.value;
        let email = form2.email.value;
        let password = form2.password.value;
        let repeatedPassword = form2.repeatedPassword.value;

        if (!name || !email || !password || !repeatedPassword) {
            alert("fill all of the fields");
            let userInfo = prompt('Type "next" to continue');

            if (userInfo === 'next' || userInfo === 'NEXT') {
                alert('Continue editing and fill all of the fields correctly.');
            } else {
                alert('Type "next" correctly.');
            }
            return;
        }

        const passValidation = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const passValidationNUm = '1234567890';
        const passValidPunctuation = '!@#$%^&*()_+=/.,:;"*/-``';

        const pass = (password) => {
            let alphabet = false
            let numbers = false;
            let punctuation = false;

            for(let i = 0; i < password.length; i++){
                if(passValidation.includes(password[i])){
                    alphabet = true;
                }
                if(passValidationNUm.includes(password[i])){
                    numbers = true;
                }
                if(passValidPunctuation.includes(password[i])){
                    punctuation = true;
                }
            }
            return alphabet && numbers && punctuation;
        }

        const repeatedPass = (repeatedPassword,password) => {
            if(repeatedPassword === ''){
                alert('Repeated Password Field is empty');
                return false;
            }
            if(repeatedPassword !== password){
                alert('Your repeated password does not equal to the password you have entered earlier');
                return false;
            }
            return true;
        }

        if(!pass(password)){
            alert('Your Password Is not valid, it should contain alphabetical symbol, number and punctuation');
            return;
        }
        if(!repeatedPass(repeatedPassword,password)){
            return;
        };

        let message = document.createElement('p');
        let image = document.createElement('img');
        message.textContent = `${name} You Have registered successfully`;
        image.src = "Images/Certificates3.svg";
        image.className = 'img2';
        message.className = 'paragraph3'
        setTimeout(() => {
            paragraphDiv.appendChild(message);
            imageDiv.appendChild(image);
        }, 3000);

        setTimeout(() => {
            form2.reset();
        },3500)
});


const getOnOtherPage = () => {
    for (let btn of buttonsbyClassName) {
        btn.addEventListener('click',() => {
            window.location.href = './index3.html';
        });
    }
}

getOnOtherPage();