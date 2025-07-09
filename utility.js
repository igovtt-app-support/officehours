function subtractHours(date, hours) {
    date.setHours(new Date(date).getHours() - hours);
    return date;
}


function isWeekend(date) {
    // isWeekend if Saturday (6) or Sunday (0)
    var intDayOfWeek = new Date(date).getDay();
    return (intDayOfWeek === 6) || (intDayOfWeek === 0);
}


function isAfterHours(date) {
    // isAfterHours if Hour < 8 or Hour >= 16
    var intHour = new Date(date).getHours();
    return (intHour < 8) || (intHour >= 16);
}






module.exports = subtractHours;
module.exports = isWeekend;
module.exports = isAfterHours;

