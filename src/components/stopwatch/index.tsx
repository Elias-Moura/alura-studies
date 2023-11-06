import { timeToSeconds } from "../../common/utils/time";
import Button from "../Button";
import Clock from "./clock";
import style from './stopwatch.module.scss'

export default function StopWatch(){
    console.log('converion: ', timeToSeconds('01:01:01'))
    return (
        <div className={style.stop__watch}>
            <h2 className={style.title}>Escolha um card e inicie o cronômetro</h2>
            <div className={style.clock__wrapper}>
                <Clock />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}