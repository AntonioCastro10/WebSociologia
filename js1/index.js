var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 100);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "20px solid white";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "Bienvenidos A Nuestra Página...";
        timer = 200;
    },
    value1: function() {
        texts = "Esperamos Que Te Guste...";
        timer = 100;
    },
    value2: function() {
        texts = "Disfruta De Tu Estancia...";
        timer = 100;
    },
    value3: function() {
        texts = "¡Gracias Por Visitarnos!";
        timer = 100;
    },
    value4: function() {
        texts = "El Tema Es...";
        timer = 150;
    },
    value5: function() {
        texts = "Gran Ducado De Luxemburgo";
        timer = 250;
    }
};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                setTimeout(up, 500);
                return;
            }
            setTimeout(type, 500);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}

var a = 1;
var b = 1;

function up() {
    sus = setInterval(startus, 5);

    function startus() {
        a += 0.00002;
        b += 0.00002;
        dialog.style.transform = "scale(" + a++ + "," + b++ + ")";
    }
    
    // Redirigir después de 10 segundos
    setTimeout(function() {
        window.location.href = "home.html";
    }, 10000);
}
