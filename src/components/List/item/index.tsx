import { ITask } from '../../../types/tasks';
import style from '../list.module.scss';

interface Props extends ITask {
    selectTask: (task: ITask) => void
}

export default function Item(
    {
        task,
        time,
        isSelected,
        isCompleted,
        id,
        selectTask
    }: Props){
    return (
    <li 
        className={`${style.item} ${isSelected ? style.itemSelected : ''}`} 
        onClick={() => selectTask(
            {
                task,
                time,
                isSelected,
                isCompleted,
                id
            }
        )
        }>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}