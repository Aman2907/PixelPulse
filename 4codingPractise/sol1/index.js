

// const buttons = document.querySelectorAll('.button'); 
// const body    = document.querySelector('body');

// buttons.forEach(function (button){
//     button.addEventListener('click', function(e){
//         if(e.target.id === 'box1'){
//             body.style.backgroundColor = 'aqua';
//         }
//          if(e.target.id === 'box2'){
//             body.style.backgroundColor = 'rgb(250, 10, 90)';
//         }
//          if(e.target.id === 'box3'){
//             body.style.backgroundColor = 'rgb(255, 153, 0)';
//         }
//     })
// })
// buttons.forEach(function(button) {
//   button.addEventListener('click', function(e) {
//     // Get the background color of the clicked button and apply it to the body
//     body.style.backgroundColor = getComputedStyle(e.target).backgroundColor;
//   });
// });


const buttons = document.querySelectorAll('.button');
console.log(buttons)
const body = document.querySelector('body');
const resetButton = document.getElementById('reset');
console.log(resetButton)

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'box1'){
      body.style.backgroundColor = 'aqua';
    }
    if(e.target.id === 'box2'){
      body.style.backgroundColor = ' rgb(250, 10, 90)';
    }
    if(e.target.id === 'box3'){
      body.style.backgroundColor = 'rgb(255, 153, 0)';
    }
  })
})

resetButton.addEventListener('click', function() {
  body.style.backgroundColor = '';
})


