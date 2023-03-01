const refForm = document.querySelector('.feedback-form');
const refTextArea = document.querySelector('textarea');
const refInput = document.querySelector("input")
const submitBTN = document.querySelector('button')
let objectValueForm = null;
let responce = null;
initForm()

refForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault()

    const formData = new FormData(refForm)
    formData.forEach((message, email) => {
        if (message !== "" && email!==undefined) {
            objectValueForm[email] = message
            localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm))
            responce = localStorage.getItem("feedback-form-state")
            responce = JSON.parse(responce)
            objectValueForm = { ...responce }
        } else {
            alert("заповніть будь ласка всі поля форми")
            
        }
  
    
   
    })
    console.log(objectValueForm);
}




function initForm() {
  let a = localStorage.getItem("feedback-form-state")
    a = JSON.parse(a)
    
      if (!a) { 
        return ;
    }
console.log(a);
console.log(responce);
  


  
    
refInput.value = objectValueForm.email??""
    refTextArea.textContent = objectValueForm.message

}



// function onFormSubmit(evt) {
//     

//     const validTextAteaVAlue = Boolean(refTextArea.value);
//     const validInputValue = Boolean(refInput.value)
//     //  
    
//     if ((evt.currentTarget === evt.target)=== validTextAteaVAlue && validInputValue) {

//                   
//     } else {

//         
//     }

   
// }

//









