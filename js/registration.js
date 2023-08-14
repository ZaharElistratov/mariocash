const form = document.querySelector('.auth__form')
const loginElement = form.elements.login
const emailElement = form.elements.email
const passwordElement = form.elements.password
const faqElement = form.elements.faq

const validator = new JustValidate(form)

validator
    .addField(
        loginElement,
        [
            {
                rule: 'required',
                errorMessage: 'Заполните поле.'
            },
            {
                rule: 'minLength',
                value: 4,
                errorMessage: 'Логин должен быть больше 4 букв.'
            },
            {
                rule: 'customRegexp',
                value: '[A-Za-z]+',
                errorMessage: 'Логин должен состоять только из английских букв.'
            }
        ],
        {
            errorLabelCssClass: 'auth__error',
            errorLabelStyle: {}
        }
    )
    .addField(
        emailElement,
        [
            {
                rule: 'required',
                errorMessage: 'Заполните поле.'
            },
            {
                rule: 'email',
                errorMessage: 'Недопустимый формат почты.'
            }
        ],
        {
            errorLabelCssClass: 'auth__error',
            errorLabelStyle: {}
        }
    )
    .addField(
        passwordElement,
        [
            {
                rule: 'required',
                errorMessage: 'Заполните поле!'
            },
            {
                rule: 'customRegexp',
                value: '^[a-zA-Z0-9_.-]*$',
                errorMessage: 'Пароль должен состоять из англ. букв и цифр'
            },
            {
                rule: 'minLength',
                value: 6,
                errorMessage: 'Пароль должен быть больше 6 символов.'
            },
        ],
        {
            errorLabelCssClass: 'auth__error',
            errorLabelStyle: {}
        }
    )
    .addField(
        faqElement,
        [
            {
                rule: 'required',
                errorMessage: 'Примите правила использования.'
            }
        ],
        {
            errorFieldCssClass: 'field_error',
            errorLabelCssClass: 'auth__error',
            errorLabelStyle: {}
        }
    )
    .onSuccess(() => {
        const modal = document.querySelector('.modal-alert')

        modalOpen(modal)
    })
