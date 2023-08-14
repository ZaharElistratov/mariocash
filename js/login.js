const form = document.querySelector('.auth__form')
const loginElement = form.elements.login
const passwordElement = form.elements.password

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
                errorMessage: 'Логин должен состоять только из букв.'
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
                errorMessage: 'Заполните поле.'
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
    .onSuccess(() => {
        console.log('login')
    })
