// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020 
// This file contains the JS functions for index.html

function hoursWorked() {
 let hoursWorked = parseInt(document.getElementById('hours-worked').value);
  let hourlyRate = parseInt(document.getElementById('hourly-rate').value);
  const TAX = 20.05;

    // process
    let gross = hoursWorked * hourlyRate;
    let govPay = gross * TAX / 100;
  let net = gross - govPay;
  
  // output
  document.getElementById('gross-pay').innerHTML = "Your Gross Pay is " + gross.toFixed(2) + "$";
  document.getElementById('net-pay').innerHTML = "Your Net Pay is " + net.toFixed(2) + "$";
  document.getElementById('gov-pay').innerHTML = "The government takes:  " + govPay.toFixed(2) + "$";
}