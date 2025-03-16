
const clicker = document.getElementById('clicker__counter');
const imageCookie = document.getElementById('cookie');

imageCookie.onclick = function() {
    imageCookie.width = 400;
    let counterClicker = parseInt(clicker.textContent)
    counterClicker++
    clicker.textContent = counterClicker
    setTimeout(() => {
        imageCookie.width = 200;
    } ,100)
}