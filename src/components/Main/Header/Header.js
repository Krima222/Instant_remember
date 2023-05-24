import classes from './Header.module.scss'
import mainLogo from './photo_2023-03-30_15-49-49-transformed 1.png'
import photoGur from './Ellipse 2.png'
import photoLine from "./Line 1.png"
export function Header() {
    return (
        <>
            <div className={classes.header}>
                    <img src={photoGur} className={classes.header__logo}/>
                    <span className={classes.header__name_user}>Гуревнин Дмитрий</span>
                    <div className={classes.header__search}>
                        <div className={classes.header__divLogo}></div>
                        <form action="" method="get" className={classes.header__searchLine}>
                            <input className={classes.header__input} name="s" placeholder="Поиск" type="search">
                            </input>
                        </form>
                    </div>
                    <span className={classes.header__popular}>Популярное</span>
                    <img src={photoLine} className={classes.header__line}/>
                    <span className={classes.header__for_you}>Для Вас</span>
                    <img src={mainLogo} className={classes.header__mail_logo}/>
            </div>
        </>
    )
}