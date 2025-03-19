const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach((dropdown) => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item')
    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    })

    dropdownItems.forEach((item) => {
        item.addEventListener('click', (pressing) => {
            pressing.preventDefault()

            const textLink = item.querySelector('.dropdown__link').textContent;
            dropdownValue.textContent = textLink
            dropdownList.classList.remove('dropdown__list_active') 
        })
    })
})
