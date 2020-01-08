"use strict";

import express from "express";
import {getFizzBuzzControllerInstance} from "./fizzbuzz.controller";

let router = express.Router(),
    showFizzBuzzRoute = router.route("/:count"),

    fizzBuzzControllerInstance = getFizzBuzzControllerInstance();

    showFizzBuzzRoute.get(fizzBuzzControllerInstance.showFizzBuzzPattern.bind(fizzBuzzControllerInstance));

export default router;