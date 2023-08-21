const modalOpen = (modal) => {
    modal.classList.add('modal_active')
}

const modalClose = (modal) => {
    modal.classList.remove('modal_active')
}

const modalInitialization = (modalClass, modalOpenButtonClass) => {
    const modal = document.querySelector(modalClass)
    const modalInner = modal.querySelector('.modal__inner')
    const modalOpenButtons = document.querySelectorAll(modalOpenButtonClass)
    const modalCloseButton = modal.querySelector('.modal__close')

    modalOpenButtons.forEach((modalOpenButton) => {
        modalOpenButton.addEventListener('click', () => {
            modalOpen(modal)
        });
    })

    modal.addEventListener('mousedown', (event) => {
        if (! modalInner.contains(event.target)) {
            modalClose(modal)
        }
    })

    modalCloseButton.addEventListener('click', () => {
        modalClose(modal)
    });
}