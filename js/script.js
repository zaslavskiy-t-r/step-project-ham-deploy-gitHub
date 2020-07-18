"use strict";
//
const allText = [...document.getElementsByClassName('tabs-text')];

allText.forEach(text => text.hidden = true);

// делаю мап из обектов с текстом, и ключами из id которые равны выбираемой вкладке
let textMap = new Map();

allText.forEach(text => textMap.set(text.id.toLowerCase(), text));


// находим наше меню,
const tabs = document.getElementById("tabs");
//в нем находим активный пункт
let activeTab = tabs.getElementsByClassName("active-tab-services")[0];


// показываем активный пункт

// по data атрибуту tabsName  - находим айдишник нужной нам табы( дата атрибуты привязанны к айдишникам с контентом)

textMap.get(activeTab.dataset.tabsName.toLowerCase()).hidden = false;


tabs.addEventListener("click", findAndOpenText);



//----------------------------------------------------------
function findAndOpenText(e) {

    let name = e.target.dataset.tabsName.toLowerCase();

    if (e.target.textContent.toLowerCase() !== activeTab.innerText.toLowerCase()){
        textMap.get(name).hidden = false;
        textMap.get(activeTab.dataset.tabsName.toLowerCase()).hidden = true;

        activeTab.classList.remove("active-tab-services");

        activeTab = e.target;

        e.target.classList.add("active-tab-services");
    }

}


// 5 секция   Our Amazing Work ------------------------------начало --

let ourAmazImgs = [
    {url:'url("img/landing page/landing-page1.jpg")', group:"Landing Pages"},
    {url:'url("img/landing page/landing-page2.jpg")', group:"Landing Pages"},
    {url:'url("img/landing page/landing-page3.jpg")', group:"Landing Pages"},
    {url:'url("img/landing page/landing-page4.jpg")', group:"Landing Pages"},
    {url:'url("img/landing page/landing-page5.jpg")', group:"Landing Pages"},
    {url:'url("img/landing page/landing-page6.jpg")', group:"Landing Pages"},
    {url:'url("img/landing page/landing-page7.jpg")', group:"Landing Pages"},


    {url:'url("img/graphic design/graphic-design1.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design2.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design3.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design4.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design5.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design6.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design7.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design8.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design9.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design10.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design11.jpg")', group:"Graphic Design"},
    {url:'url("img/graphic design/graphic-design12.jpg")', group:"Graphic Design"},

    {url:'url("img/web design/web-design1.jpg")', group:"Web Design"},
    {url:'url("img/web design/web-design2.jpg")', group:"Web Design"},
    {url:'url("img/web design/web-design3.jpg")', group:"Web Design"},
    {url:'url("img/web design/web-design4.jpg")', group:"Web Design"},
    {url:'url("img/web design/web-design5.jpg")', group:"Web Design"},
    {url:'url("img/web design/web-design6.jpg")', group:"Web Design"},
    {url:'url("img/web design/web-design7.jpg")', group:"Web Design"},


    {url:'url("img/wordpress/wordpress1.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress2.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress3.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress4.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress5.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress6.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress7.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress8.jpg")', group:"Wordpress"},
    {url:'url("img/wordpress/wordpress9.jpg")', group:"Wordpress"},

];

//
function filtrImgOurAmazing(groupFilter, startImgCount, visibleImg){

    for (let i = startImgCount; i < ourAmazImgs.length && imgCountVisible<visibleImg ; i++) {
        let divImg = document.createElement("div");
        let divHover = divHoverProto.cloneNode(true);

        if(ourAmazImgs[i].group === groupFilter||groupFilter==="All") {

            numberImgGroupStop = i+1;
            imgCountVisible++;

            divImg.style.backgroundImage = ourAmazImgs[i].url;
            divImg.classList.add("our-amazing-img");

            divHover.getElementsByClassName("our-amazing-img-hover-img-group")[0].textContent = ourAmazImgs[i].group;

            divImg.append(divHover);
            //divHover.classList.add("our-amazing-img-hover");

            //   let divImg1 = divImg.cloneNode(true);
            imgWrap.append(divImg);
            // imgWrap.append(divImg1);

        }
    }

}

let imgWrap = document.getElementById("our-amazing-img-wrap-id");
let divHoverProto = document.getElementById("our-amazing-img-hover");


// let groupFilter = "Landing Page";
let groupFilter = "All";

let imgCountVisible = 0;
let numberImgGroupStop = 0; // картинка в группе на которой остановился вывод



// ------------------------------ Табы  Our Amazing Work

// находим наше меню,
const tabsOurAmazing = document.getElementById("tabs-our-amazing");
//в нем находим активный пункт
let activeTabOurAmazing = tabsOurAmazing.getElementsByClassName("active")[0];



// вывести на экран картинки соответствующие активной табе:
filtrImgOurAmazing(activeTabOurAmazing.textContent, 0,12);


tabsOurAmazing.addEventListener("click", filtrAndWiewImg);


//----------------------------------------------------------
function filtrAndWiewImg(e) {

    let nameFilter = e.target.textContent;

    if (e.target.textContent.toLowerCase() !== activeTabOurAmazing.innerText.toLowerCase()){
        imgWrap.innerHTML = "";
        imgCountVisible = 0;
        numberImgGroupStop = 0;
        filtrImgOurAmazing(nameFilter, 0,12);

        activeTabOurAmazing.classList.remove("active");

        activeTabOurAmazing = e.target;

        e.target.classList.add("active");
    }

}

// кнопка load more  секции our Amazing Work
let buttonLoadMore = document.getElementById("load-more-amazing-work-id");

buttonLoadMore.addEventListener("click",()=>{

    filtrImgOurAmazing(activeTabOurAmazing.textContent, numberImgGroupStop,24);

});


// 5 секция   Our Amazing Work ------------------------------конец --

const reviewThumbs = new Swiper('.review-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    loop: true,
});

const reviewSlide = new Swiper('.review-slide', {
    speed: 450,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    thumbs: {
        swiper: reviewThumbs,
    },
    centeredSlider: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
});
