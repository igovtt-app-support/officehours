'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());   // creates http server
const token = 'M92d-M4FC55PufZ8erQOdLUUI!hx?rBU2qprZH=TmDafn7Mz';

// webhook check:
app.get('/', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401); // if not, return unauthorized error
    }

    // return challenge:
    return res.end(req.query.challenge);
});
//

// webhook endpoint:
app.post('/', (req, res) => {
    
    // custom modules:
    //const isWeekend = require('./utility');
    //const isAfterHours = require('./utility');
    //

    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401); // if not, return unauthorized error
    }

    // check for favicon
    if (req.url?.endsWith("favicon.ico")) {
        return res.sendStatus(404);
    }

    // initialize office hours status value
    var isOfficeHours = "1";
    //

    // check for weekend:
    // if (isWeekend()) {
    //    isOfficeHours = "0";
    // }

    // isWeekend if Saturday (6) or Sunday (0)
    var dateDOW = new Date();
    var intDayOfWeek = dateDOW.getDay();
    console.log('Day:');
    console.log(intDayOfWeek);
    if ((intDayOfWeek === 6) || (intDayOfWeek === 0)) {
        isOfficeHours = "0";
    }

    //

    // check for after-hours:
    // if (isAfterHours()) {
    //    isOfficeHours = "0";
    // }

    // isAfterHours if Hour < 8 or Hour >= 16
    var dateAH = new Date();
    var intHour = dateAH.getHours();
    console.log('Hour:');
    console.log(intHour);
    if ((intHour < 8) || (intHour >= 16)) {
        isOfficeHours = "0";
    }
    
    //

    // check for holiday:
    //

    // return response
    const data = {
        attributes: {
            flag: `${isOfficeHours}`
        }
    };

    res.json(data);
});
//

// last line of code:
app.listen(80, () => console.log('[ChatBot] Webhook is listening on port 80'));