const tabButtons = document.querySelectorAll('.tabs__button')
const tabs = document.querySelectorAll('.tabs__table')

tabButtons.forEach(item => {
    item.addEventListener('click', () => {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        if (!currentBtn.classList.contains('tabs__button_active')) {
            tabButtons.forEach(item => {
                item.classList.remove('tabs__button_active')
            })

            tabs.forEach(item => {
                item.classList.remove('tabs__table_active')
            })

            currentBtn.classList.add('tabs__button_active')
            currentTab.classList.add('tabs__table_active')
        }
    })
})

modalInitialization('.modal-exchange', '.dashboard__button_exchange')
modalInitialization('.modal-output', '.dashboard__button_output')
modalInitialization('.modal-recharge', '.dashboard__button_recharge')
modalInitialization('.modal-recharge', '.header__button_recharge')
