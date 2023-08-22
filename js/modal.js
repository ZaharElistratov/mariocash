const modalOpen = (modal) => {
    modal.classList.add('modal_active')
}

const modalClose = (modal) => {
    modal.classList.remove('modal_active')
}

const modalInitialization = (modalClass, modalOpenButtonClass) => {
    const modal = document.querySelector(modalClass)
    const modalInner = modal.querySelector('.modal__inner')
    const modalOpenButton = document.querySelector(modalOpenButtonClass)
    const modalCloseButton = modal.querySelector('.modal__close')

    modalOpenButton.addEventListener('click', () => {
        modalOpen(modal)
    });

    modal.addEventListener('click', (event) => {
        if (!modalInner.contains(event.target)) {
            modalClose(modal)
        }
    })

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', () => {
            modalClose(modal)
        });
    }
}