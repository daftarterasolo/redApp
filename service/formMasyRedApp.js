//import { createFormPabrik } from './formPabrik.js';
import { listOfUttpMasyRedApp } from '../util/utilFunc.js';


async function test() {
    let x = await listOfUttpMasyRedApp();
    console.log(x);

}

test();
 
/*export class createFormMasyRedApp extends createFormPabrik {

}*/
