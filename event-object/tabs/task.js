const tabWrappers = document.querySelectorAll('.tabs')
tabWrappers.forEach((tabElement) => {
    const tabs = tabElement.querySelectorAll('.tab');
    const tabsContent = tabElement.querySelectorAll('.tab__content');
    const activeClassTabs = 'tab_active';
    const activeClassTabsContent = 'tab__content_active'
    tabs.forEach((element, index) => {
    element.addEventListener('click', () => {
        removeActiveClass()
        element.classList.add(activeClassTabs);
        tabsContent[index].classList.add(activeClassTabsContent)
    })
})

const removeActiveClass = () => {
    tabs.forEach((_, index) => {
        tabs[index].classList.remove(activeClassTabs);
        tabsContent[index].classList.remove(activeClassTabsContent);
        
    })
}
})