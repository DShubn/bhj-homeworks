const reveals = document.querySelectorAll('.reveal')
window.addEventListener('scroll', () => {
    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealsTop = reveals[i].getBoundingClientRect().top
        let revealsVisible = 300;

        if(revealsTop < windowHeight - revealsVisible) {
            reveals[i].classList.add('reveal_active')
        } else {
            reveals[i].classList.remove('reveal_active')
        }
    }

})
