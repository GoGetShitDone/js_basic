const h1 = document.querySelector("h1");

function handleTitleEasyClick() {
    h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleEasyClick);



////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


// const h1 = document.querySelector("h1");

// function handleTitleEasyClick() {
//     const clickedClass = "active"
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }
// h1.addEventListener("click", handleTitleEasyClick);



////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


// function handleTitleClick() {
//     const activeClass = "active"
//     const activeClick = h1.className
//     let deactiveClick

//     if (activeClick === activeClass) {
//         deactiveClick = "";
//     } else {
//         deactiveClick = activeClass;
//     }

//     h1.className = deactiveClick;
// }

// h1.addEventListener("click", handleTitleClick);


// 변수명 개선:
// activeClick과 deactiveClick은 실제로 클래스 이름을 나타내므로, 
// currentClassName과 newClassName으로 변경

// 불필요한 변수 제거:
// title과 h1이 같은 요소를 가리키고 있음 
// h1 하나의 변수만 사용

// 클래스 토글 사용:
// click 대신 classList.toggle() 메서드를 사용

// 상수 사용:
// 문자열 "active"를 상수로 정의해서 오타 방지와 유지보수성이 향상


////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


// const h1 = document.querySelector("h1");
// const ACTIVE_CLASS = "active";

// h1.innerText = "YES!! GO! GET SHIT DONE!";

// function handleTitleClick() {
//     h1.classList.toggle(ACTIVE_CLASS);
// }

// h1.addEventListener("click", handleTitleClick);