function KalendaeSelectFormat(value, format) {
    if (format == 'MM/DD/YYYY')
        return value;
    else {
        var splitedValue = value.split('/');
        return splitedValue[1] + '/' + splitedValue[0] + '/' + splitedValue[2];
    }
}

function CalculateDuration(date, date1) {
    var hour = 1000 * 60 * 60;
    var hours = Math.round(((date1.getTime() - date.getTime()) / hour) * 100) / 100;
    return hours;
}