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
  '2025-12-25', // Christmas Day (2025)
  '2025-12-26', // Boxing Day (2025)
  '2026-01-01', // New Year's Day
  '2026-02-16', // Carnival Monday
  '2026-02-17', // Carnival Tuesday
  '2026-03-20', // Eid ul-Fitr
  '2026-03-30', // Spiritual Baptist Liberation Day
  '2026-04-03', // Good Friday
  '2026-04-06', // Easter Monday
  '2026-05-30', // Indian Arrival Day
  '2026-06-04', // Corpus Christi
  '2026-06-19', // Labour Day
  '2026-08-01', // African Emancipation Day
  '2026-08-31', // Independence Day
  '2026-09-24', // Republic Day
  '2026-11-09', // Divali (observed)
  '2026-12-25', // Christmas Day
  '2026-12-26', // Boxing Day
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