"use strict";

import ApiError from "../../util/apiError";


let FizzBuzzControllerInstance, {NODE_ENV} = process.env,
nodeEnv = NODE_ENV || "staging";

class FizzBuzzController {

    constructor() {}

    showFizzBuzzPattern(req, res) {
        let numCount = Number(req.params.count) || 100;
        let i = 1;
        let store = new Array();
        if(numCount) {
            while(i <= numCount)  {
                store.push(i % 15 === 0 ? `FizzBuzz` : (i % 5 === 0 ? `Buzz` : (i % 3 === 0 ? `Fizz` : `${i}`)))
                i++;
            } 
        }

        return res.json({ status: 200, message: `Fizz Buzz Op Done`, 
            data: store })
    }
}

export function getFizzBuzzControllerInstance() {
    FizzBuzzControllerInstance = FizzBuzzControllerInstance || new FizzBuzzController();
    return FizzBuzzControllerInstance;
}