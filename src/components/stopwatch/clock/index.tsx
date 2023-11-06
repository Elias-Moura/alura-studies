import style from './clock.module.scss';

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0}: Props) {
    const secondsInMinutes = 60;
    const minutes = String(Math.floor(time / secondsInMinutes));
    const seconds = String(time % secondsInMinutes);

    const [minutesTen, minutesUnit] = minutes.padStart(2, '0');
    const [secondsTen, secondsUnit] = seconds.padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{minutesTen}</span>
            <span className={style.clockNumber}>{minutesUnit}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondsTen}</span>
            <span className={style.clockNumber}>{secondsUnit}</span>
        </>
    )
}