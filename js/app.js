const dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach(event => {
    const button = event.querySelector('.dropdown__head')
    button.addEventListener('click', () => {
        event.classList.toggle('dropdown_active')
    })
})