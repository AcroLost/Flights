export const dateDefinition = (prop, date, places) => {

    const newDate = new Date(date),
        dd = newDate.getDate(),
        mm = newDate.getMonth(),
        yyyy = newDate.getFullYear().toString(),
        hours = ('0' + newDate.getHours()).slice(-2),
        minutes = ('0' + newDate.getMinutes()).slice(-2),
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (prop === 'month') {
        return `${dd} ${months[mm].substr(0, 3)}, ${yyyy}`

    } else if (prop === 'fullMonth') {
        return `${places[1].IataCode} – ${dd} ${months[mm]}, ${yyyy} – ${hours}:${minutes}`

    } else if (prop === 'departure') {
        return `${hours}:${minutes}`

    } else if (prop === 'arrival') {
        newDate.setMilliseconds(10 * 60 * 60 * 1000);
        return `${('0' + newDate.getHours()).slice(-2)}:${minutes}`
    }
}