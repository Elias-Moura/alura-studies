import style from './list.module.scss';
import Item from './item/index';
import { ITask } from '../../types/tasks';

function List({ tasks }: { tasks: Array<ITask>}) {
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