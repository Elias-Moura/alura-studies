export function timeToSeconds(time: string) {
    const [hour = '0', minutes = '0', seconds = '0'] = time.split(":");
    const oneHourInSeconds = 3600;
    const oneMinuteInSeconds = 60;

    const hoursInSeconds = Number(hour) * oneHourInSeconds;
    const minutesInSeconds = Number(minutes) * oneMinuteInSeconds;
    return hoursInSeconds + minutesInSeconds + Number(seconds);
}