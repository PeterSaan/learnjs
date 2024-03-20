import axios from "axios";
import fs from "node:fs";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

let res = await axios.post('https://www.neti.ee');
console.log(res.data);
