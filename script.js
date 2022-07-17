//Start of the mobile menu section

const menuBtn=document.querySelector('.header button');

menuBtn.addEventListener('click',() => {
    const menu=document.querySelector('.header ul');
    
    if(menuBtn.innerText==='MENU')
    {
        menu.style.display='block';
        menuBtn.innerText='CLOSE';
    }
    else
    {
        menu.style.display='none';
        menuBtn.innerText='MENU';
    }
});

//End of the mobile menu section

//Start of the slider section

const images=document.querySelectorAll('.slider-wrapper .slider-images img');
const leftBtn=document.querySelector('#left-btn');
const rightBtn=document.querySelector('#right-btn');
let imgIndex=0;

const displayImages = (imgIndex) => {
    for(let i=0;i<images.length;i++)
    {
        if(i===imgIndex)
        {
            images[i].style.display='block';
        }
        else
        {
            images[i].style.display='none';
        }
    }
};

leftBtn.addEventListener('click',() => {
    imgIndex--;
    if(imgIndex===-1)
    {
        imgIndex=images.length-1;
    }
    displayImages(imgIndex);
});

rightBtn.addEventListener('click',() => {
    imgIndex++;
    if(imgIndex===images.length)
    {
        imgIndex=0;
    }
    displayImages(imgIndex);
});

//End of the slider section

//Start of the portofolio section

const portoItems=document.querySelectorAll('.portfolio-items .portfolio-single-item');
const portoBtns=document.querySelectorAll('.portfolio-wrapper .portfolio-categories button');

portoBtns.forEach( button => {
    button.addEventListener('click', event => {
        const btn=event.target;

        const btnAtr=btn.getAttribute('data-category');
    
        if(btnAtr==='sve')
        {
            portoItems.forEach( item => {
                item.style.display='block';
            });
        }
        else
        {
            portoItems.forEach( item => {
                if(item.getAttribute('data-category').includes(btnAtr))
                {
                    item.style.display='block';
                }
                else
                {
                    item.style.display='none';
                }
            });
        }
    })
});

//End of the portofolio section

//Start of the modal section

const modalBtn=document.querySelector('.modal-section button');
const closeModalBtn=document.querySelector('.popup-modal button');

const popup=document.querySelector('.popup-modal');
const overlay=document.querySelector('.overlay');

modalBtn.addEventListener('click', () => {
    popup.style.display='block';
    overlay.style.display='block';
});

closeModalBtn.addEventListener('click', () => {
    popup.style.display='none';
    overlay.style.display='none';
});

//End of the modal section
