import style from './list.module.scss';
import Item from './item/index';
import { ITask } from '../../types/tasks';

interface Props {
    tasks: ITask[],
    selectTask: (task: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return(
        <aside className={style.task__list}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tasks.map((item, index) => (
                    <Item 
                        selectTask={selectTask}
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