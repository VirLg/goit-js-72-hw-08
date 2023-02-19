const refForm = document.querySelector('.feedback-form');
const refTextArea = document.querySelector('textarea');
const refInput = document.querySelector("input")
const objectValueForm = {}
refForm.addEventListener('submit', onFormSubmit);

// console.log(refTextArea);
initForm()
function onFormSubmit(evt) { 
    evt.preventDefault()
const formData = new FormData(refForm)

    formData.forEach((message,email)=>console.log(message,email));

}

refForm.addEventListener('input', onChangeValueForm);

function onChangeValueForm(evt){

    objectValueForm[evt.target.name] = evt.target.value;

 return   localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm));
}

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





