//queryselector text input
//grab text value and place in text
//create a input checkbox and create an event listerner when box is checked
 //a line through
// create a h3 with innter text
//create button that when pressed
const section =  document.querySelector('section');
const addEventInput = document.querySelector('input[name="addEvent"]')
const submitEventInput = document.querySelector('input[type="submit"]')
section.addEventListener('click', function(e){
// let h3 = document.querySelector
console.log(e.target.tagName.parentElement);
 if(e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove()
 }
 if(e.target.tagName === 'INPUT'){
 e.target.parentElement.classList.toggle('strike')

 }

})
submitEventInput.addEventListener('click', function(e){
    e.preventDefault();
  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.classList.add('space')
  let words = document.createElement('h3')
  let button = document.createElement('button')
  button.classList.add('space')
  button.innerText= 'Remove To-Do'
  words.innerText = addEventInput.value
section.append(words)
words.appendChild(button)
words.prepend(checkbox)
addEventInput.value = ""
})
