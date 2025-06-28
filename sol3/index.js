const clock = document.getElementById('clock')
const message = document.getElementById('message')
setInterval(function () {
    let date = new Date();
    console.log(date.toLocaleDateString())
    clock.innerHTML  = date.toLocaleTimeString()
}, 1000)

let msg = "AMAN SHARMA"
message.innerHTML  = msg;







// const clock = document.getElementById('clock');

// function updateClock() {
//   const now = new Date();

//   // Format the time
//   const timeString = now.toLocaleTimeString();

//   // Optional: Format and log the date
//   const dateString = now.toLocaleDateString();
//   console.log(`Date: ${dateString}`);

//   // Update clock on screen
//   clock.innerHTML = timeString;
// }

// // Initial call
// updateClock();

// // Update every second
// setInterval(updateClock, 1000);
