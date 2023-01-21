const forms = document.querySelector('form')
const textInput = document.querySelector('input[name="brand"]')
const colorInput = document.querySelector('input[name="color"]')
const sizeInput = document.querySelector('input[name="size"]')
const section = document.querySelector('section')

//create an event lsitener that when submited
forms.addEventListener("submit", function(evt){
    evt.preventDefault()
    console.log(textInput.value, colorInput.value, sizeInput.value);
    let newList = document.createElement('h2');
    newList.innerText = textInput.value
    newList.style.color = colorInput.value;
    newList.style.fontSize = sizeInput.value +"px"
    section.append(newList)
})

function makebody(text, color, size){
    newList.innerText = text
    newList.style.color = color
    newList.style.fontSize = size
}

//add a prevent default listeners
// create and element text ul li
// li should match the innertext
// should match the color range
// add font style from the input
