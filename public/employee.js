document.addEventListener('DOMContentLoaded', () => {
    var modalStarter = document.querySelectorAll('.modal');
    M.Modal.init(modalStarter, {});

    const selection = document.querySelectorAll('select');
    M.FormSelect.init(selection, {});

    document.getElementById('submit').addEventListener('click', function () {
        var name = document.getElementById('icon_prefix').value
        document.getElementById('res').innerHTML = name
        var phone = document.getElementById('icon_telephone').value
        document.getElementById('res1').innerHTML = phone
        var email_id = document.getElementById('email').value
        document.getElementById('res2').innerHTML = email_id
        var skill = document.getElementById('icon_skill').value
        if (skill == 1) {
            document.getElementById('res3').innerHTML = "Singer"
        }
        if (skill == 2) {
            document.getElementById('res3').innerHTML = "Dancer"
        }
        if (skill == 3) {
            document.getElementById('res3').innerHTML = "Musician"
        }
        var skillrate = document.getElementById('test5').value
        document.getElementById('res4').innerHTML = skillrate
        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: "sql12.freesqldatabase.com",
            user: "sql12345821",
            password: "Please wait"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            document.getElementById('res5').innerHTML = "Connected!"
            
        });
    }, false);
})