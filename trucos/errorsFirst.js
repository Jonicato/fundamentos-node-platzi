function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(error) {
            callback(error);
        }
    }, 1000);
}

asincrona(function(err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        //throw err; NO FUNCIONA EN ASINCRONISMO
        return false;
    }

    console.log('Todo ha ido bien, mi data es ', dato);
});