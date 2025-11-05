'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());   // creates http server
const token = 'M92d-M4FC55PufZ8erQOdLUUI!hx?rBU2qprZH=TmDafn7Mz';

// custom modules:
const { isWeekend, isAfterHours, isPublicHoliday } = require('./utility');
//

process.env.TZ = 'Etc/GMT';   // set default node.js timezone to UTC+0

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

    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401); // if not, return unauthorized error
    }
    //

    const date = new Date();
    console.log(`Date (UTC): ${date.toString()}`);

    date.setHours(date.getHours() - 4);
    console.log(`Date (AST): ${date.toString()}`);


    // initialize office hours status value
    var isOfficeHours = "1";
    //


    // check for weekend:
    if (isWeekend(date)) {
        isOfficeHours = "0";
    }
    //


    // check for after-hours:
    if (isAfterHours(date)) {
        isOfficeHours = "0";
    }
    //


    // check for holiday:
    if (isPublicHoliday(date)) {
        isOfficeHours = "0";
    }
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
app.listen(3000, () => console.log('[ChatBot] Webhook is listening on port 3000'));