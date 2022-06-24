const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash) {
    newPassword = hash;
    console.log(newPassword);

    bcrypt.compare(password, newPassword, function(err, res) {
        //console.log(err);
        console.log(res);
    })
});