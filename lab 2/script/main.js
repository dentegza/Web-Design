import Account from './accModel.js';
import OutputAccount from './accView.js';
import Controller from './controller.js';

let profile = new Account();
let outAcc = new OutputAccount();

let control = new Controller(outAcc, profile);
