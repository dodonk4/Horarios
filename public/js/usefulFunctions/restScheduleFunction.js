const restScheduleFunction = (schedule1, schedule2) => {
        
    const [hours1, minutes1] = schedule1.split(':').map(Number);
    const [hours2, minutes2] = schedule2.split(':').map(Number);
    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;
    let minutesResult;
    if (totalMinutes2 === 0) {
        minutesResult = 1440 - totalMinutes1;//Debido a que 00:00 es igual a 24 horas, lo que es 1440 minutos
    }else{
        minutesResult = totalMinutes2 - totalMinutes1;
    }

        const finalHours = Math.floor(minutesResult / 60);
        const finalMinutes = minutesResult % 60;

        const scheduleResult = `${finalHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`;
        const finalResult = Number(scheduleResult.replace(':', ''));

    

    return finalResult;
}