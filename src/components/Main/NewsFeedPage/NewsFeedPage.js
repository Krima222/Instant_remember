import { GoalCard } from '../GoalCard/GoalCard'
import { feedData } from '../../../mockData/Feed'

import classes from './NewsFeedPage.module.scss'

const feedCards = feedData.map((item) => (
    <GoalCard
        id={item.id}
        name={item.name}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        time={item.time}
        progress={item.progress}
    />
))

export function NewsFeedPage() {
    
    return (
        <div className={classes.feed}>
            {feedCards}
        </div>
    )
}