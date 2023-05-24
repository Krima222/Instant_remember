import React from 'react';

import classes from './GoalCard.module.scss'
import five from './icon/high-five.png'
import comment from './icon/chat.png'

export function GoalCard({id, name, title, description, imageURL, time, progress}) {
    return (
        <div className={classes.main}> 
            <div className={classes.main__profile}>
                <img src={imageURL} alt='photoprofile'/>
            </div>
            <div className={classes.main__name}>
                {name}
            </div>
            <div className={classes.main__goal}>
            </div>
            <div className={classes.main__goaltext}>
                {title}
            </div>
            <div className={classes.main__time}>
                {time}
            </div>
            <div className={classes.main__text}>
                {description}
            </div>
            <div className={classes.main__percent}>
                {progress}
            </div>
            <div className={classes.main__progressbar}>
            </div>
            <div className={classes.main__progress}>
            </div>
            <div className={classes.main__like}>
                <img src={five} alt='five' className={classes.main__icon}/>
            </div>
            
            <div className={classes.main__numberlike}>
                1К
            </div>
            <div className={classes.main__comment}>
                <img src={comment} alt='comment' className={classes.main__commenticon}/>
            </div>
        </div>
    )
}