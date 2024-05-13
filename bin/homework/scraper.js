import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";

const cacheFolder = '../../cache';

// if(!fs.existsSync(cacheFolder)){
//     fs.mkdirSync(cacheFolder);
// }
// for(let i = 1; ) {

// fs.writeFileSync(`autodiiler.html`, res.data);
const $ = cheerio.load(fs.readFileSync(`autodiiler.html`));

let carData = $('div#__nuxt>div.h-full>div.container.pt-4>div.mx-0>div.flex>div.relative>div[data-v-5f27db5d]:nth(1)>div[data-v-5f27db5d]');

console.log(carData.html());
// }
