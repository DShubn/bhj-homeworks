const book = document.getElementById('book')
const sizeAll = document.querySelectorAll('.font-size')

sizeAll.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        sizeAll.forEach((item) => item.classList.remove('font-size_active'))
        const fontSize = element.dataset.size
        book.classList.remove('book_fs-small', 'book_fs-big')

        if(fontSize === 'small') {
            book.classList.add('book_fs-small');
        } else if(fontSize === 'big') {
            book.classList.add('book_fs-big')
        }
    })
})