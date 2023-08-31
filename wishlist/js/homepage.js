var intA = 0;
setInterval(function () {
    let spin = document.getElementById("spin");
    let txt = "[";
    intA++;

    if (intA >= 20) { intA = 0; }

    for (let i = 0; i < 20; i++) {
        if (intA == i) {
            txt += "*";
        }
        else {
            txt += " ";
        }
    }
    txt += "]";
    spin.innerHTML = txt;
}, 250);