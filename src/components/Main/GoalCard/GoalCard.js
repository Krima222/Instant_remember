import React from 'react';
import imageURL from './icon/foto3.png';
import classes from './GoalCard.module.scss'
import five from './icon/high-five.png'
import comment from './icon/chat.png'

export function GoalCard({id, name, title, description, time, progress}) {
    return (
        <div className={classes.main}>
            <div className={classes.main__top}>
                <div className={classes.main__profile}>
                    <img src={imageURL} alt='photoprofile'/>
                </div>
                <div className={classes.main__name}>
                    {name}
                </div>
                <div className={classes.main__goal}>
                    {title}
                </div>
                <div className={classes.main__time}>
                    Cегодня в 19:32
                </div>
            </div>
            <div className={classes.main__text}>
                Я еще никогда не был так воодушевлен проектом, мне хочется погрузиться в него с головой. Сегодня я начинаю свой путь стартапера, я в предвкушении чудесных эмоций и огромного количества неудач. Буду держать вас в курсе!
            </div>
            <div className={classes.main__footer}>
                <div className={classes.main__percent}>
                    {progress}
                </div>
                <div className={classes.main__progressbar}>
                    <div className={classes.main__progress}>
                    </div>
                </div>
                <div className={classes.main__like}>
                    <img src={five} alt='five' className={classes.main__icon}/>
                    <div className={classes.main__numberlike}>
                    1К
                    </div>
                </div>
                
                <div className={classes.main__comment}>
                    <img src={comment} alt='comment' className={classes.main__commenticon}/>
                </div>
            </div>
        </div>
    )
}