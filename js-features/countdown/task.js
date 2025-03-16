
const timer = document.getElementById('timer');
let seconds = parseInt(timer.textContent);
console.log(seconds)
function countdown() {
    seconds--
    if(seconds < 0) {
        clearInterval(timeInterval)
        alert('«обама твою дочку ЕБУТ!»')
        return
    }
    timer.textContent = seconds
}

const timeInterval = setInterval(countdown, 1000)

// const timer = document.getelementById('timer')
// let sec = timer.textContent
// function countdown() {
//     sec--
//     if(sec < 0) {
//         clearInterval(timeInterval)
//         alert('Вы победили в конкурсе')
//     } else {
//         timer.textContent = sec;
//     }
// }
// const timeInterval = setInterval(countdown, 1000)
