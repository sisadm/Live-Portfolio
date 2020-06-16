let menuBtn = document.querySelector('.menu-container');
let menuList = document.querySelector('#menu');
let modal = document.querySelector('#modal');
let main = document.querySelector('main');
let header = document.querySelector('header');
let bgPic = document.querySelector('.bg-pic');
let closeBtn = document.querySelectorAll('.close');
let logo = document.querySelector('#logo');
let logoCurve = document.querySelector('#Curve');
let logoMiddle = document.querySelector('#middle');
let logoPath = document.querySelector('#logo path');
let webLoad = document.querySelectorAll('.webLoad');
let About = document.querySelector('#About');
let Project = document.querySelector('#Project');
let Contact = document.querySelector('#Contact');
let bottomUl = document.querySelector('.bottom-list ul');
let note = document.querySelector('.note');
let projects = document.querySelectorAll('.proj');



const linkArray = {
    portfolio7 : ["https://sisadm.github.io/Employee-Directory/", "https://github.com/sisadm/Employee-Directory"],
    portfolio6 : ["https://sisadm.github.io/WebApp-Dashboard/webapp/", "https://github.com/sisadm/WebApp-Dashboard/tree/master/webapp"],
    portfolio5 : ["https://sisadm.github.io/GuessingGame/", "https://github.com/sisadm/GuessingGame"],
    portfolio4 : ["https://sisadm.github.io/Photo-Gallery/Photo-Gallery/", "https://github.com/sisadm/Photo-Gallery/tree/gh-pages/Photo-Gallery"],
    portfolio2 : ["https://sisadm.github.io/Registration-Form/", "https://github.com/sisadm/Registration-Form"],
    portfolio1 : ["https://sisadm.github.io/Portfolio/", "https://github.com/sisadm/Portfolio/tree/gh-pages"],
    portfolio3 : ["https://sisadm.github.io/Web-Style-Guide/", "https://github.com/sisadm/Web-Style-Guide"],
};

console.log(linkArray);


const contentArray = [header, main];




function arrayClassRemove() {
    contentArray.forEach(e => {
        e.classList.remove('show');
    });
}

function arrayClassAdd() {
    contentArray.forEach(e => {
        e.classList.add('show');
    });
}

function toLink(name, num) {
    if(num == 0) {
        window.open(linkArray[name][0]);
    }
    else {
        window.open(linkArray[name][1]);
    }
};

function contentDisp() {
    About.style.display = "none";
    Project.style.display = "none";
    Contact.style.display = "none";
}


function webLoadRemove() {
    for(let i = 0; i < webLoad.length; i++) {
        webLoad[i].classList.remove('webLoad');
    }
}


function blurAndHide() {
    arrayClassRemove();
    main.classList.add('hide');
    header.classList.add('hide');
    setTimeout( function() {main.style.display = "none"; header.style.display = "none";}, 750);
}

function showMainHeader() {
    arrayClassAdd();
    main.classList.remove('hide');
    header.classList.remove('hide');
    main.style.display = "block";
    header.style.display = "block";
}


function modalList(name) {
    let modalPart = document.querySelector('#'+name);
    menuBtn.classList.remove('active');
    menuList.classList.remove('on');
    modal.style.display = "block";
    blurAndHide();
    modalPart.style.display = 'block';
}

function modalClose(target) {
    let parent = target.parentNode;
    let child = target;
    let closeBtn = target.querySelector('.close');
    if(parent || closeBtn) {
        child.style.display = 'none';
        modal.style.display = 'none';
    }
}

function fromNoteToModal(name) {
    let modalPart = document.querySelector('#'+name);
    About.style.display = 'none';
    modalPart.style.display = 'block';
}

// webload class remove  
window.addEventListener('load', (event) => {
    setTimeout(function() {logo.classList.remove('logo-anim');
                           logoCurve.style.fill = 'white';
                           logoMiddle.style.fill = 'white';
                           logoPath.style.fill = 'white';
                           webLoadRemove();}, 4000)
});

// burger menu btn on & off

menuBtn.addEventListener('click', ()=> {
    if(!menuBtn.classList.contains('active')) {
        menuBtn.classList.add('active');
        menuList.classList.add('on');
    } else {
        menuBtn.classList.remove('active');
        menuList.classList.remove('on');
    }
});

// menu  list move to modal popup

menuList.addEventListener('click', (e) => {
    if(e.target.innerText === 'About') {
       modalList('About'); 
    }
    if(e.target.innerText === 'Project') {
       modalList('Project'); 
    }
    if(e.target.innerText === 'Contact') {
       modalList('Contact'); 
    }
});


// bottom list click to modal popup

bottomUl.addEventListener('click', (e)=>{
    if(e.target.innerText === 'About') {
        modalList('About'); 
     }
     if(e.target.innerText === 'Project') {
        modalList('Project'); 
     }
     if(e.target.innerText === 'Contact') {
        modalList('Contact'); 
     }
});


// note click to modal

note.addEventListener('click', (e) => {
    if(e.target.classList.contains('toProj')){
        fromNoteToModal('Project');
    }
    if(e.target.classList.contains('toCont')){
        fromNoteToModal('Contact');
    }

});


// click on portfolio buttons

for(let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', (e) => {
        if(e.target.parentNode.classList.contains('btn-live')) {
            let parent = e.target.parentNode.parentNode.parentNode;
            let parentIdNumb = parent.id;
            toLink(parentIdNumb, 0);
        }
        if(e.target.parentNode.classList.contains('btn-code')) {
            let parent = e.target.parentNode.parentNode.parentNode;
            let parentIdNumb = parent.id;
            toLink(parentIdNumb, 1);
        }
    });
}



// close the modals

window.onclick = function(e) {
    if (e.target == modal || e.target == closeBtn) {
        modal.style.display = "none";
        showMainHeader();
        this.contentDisp();
    }
}


closeBtn.forEach(e => {
    e.addEventListener('click', ()=> {
        modal.style.display = "none";
        showMainHeader();
        this.contentDisp();
    });
})



