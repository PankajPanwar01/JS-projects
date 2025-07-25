// generate random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId

const startChanagingColor = function(){

    if(!intervalId){
        intervalId = setInterval(changeByColor, 1000);
    }

    function changeByColor() {
        document.body.style.backgroundColor = randomColor();
    }
   
}



const stopChanagingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChanagingColor)
document.querySelector('#stop').addEventListener('click', stopChanagingColor)