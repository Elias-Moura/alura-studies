import { ITask } from '../../../types/tasks';
import style from '../list.module.scss';

export default function Item({task, time, isSelected ,isCompleted, id}: ITask){
    console.log({task, time, isSelected ,isCompleted, id});
    return (
    <li className={style.item}>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}