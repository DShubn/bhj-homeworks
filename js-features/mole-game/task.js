const deadCounter = document.getElementById('dead')
const lostCounter = document.getElementById('lost')

const ceils = document.querySelectorAll('.hole')
ceils.forEach((element) => {
    element.addEventListener('click', () => {
        let currentCeil = element;
        if (currentCeil.classList.contains('hole_has-mole')) {
            let content = parseInt(deadCounter.textContent)
            if(content === 9) {
                alert('Вы выйграли!')
                clearStatistic()
                return
            }
            content++

            deadCounter.textContent = content
        } else {
            let contenMiss = parseInt(lostCounter.textContent)
            if(contenMiss === 4) {
                alert('Вы проиграли')
                clearStatistic()
                return
            }
            contenMiss++
            lostCounter.textContent = contenMiss;
        }
    })
})

const clearStatistic = () => {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;

}

// for(let i = 1; i < 10; i++) {
//     const currentCeil = document.getElementById(`hole${i}`)
//     currentCeil.addEventListener('click', () => {
//         if (currentCeil.classList.contains('hole_has-mole')) {
//             let content = parseInt(deadCounter.textContent)
//             if(content === 9) {
//                 alert('Вы выйграли!')
//                 clearStatistic()
//                 return
                
//             }
//             content++
    
//             deadCounter.textContent = content
//         } else {
//             let contenMiss = parseInt(lostCounter.textContent)
//             if(contenMiss === 4) {
//                 alert('Вы проиграли')
//                 clearStatistic()
//                 return
//             }
//             contenMiss++
//             lostCounter.textContent = contenMiss;
//         }
//     })
// }