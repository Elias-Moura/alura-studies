import React from "react";
import style from './list.module.scss';
import Item from './item/index';

function List() {
    const tasks = [
        {task: 'React', time: '02:00:00'},
        {task:'JavaScript', time: '01:00:00'},
        {task:'TypeScript', time: '03:00:00'}
    ]
    return(
        <aside className={style.task__list}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                        )
                    )
                }
            </ul>
        </aside>
    )
}

export default List;