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

    if (refInput.value !== "" && refTextArea.value !== "") {

  
    evt.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
    console.log(populateValue);
    } else { 
            alert("Заповніть поля форми")
        }

}
refForm.addEventListener('input', throttle(handleValue, 500))

refForm.addEventListener("input", handleValue)


function handleValue(evt) {
    const formData = new FormData(refForm)
    formData.forEach((message, email) => {
        
            objectValueForm[email] = message
            localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm))
            responce = localStorage.getItem("feedback-form-state") ?? {};
            responce = JSON.parse(responce)
            objectValueForm = { ...responce }
       
     } )   
       
}

let populateValue = localStorage.getItem('feedback-form-state')
populateValue = JSON.parse(populateValue) ?? {}


Object.entries(populateValue).forEach(([email, message], idx, arr) => {

            refTextArea.value = populateValue.message??"";
            refInput.value = populateValue.email??'';
})













// document.querySelector('input').addEventListener(
//   'input',
//   _.debounce(() => {
//     console.log(
//       'Input event handler invocation after 300ms of inactivity past burst.',
//     );
//   }, 300),
// );


// import  throttle  from 'lodash.throttle'



// const refForm = document.querySelector('.feedback-form');
// const refTextArea = document.querySelector('textarea');
// const refInput = document.querySelector("input")
// const submitBTN = document.querySelector('button')
// let objectValueForm = {} ;
// let responce = {};


// refForm.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//     evt.preventDefault()

//     const formData = new FormData(refForm)
//     formData.forEach((message, email) => {
//         if (message !== "" && email!==undefined) {
//             objectValueForm[email] = message
//             localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm))
//             responce = localStorage.getItem("feedback-form-state") ?? {};
//             responce = JSON.parse(responce)
//             objectValueForm = { ...responce }
//         } else {
//             alert("заповніть будь ласка всі поля форми")
            
//         }
       
//     })
//    console.log(objectValueForm);
 
// }

  
// if (refTextArea.value && refInput.value) {

//     let storage = localStorage.getItem("feedback-form-state")
//     storage = JSON.parse(storage) ?? {}

//     Object.entries(storage).forEach(([email, value],idx,arr) => {
//         refTextArea.value = arr[1][idx];
//         refInput.value = arr[0][idx];    
//     })  
// }
   

// refForm.addEventListener('input', handleInput)

// function handleInput(evt) { 

// localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm.email[evt.target.value]))

// console.log(evt.target);
// }



// refTextArea.addEventListener('input', throttle(() => { }, 500))



// ==========================================================


// import  throttle  from 'lodash.throttle'



// const refForm = document.querySelector('.feedback-form');
// const refTextArea = document.querySelector('textarea');
// const refInput = document.querySelector("input")
// const submitBTN = document.querySelector('button')
// let objectValueForm = {} ;
// let responce = {};

// populateTextArea()
// refForm.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//     evt.preventDefault()

//     const formData = new FormData(refForm)
//     formData.forEach((message, email) => {
//         if (message !== "" && email!==undefined) {
//             objectValueForm[email] = message
//             localStorage.setItem("feedback-form-state", JSON.stringify(objectValueForm))
//             responce = localStorage.getItem("feedback-form-state") ?? {};
//             responce = JSON.parse(responce)
//             objectValueForm = { ...responce }
//             evt.currentTarget.reset()
//             localStorage.removeItem('feedback-form-state')
//             localStorage.removeItem('msg-textArea')
//             localStorage.removeItem('msg-input')
//         } else {
//             alert("заповніть будь ласка всі поля форми")
            
//         }
       
//     })
//    console.log(objectValueForm);
 
// }
// refTextArea.addEventListener('input', throttle(() => { }, 1500))

// refForm.addEventListener("input", handleValue)

// function handleValue(evt) { 
//     const msgTextArea = refTextArea.value
//     const msgInput = refInput.value
//     localStorage.setItem('msg-textArea', msgTextArea)
//     localStorage.setItem('msg-input', msgInput)
// }

// function populateTextArea() { 
//     const popuateTextareaValue = localStorage.getItem('msg-textArea')
//     const popuateInputValue = localStorage.getItem('msg-input')
//     refTextArea.value = popuateTextareaValue ?? "";
//     refInput.value = popuateInputValue ?? "";

// }


//   ======================================================
