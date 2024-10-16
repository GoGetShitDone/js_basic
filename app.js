const woo = document.getElementsByClassName("WOOWOOO");

const hello = document.getElementsByTagName("h1");

const title = document.getElementById("title");

const search = document.querySelector(".hello h1");

const searchAll = document.querySelectorAll(".hello h1");

const searchDetail = document.querySelector(".hello:first-child h1");


title.innerText = "YES!! GO! GET SHIT DONE!";

console.log(title.id);
console.log(title.className);

console.dir(woo);
console.dir(hello);
console.dir(title);
console.dir(search);
console.log(search);
console.log(searchAll);
console.log(searchDetail);
console.log(title);
console.dir(searchDetail);
console.dir(title);

title.style.color = "blue";

///////////////////////////////
//////////[- EVENT -]//////////
///////////////////////////////


// // - Enter -

// function handleTitleClick() {
//     console.log("title was Clicked");
//     title.style.color = "pink";
// }


// - Mouse Enter -

function handleMouseEnter() {
    console.log("Mouse is here");
    title.style.color = "red";
}


// - Mouse Leave -

function handleMouseLeave() {
    console.log("Mouse leaved");
    title.style.color = "blue";
}


// - Resize -

function handleWindowResize() {
    document.body.style.backgroundColor = "black";
}

// - copied -

function handleWindowCopy() {
    document.body.style.backgroundColor = "Red";
    console.log("copied");
}


function handleWindowOffline() {
    alert("SOS NO WIFI");
}

function handleWindowOnline() {
    alert("YES! HERE IS WIFI!");
}


// title.addEventListener("click", handleTitleClick);
// // title.onclick = handleTitleClick;

title.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseleave = handleMouseLeave;

title.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;

window.addEventListener("resize", handleWindowResize);
// window.onresize = handleWindowResize;

window.addEventListener("copy", handleWindowCopy);
// window.oncopy = handleWindowCopy;

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);





///////////////////////////////
//////////[- EVENT -]//////////
////////[- ADVENCED -]/////////
///////////////////////////////



// - Enter -> Other Actions

function handleTitleClickAndOthers() {
    if (title.style.color === "pink") {
        title.style.color = "green";
    } else {
        title.style.color = "pink";
    }
}

title.addEventListener("click", handleTitleClickAndOthers);



// - Enter -> Other Actions -> with variable : const currentColor, newColor

function handleTitleClickAndOthers() {

    const currentColor = title.style.color;
    let newColor;

    if (currentColor === "pink") {
        newColor = "green";
    } else {
        newColor = "pink";
    }

    title.style.color = newColor;

}

title.addEventListener("click", handleTitleClickAndOthers);