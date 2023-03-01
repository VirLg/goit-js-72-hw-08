import  throttle  from 'lodash.throttle'



const refForm = document.querySelector('.feedback-form');
const refTextArea = document.querySelector('textarea');
const refInput = document.querySelector("input")
const submitBTN = document.querySelector('button')
let objectValueForm = {} ;
let responce = {};


refForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault()

    const formData = new FormData(refForm)
    formData.forEach((message, email) => {
        if (message !== "" && email!==undefined) {
            objectValueForm[email] = message
            localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm))
            responce = localStorage.getItem("feedback-form-state") ?? {};
            responce = JSON.parse(responce)
            objectValueForm = { ...responce }
        } else {
            alert("заповніть будь ласка всі поля форми")
            
        }
       
    })
   console.log(objectValueForm);
 
}

  
if (!refTextArea.value && !refInput.value) {

    let storage = localStorage.getItem("feedback-form-state")
    storage = JSON.parse(storage) ?? {}

    Object.entries(storage).forEach(([email, value],idx,arr) => {
        refTextArea.value = arr[1][idx];
        refInput.value = arr[0][idx];    
    })  
}
   



refTextArea.addEventListener('input', throttle(() => { }, 500))






// document.querySelector('input').addEventListener(
//   'input',
//   _.debounce(() => {
//     console.log(
//       'Input event handler invocation after 300ms of inactivity past burst.',
//     );
//   }, 300),
// );
