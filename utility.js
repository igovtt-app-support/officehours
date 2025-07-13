function isWeekend(prmDate) {
    // isWeekend if Saturday (6) or Sunday (0)
    var date = new Date(prmDate);
    var intDayOfWeek = date.getDay();
    console.log(`Day (AST): ${intDayOfWeek}`);
    return (intDayOfWeek === 6) || (intDayOfWeek === 0);
}


function isAfterHours(prmDate) {
    // isAfterHours if Hour < 8 or Hour >= 16
    var date = new Date(prmDate);
    var intHour = date.getHours();
    console.log(`Hour (AST): ${intHour}`);
    return (intHour < 8) || (intHour >= 16);
}



// Export as an object:
module.exports = {
    isWeekend,
    isAfterHours
}
//