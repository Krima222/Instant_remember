import React from 'react';
import author from './Authorization.module.scss';

export function Authorization() {
    return (
        <>
            <div className={author.authorization}>
                <div className={author.authorization__main}>
                    <div className={author.authorization__logo}>
                    </div>
                    <div className={author.authorization__text}>
                        <span>Войти в Instante</span>
                    </div>
                    <div className={author.authorization__block}>
                        <input className={author.authorization__block_submit_one}_submit name="guruweba_example_text" type="text" placeholder='Почта' />
                        <input className={author.authorization__block_submit_two} name="guruweba_example_text" type="password" placeholder='Пароль' />
                    </div>
                    <div className={author.authorization__miss_password}>
                        <span>Забыл пароль</span>
                    </div>
                    <div>
                        <input className={author.authorization__button_sign_in} name="guruweba_example_button" type="button" value="Войти" />
                    </div>
                </div>
                <div className={author.authorization___footer}>
                    <div>
                        <input className={author.authorization__registration} name="guruweba_example_button" type="button" value="Зарегистрироваться" />
                    </div>
                    <div className={author.authorization__registration_text}>
                        <p>После регистрации вы получите</p>
                        <p>доступ ко всем возможостям</p>
                    </div>
                </div>
            </div>
        </>
    )
}