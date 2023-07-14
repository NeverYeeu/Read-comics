function lastUpate(){
    alert('Chức năng này đang cập nhật! ^~^')
}
function outLink(){
    alert('No No No!');
}
function Comics(link, name, author, picture) {
    this.link = link;
    this.name = name;
    this.author = author;
    this.picture = picture;
}
var _1 = new Comics('link-comic','Đấu phá thương khung','Thiên tằm thổ đậu', '/img/Dau-pha-thuong-khung/DPTK.jpg');
var _2 = new Comics('link-comic','Onepiece','echiro oda', '/img/Dau-pha-thuong-khung/DPTK.jpg');
var _3 = new Comics('link-comic','Ta có một sơn trại','Author', '/img/Dau-pha-thuong-khung/DPTK.jpg');
var _4 = new Comics('link-comic','Onepiece','echiro oda', '/img/Dau-pha-thuong-khung/DPTK.jpg');
var _5 = new Comics('link-comic','Onepiece','echiro oda', '/img/Dau-pha-thuong-khung/DPTK.jpg');
var _6 = new Comics('link-comic','Chị dâu kìa em','echiro oda', '/img/Dau-pha-thuong-khung/DPTK.jpg');
var mocData =[
    _1, _2,_3,_4,_5,_6
];
var listComics = document.querySelector(".search_comics-wraper");

mocData.forEach(item=>{
    var newComic = document.createElement('div');
    newComic.classList.add('comic-list')
    newComic.innerHTML =`
        <a href="${item.link}" class="seach_comics">
            <img src="${item.picture}" alt="" class="search_comics-img">
            <div class="search_comics-infor">
                <div class="comics-infor_name">${item.name}</div>
                <div class="comics-infor_author">${item.author}</div>
            </div>
        </a>`

    listComics.appendChild(newComic);
});
var searchInput = document.querySelector('.header-search_wrap input');
searchInput.addEventListener('input', function(e){
    // console.log(e.target.value)
    let txtSearch = e.target.value.trim().toLowerCase();
    let listComicDOM = document.querySelectorAll('.comic-list');
    listComicDOM.forEach( item=>{
        // console.log(item.innerText)
        if(item.innerText.includes(txtSearch)){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
})

// -------------------------------Slide------------------------------
var sizeImg = document.getElementsByClassName('wrapper-comics_link')[0].clientWidth;
var sizeSlide = sizeImg + 12;
var moveSlide = document.getElementsByClassName("wrapper-comics_slide")[0];
var move = 0;

var maxSlide = sizeSlide * 6;
maxSlide -= sizeSlide;
function nextSlide(){
    if (move < maxSlide) move += sizeSlide;
    else move = 0;
    moveSlide.style.marginLeft = '-' + move + 'px';
}
function prevSlide(){
    if (move == 0) move = maxSlide;
    else move -= sizeSlide;
    moveSlide.style.marginLeft = '-' + move + 'px';
}

setInterval( function(){
    nextSlide();
},20000);


var checkBox_toggle = document.getElementById("light-dark")
const column = document.querySelector(".column-container")

checkBox_toggle.addEventListener('change', function(){
    // thêm class dark tới body
    column.classList.toggle('column-dark');
    fontColor.classList.toggle('font-dark');
    document.body.classList.toggle('body-dark');
});


// --------------------------------------Tab UI trong Index-------------------------
const x = document.querySelector.bind(document);
const xx = document.querySelectorAll.bind(document);

const tabs = xx('.header_time');
const panes = xx('.header_time-wrap');

const tabActive = x(".header_time-wrap.active-click");
const line = x(".header_line");

    line.style.width = tabActive.offsetWidth + "px";


tabs.forEach((tab, index) => {
    tab.onclick = function() {
        const pane = panes[index];
        
        x('.header_time-wrap.active-click').classList.remove('active-click');
        x('.header_time.active-click').classList.remove('active-click');
        
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add('active-click');
        pane.classList.add('active-click');
    }
})

// ----------------------------------Bật tắt hot-----------------------------
var hotComic = document.querySelector('.infor_chapter-hot');
    setInterval(() => {
        hotComic.classList.toggle('hidden-hot');
    },1000);