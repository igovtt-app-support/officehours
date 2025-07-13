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


// List of public holidays in YYYY-MM-DD format
const publicHolidays = [
  '2025-01-01', // New Year's Day
  '2025-03-03', // Carnival Monday
  '2025-03-04', // Carnival Tuesday
  '2025-03-30', // Spiritual Baptist Liberation Day
  '2025-03-31', // Eid ul-Fitr
  '2025-04-18', // Good Friday
  '2025-04-21', // Easter Monday
  '2025-05-30', // Indian Arrival Day
  '2025-06-19', // Corpus Christi
  '2025-06-20', // Labour Day
  '2025-08-01', // African Emancipation Day
  '2025-09-01', // Independence Day (Observed)
  '2025-09-24', // Republic Day
  '2025-10-20', // Divali
  '2025-12-25', // Christmas Day
  '2025-12-26', // Boxing Day
];

function isPublicHoliday(date) {
  const dateString = date.toISOString().split('T')[0]; // Get YYYY-MM-DD
  return publicHolidays.includes(dateString);
}



// Export as an object:
module.exports = {
    isWeekend,
    isAfterHours,
    isPublicHoliday
}
//