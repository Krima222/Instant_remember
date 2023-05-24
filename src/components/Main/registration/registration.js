import React from 'react';
import registr from './Registration.module.scss';

export function Registration() {
    return (
        <>
            <div className={registr.registration}>
                <div className={registr.registration__main}>
                    <div className={registr.registration__logo}>
                    </div>
                    <div className={registr.registration__text}>
                        <span>Регистрация в Instante</span>
                    </div>
                    <div className={registr.registration__block}>
                        <input className={registr.registration__block_submit_one}_submit name="guruweba_example_text" type="text" placeholder='Имя' />
                        <input className={registr.registration__block_submit_two} name="guruweba_example_text" type="text" placeholder='Фамилия' />
                        <input className={registr.registration__block_submit_three} name="guruweba_example_text" type="text" placeholder='Имя пользователя' />
                        <input className={registr.registration__block_submit_four} name="guruweba_example_text" type="text" placeholder='Почта' />
                        <input className={registr.registration__block_submit_thive} name="guruweba_example_text" type="password" placeholder='Пароль' />
                        <input className={registr.registration__block_submit_six} name="guruweba_example_text" type="password" placeholder='Повторите пароль' />
                    </div>
                    <div>
                        <input className={registr.registration__registration} name="guruweba_example_button" type="button" value="Зарегистрироваться" />
                    </div>
                </div>
                <div className={registr.registration___footer}>
                    <div>
                        <input className={registr.registration__button_sign_in} name="guruweba_example_button" type="button" value="Войти" />
                    </div>
                    <div className={registr.registration__registration_text}>
                        <p>После входа вас перенесет на</p>
                        <p>страницу пользователя</p>
                    </div>
                </div>
            </div>
        </>
    )
}