'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());   // creates http server
const token = 'M92d-M4FC55PufZ8erQOdLUUI!hx?rBU2qprZH=TmDafn7Mz';

// custom modules:
const subtractHours = require('./utility');
const isWeekend = require('./utility');
const isAfterHours = require('./utility');
//

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

    // initialize office hours status value
    var isOfficeHours = "1";
    //

    // get current date/time:
    var dteNowAST = subtractHours(new Date(), 4);     // convert date to AST
    console.log(Date(dteNowAST));
    //

    // check for weekend:
    if (isWeekend(dteNowAST)) {
        isOfficeHours = "0";
    }
    //

    // check for after-hours:
    if (isAfterHours(dteNowAST)) {
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
app.listen(443, () => console.log('[ChatBot] Webhook is listening on port 443'));