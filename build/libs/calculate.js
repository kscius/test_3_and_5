"use strict";
module.exports = (app) => {
    app.get('/', function (req, res) {
        let Output = '';
        const Print = {
            3: "Music",
            5: "TI",
            15: "Musical"
        };
        for (let index = 1; index <= 100; index++) {
            const Music = index % 3 * -1 + 3;
            const TI = index % 5 + 5;
            const Musical = Music * TI;
            const Result = Print[Musical] || Print[Music] || Print[TI] || index;
            console.log(Result);
            Output += Result + "<br>";
        }
        res.send(Output);
    });
};
