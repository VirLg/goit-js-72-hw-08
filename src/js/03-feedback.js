const refForm = document.querySelector('.feedback-form');
const refTextArea = document.querySelector('textarea');
const refInput = document.querySelector("input")
const submitBTN = document.querySelector('button')
let objectValueForm = {}


refForm.addEventListener('submit', onFormSubmit);


initForm()

function onFormSubmit(evt) {
    evt.preventDefault()

    const validTextAteaVAlue = Boolean(refTextArea.value);
    const validInputValue = Boolean(refInput.value)
    
    if ((evt.currentTarget === evt.target) === validTextAteaVAlue && validInputValue) {

        const formData = new FormData(refForm)

        formData.forEach((message, email) => {
           
            objectValueForm[email] = message;
            localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm))
        });
    } else {
        alert("заповніть будь ласка всі поля форми")
    }
}
// 
let resp = localStorage.getItem("feedback-form-state")
       response = JSON.parse(resp)
objectValueForm = {...response}          
console.log(objectValueForm);



function initForm() {
    let valueForm = localStorage.getItem("feedback-form-state")
   
    if (!valueForm) { 
        return console.log("localStorage empty");
    }

refTextArea.textContent = Object.values(objectValueForm)
    valueForm = JSON.parse(valueForm)
    
    refTextArea.textContent = valueForm.message
    refInput.value = valueForm.email

}




