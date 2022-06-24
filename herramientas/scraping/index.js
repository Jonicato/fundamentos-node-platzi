const puppeteer = require('puppeteer');

(async () => {
    //Nuestro código
    console.log('Lanzamos navegador!');
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});

    /* Con esta linea de código abrimos una página del navegador */
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    /* Con esto nos traemos el h1 de la página a la que hemos entrado */
    let titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1);

    console.log('Cerramos navegador...');
    browser.close();
    console.log('Navegador cerrado');
})();