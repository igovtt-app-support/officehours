function subtractHours(date, hours) {
    date.setHours(date.getHours() - hours);
    return date;
}


function isWeekend() {
    // isWeekend if Saturday (6) or Sunday (0)
    var date = new Date();
    var intDayOfWeek = date.getDay();
    console.log('Day:');
    console.log(intDayOfWeek);
    return (intDayOfWeek === 6) || (intDayOfWeek === 0);
}


function isAfterHours() {
    // isAfterHours if Hour < 8 or Hour >= 16
    var date = new Date();
    var intHour = date.getHours();
    console.log('Hour:');
    console.log(intHour);
    return ((intHour < 8) || (intHour >= 16));
}





// module.exports = isWeekend;
// module.exports = isAfterHours;

