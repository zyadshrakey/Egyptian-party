/// <reference types="../@types/jquery" />
//----------------------------------------- Home Side Menu Section -----------------------------------------

const links = $('.setting a');



$('.setting span').on('click', function(){
    
    $('.setting .left-menu').animate({width:'toggle'} , 500);

});


$(".closeBtn").on('click', function(){
    $('.setting .sidenav , .setting .inner-box .left-menu ').animate({ width:'toggle'},1000);
    $('.home-content').animate({marginLeft :'0px'},50)
})


$("#leftMenu a").on('click',function(){
    
    let sectionId= $(this).attr("href");
    
    let positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})


$('#singerInfo .toggle').on('click',function(){
    $('.inner,.inner-first').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

});


/*
$(window).on('scroll', function(){

    const scrollTop = $(window).scrollTop()
    

    const offsetSingerInfo = $('#singerInfo').offset().top;
    const offsetcountDown = $('#count-down').offset().top;
    const offsetcontactUs = $('#contact-us').offset().top;

    // console.log("offsetSingerInfo",offsetSingerInfo)
    // -150 because I have an extra margin at beginning of singers section
    if(scrollTop > offsetSingerInfo-150 
        && scrollTop > offsetcountDown-150
        && scrollTop > offsetcontactUs-150){
        $('.setting span').css({'background-color':'rgba(0,0,0,.5)','padding-inline':'px'})
    }
    else {
        $('.setting span').css({'background-color':'transparent','padding-inline':'10px'})
    }
    
    

})

*/

// links.on('click', function({target}){
//     const currentLink =  $(target).attr('href')
//     console.log(currentLink);
// });


//----------------------------------------- Counter Section -----------------------------------------

const seconds = document.querySelector(".seconds .number"),
minutes = document.querySelector(".minutes .number"),
hours = document.querySelector(".hours .number"),
days = document.querySelector(".days .number");

let secValue =60,
minValue = 60,
hourValue = 2,
dayValue = 9;

const timeFunction = setInterval( () => {
    secValue--;
    // console.log(secValue);
    if(secValue === 0)
    {
        minValue--;
        secValue = 60;
    }

    if(minValue === 0)
    {
        hourValue--;
        minValue = 60;
    }
    if(hourValue === 0) 
    {
        dayValue--;
        hourValue = 60;
    }

    if(dayValue === 0)
    {
        clearInterval(timeFunction);
    }

    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

}  ,1000) //1000ms = 1s


// ----------------------------------------- Limit charaters section -----------------------------------------

let inputBox = document.querySelector(".limitedInput");
textarea = inputBox.querySelector("textarea");
chars = inputBox.querySelector("#chars");

disappearCount = inputBox.querySelector(".charsLimit");

msgDisplayed = inputBox.querySelector("#extra-chars");
extraChars = inputBox.querySelector(".extra");
// Chars d-none
textarea.addEventListener("keyup", ()=>{
    let valLength = textarea.value.length; //stored textarea length into valLength

    chars.innerText = 100-valLength; //converted chars innerText by valLength

    if (valLength >100) {
        disappearCount.classList.add("d-none");
        msgDisplayed.innerText = (valLength-100);
        extraChars.classList.remove("d-none")
    }
    else
    {
        disappearCount.classList.remove("d-none");
        extraChars.classList.add("d-none");
    }




    console.log(valLength)
})

// make a clear input function later