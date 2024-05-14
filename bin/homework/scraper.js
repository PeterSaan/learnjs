
// The scraper scrapes autodiiler.ee for car offers. Filters: only cars, price up to 2500€, engine power from 100kW.
// The scraper automatically takes the amount of pages and scrapes all the offers from all the pages. Even if you change the query params.

import axios from "axios";
import * as cheerio from "cheerio";

const reqForPageCount = await axios.get('https://autodiiler.ee/et/vehicles?vt=1&map=2500&miep=100&c=1&s=price');
const $$ = cheerio.load(reqForPageCount.data);
let lookable = 'div#__nuxt>div.h-full>div.container.pt-4>div.mx-0>div.flex>div.relative';
let amountofPages = parseInt($$(`${lookable}>div.my-6>div>div.hidden>a:last`).html());
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

for(let i = 1; i <= amountofPages; i++) {
    let res = await axios.get(`https://autodiiler.ee/et/vehicles?vt=1&map=2500&miep=100&c=1&s=price&page=${i}`);

    let $ = cheerio.load(res.data);
    let amountOfOffers = $(`${lookable}>div[data-v-5f27db5d]:nth(1)>div`).contents().length;

    console.log(`Page ${i}`)
    for(let j = 0; j < amountOfOffers - 2; j++) {
        let ans = []
        let offerData = `${lookable}>div[data-v-5f27db5d]:nth(1)>div>div:nth(${j})>div.p-4`;
        let offerLink = 'https://autodiiler.ee' + $(`${offerData}>h2>a`).attr('href');
        let offerTitle = $(`${offerData}>h2>a`).text();
        let offerPrice = () => {
            if( $(`${offerData}>div.flex>div>div:first>span.!text-red-600`).html() ) {
                return $(`${offerData}>div.flex>div>div:first>span.!text-red-600`).text();
            } else {
                return $(`${offerData}>div.flex>div>div:first>span.text-slate-900`).text();
            }
        }
        let seller = $(`${offerData}>div.flex>div>div:nth(1)`).text();
        let where = $(`${offerData}>div.flex>div>div:nth(2)`).text();
        let vehicleSpecs = { 
            year: $(`${offerData}>div.grid>div:first>div`).text(),
            km: $(`${offerData}>div.grid>div:nth(1)>div`).text(),
            power: $(`${offerData}>div.grid>div:nth(2)>div`).text(),
            fuel: $(`${offerData}>div.grid>div:nth(3)>div`).text(),
            gear: $(`${offerData}>div.grid>div:last>div`).text(),
        };

        ans.push({
            offerLink,
            offerTitle,
            price: offerPrice(),
            seller,
            where,
            vehicleSpecs
        });
        ans.forEach(e => console.log(e));
    }
    console.log('\n')
    await sleep(1000);
}