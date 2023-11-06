import { timeToSeconds } from "../../common/utils/time";
import Button from "../Button";
import Clock from "./clock";
import style from './stopwatch.module.scss'
import { ITask } from '../../types/tasks'
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined
    finishTask: () => void
}

export default function StopWatch({ selected, finishTask } : Props){
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    function timer(time_: number = 0) {
        const oneSecondInMilisecond = 1000;
        setTimeout(() => {
            if(time_ > 0) {
                setTime(time_ - 1);
                return timer(time_ - 1);
            }
            finishTask();
        }, oneSecondInMilisecond);
    }
    return (
    <div className={style.stop__watch}>
        <h2 className={style.title}>Escolha um card e inicie o cronômetro</h2>
        <div className={style.clock__wrapper}>
            <Clock time={time} />
        </div>
        <Button onClick={ () => timer(time)}>
            Iniciar
        </Button>
    </div>
    )
}