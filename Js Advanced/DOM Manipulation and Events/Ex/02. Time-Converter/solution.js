function attachEventsListeners() {

    let dayElements = document.getElementById('days');
    let hourElements = document.getElementById('hours');
    let minuteElements = document.getElementById('minutes');
    let secondElements = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => { convert(dayElements.value * 86400 )});
    document.getElementById('hoursBtn').addEventListener('click', () => { convert(hourElements.value * 3600 )});
    document.getElementById('minutesBtn').addEventListener('click', () => { convert(minuteElements.value * 60) });
    document.getElementById('secondsBtn').addEventListener('click', () => { convert(secondElements.value) });

    function convert(sec) {
        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60);
        let minute = sec / 60;

        dayElements.value = day;
        hourElements.value = hour;
        minuteElements.value = minute;
        secondElements.value = sec;

    }
}