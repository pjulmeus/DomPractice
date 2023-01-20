//First define the  all the span

const allSpan = document.getElementsByTagName('span')

//Iterate throught the span



//create and random color system
//math floor + random * 255
// create a rgb with each
function randomRGB(){
    let r =  Math.floor(Math.random() * 255);
   let g =  Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
   return `rgb(${r}, ${g}, ${b})`
}


setInterval(() => {
for (let span of allSpan){
    span.style.color = randomRGB()
  }
}, 500);
