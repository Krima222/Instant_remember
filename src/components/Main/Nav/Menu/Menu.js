import { MenuButton } from '../MenuButton/MenuButton';

import classes from './Menu.module.scss';

import post from '../img/post.png';
import purposes from '../img/purposes.png';
import settings from '../img/settings.png';
import tape from '../img/tape.png';
import user from '../img/user.png';

export function Menu() {
    return (
        <nav>
            <ul className={classes.menu__ul}>
                <li className={classes.menu__li}>
                    <MenuButton label="Профиль" icon={user} to="/" />
                </li>
                <li>
                    <MenuButton label="Лента" icon={tape} to="/news-feed-page" />
                </li>
                <li>
                    <MenuButton label="Цели" icon={purposes} to="/goals-page" />
                </li>
                <li>
                    <MenuButton label="Пост" icon={post} to="/post-page" />
                </li>
                <li>
                    <MenuButton label="Настройки" icon={settings} to="/settings-page" />
                </li>
            </ul>
        </nav>
    )
}