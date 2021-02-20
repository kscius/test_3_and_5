"use strict";
const Print = {
    3: "Music",
    5: "TI",
    15: "Musical"
};
const calculate = {
    execute: function () {
        let Output = '';
        [...Array(100)].map((_, index) => {
            Output += this.validateNumber(index) + "<br>";
        });
        return Output;
    },
    validateNumber: function (_number) {
        const Music = _number % 3 * -1 + 3;
        const TI = _number % 5 + 5;
        const Musical = Music * TI;
        const Result = Print[Musical] || Print[Music] || Print[TI] || _number;
        console.log(Result);
        return Result;
    }
};
module.exports = calculate;
