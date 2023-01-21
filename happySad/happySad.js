//query selector h1
let h1 = document.querySelector('h1')
//create an element
setInterval(() => {
    if(h1.classList.contains('big')){
        h1.innerText = 'SAD AF'
    } else{
        h1.innerText = 'Happy ASF'
    }
    h1.classList.toggle('big')
    h1.classList.toggle('small')
}, 1000);

//create 2 classes and toggle through it
//toggle through 2 classes
