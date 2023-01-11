let size = 6;
for (let i = 0; i < 5; i++) {
    const h1 = document.createElement("h1");
    h1.innerText = `Rad ${i + 1}`;
    h1.style.textAlign = "center";
    const hue = 120 + 20 * i;
    h1.style.background = `hsl(${hue}, 90%, 85%)`;
    h1.style.height = `${2 * size}px`;
    h1.style.margin = `${size}px 0px`;
    h1.style.fontSize = `${size * 2 - size / 4}px`;
    h1.style.color = "#6e6ef7";
    h1.style.fontWeight = "1000";
    document.body.append(h1);
    size += 10;
}

const array = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
const div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "space-evenly";
//div.style.alignItems = "center";
div.style.border = "solid black 1px";
div.style.padding = "75px 0px";
document.body.append(div);
const list = 10;

for (let i = 0; i < 3; i++) {
    const divIn = document.createElement("div");
    divIn.style.background = "#a8a8f0";
    divIn.style.padding = "10px";
    div.append(divIn);
    for (let j = 0; j < list; j++) {
        const p = document.createElement("p");
        p.style.width = "40px";
        p.style.margin = "0";
        divIn.append(p);
        if (j % 2 == 0 && i != 1 || j % 2 != 0 && i == 1) {
            p.style.background = "black";
            p.style.color = "white";
        }
        else {
            p.style.background = "white";
            p.style.color = "black";
        }
    }
    const p = document.querySelectorAll("p");

    if (i == 0) {
        for (let i = 0; i < list; i++) {
            p[i].innerText = i;
            p[4].style.background = "inherit";

        }
    }
    else if (i == 1) {
        for (let j = 0; j < list; j++) {
            p[list + j].innerText = 9 - j;
            p[list + j].style.textAlign = "center";
            p[list + 1].style.background = "inherit";
        }
    }
    else if (i == 2) {
        for (let i = 0; i < list; i++) {
            p[list * 2 + i].innerText = array[i];
            p[list * 2 + i].style.textAlign = "right";
            p[list * 2 + 5].style.background = "inherit";
        }
    }

}