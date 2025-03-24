const rotatorCases = document.querySelectorAll('.rotator__case')
let currentIndex = 0;

function replacingText() {
    rotatorCases[currentIndex].classList.remove('rotator__case_active')
    currentIndex++
    if(currentIndex >= rotatorCases.length) {
        currentIndex = 0;
    }
    rotatorCases[currentIndex].classList.add('rotator__case_active')
}
setInterval(replacingText, 1000)