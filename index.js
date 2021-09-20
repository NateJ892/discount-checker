const cheerio = require('cheerio');
const axios = require('axios');

axios.get("https://www.amazon.ca/Seagate-Barracuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q/ref=sr_1_3?crid=2NGHN1TDWX917&dchild=1&keywords=2tb%2Bbarracuda%2Bhdd&qid=1632064406&sprefix=2tb%2Bbarra%2Caps%2C181&sr=8-3&th=1").then(
    (response) => {
        let $ = cheerio.load(response.data);
        console.log($('#priceblock_ourprice').text());
});

