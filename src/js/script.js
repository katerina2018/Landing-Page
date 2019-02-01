// alert(1);
function burgerFunction(x) {

x.nextElementSibling.classList.toggle("hidden");

for (var i = 0; i < x.children.length; i++) {
    // console.log(x.children[i].classList.toggle("change") );
}
}
/*slider history start*/
var images = document.querySelectorAll('.js-slider img');
var current = 0;
var times;

function slider(){
  for(var i=0; i<images.length; i++){
    images[i].classList.add('opacity0');
    
  }
  images[current].classList.remove('opacity0');
  clearTimeout(times);
  
  
}
slider();
autoSlider();
// document.querySelector('.js-slider').onclick = slider;


// console.log(document.querySelector('.js-btn-play').childNodes[0].classList.add('opacity1'));
// console.log(i.classList.add('opacity1');

document.querySelector('.js-btn-play').onclick = autoSlider;
function autoSlider(){
  var i = document.querySelector('.fa-play-circle')
  i.classList.add('i_shadow');
  times = setTimeout(function(){
    if(current+1 == images.length){
      current=0;
    }
    else{
      current++;
    }
    slider()
    autoSlider();
  }, 5000);
  
}

document.querySelector('.js-btn-left').onclick = function(){
  var i = document.querySelector('.fa-play-circle')
  i.classList.remove('i_shadow');
  if(current - 1 == -1){
    current = images.length - 1;
  }
  else{
    current--;
  }
  clearTimeout(times);
  slider()
  
}

document.querySelector('.js-btn-right').onclick = function(){
  var i = document.querySelector('.fa-play-circle')
  i.classList.remove('i_shadow');
  if(current+1 == images.length){
    current=0;
  }
  else{
    current++;
  }
  clearTimeout(times);
  slider()
  
}

// console.log(images);
/*slider history end*/



/*filter works start*/


function theFunction(event){
  var item=event.target
  var link = document.querySelectorAll('.works__link')
  var target = event.target.innerHTML; // где был клик?
  // console.log(item);

  // console.log(item.classList.contains('works__link--active'));
  if(item.classList.contains('works__link--active')==false){
    for(var i=0; i< link.length; i++){
      link[i].classList.remove('works__link--active');
    }
    item.classList.add('works__link--active');
  }
 

  var works__box = document.querySelectorAll('.works__box');
    for(var i=0; i< works__box.length; i++){

      works__box[i].parentNode.classList.remove('hidden');

      if(target == "ALL"){
        works__box[i].parentNode.classList.remove('hidden');
      }

      else if(works__box[i].className != "works__box " + target){
        works__box[i].parentNode.classList.add('hidden');
      }
      
    }
}

/*filter works end*/

/*hover team  start*/

  var information={
    "2435":{
      "x":405,
      "name":"Анатолий Erfan",
      "position":"UI/UX Designer",
      "img": "./img/img_team_1.png"
    },
    "2436":{
      "x":325,
      "name":"Августина Erfan",
      "position":"UI/UX Designer",
      "img": "./img/img_team_2.png"
    },
    "2437":{
      "x":245,
      "name":"Егор Erfan",
      "position":"UI/UX Designer",
      "img": "./img/img_team_3.png"
    },
    "2438":{
      "x":165,
      "name":"Галина Erfan",
      "position":"UI/UX Designer",
      "img": "./img/img_team_4.png"
    },
    "2439":{
      "x":85,
      "name":"Илья Erfan",
      "position":"UI/UX Designer",
      "img": "./img/img_team_5.png"
    },


  };

var rtq=document.querySelectorAll('.person')
var attribut=''
for (var i=0; i<rtq.length;i++){
rtq[i].onmouseenter = function(event){
  document.querySelector('.team__persons').classList.remove('hidden');
  var item1=event.target
  attribut = item1.getAttribute('x')
  console.log(attribut);
  
  my_Foo(attribut);
  }
  rtq[i].onmouseleave = function(){
    console.log('person');
    document.querySelector('.team__persons').classList.add('hidden');
  }
  }
  






   function my_Foo(){
    var out="";
    for(var key in information){
     
      if(attribut==information[key].x){
        out+='<h3>'+information[key].name+"</h3>";
        out+="<p>"+information[key].position+"</p>";
      console.log( information[key].name);}
    
    } 
    document.querySelector('.team__persons').innerHTML = out;
  }

  



/*hover team  end*/



/*счетчик цифр and onscroll  start*/

var numch=1;
window.onscroll=function(){
/*animation team and onscroll  start*/
  var elemTeam=document.querySelector('.js-line');
  var elemBgTeam=document.querySelector('.js-bgTeam');
  var positionTeam=elemTeam.getBoundingClientRect().top;
  
  
  if(positionTeam<400 && positionTeam>180 ){
    elemTeam.classList.add('st0')
    elemBgTeam.classList.add('st1')
  }
  else if(positionTeam>-800 && positionTeam<-700 ){
    elemTeam.classList.remove('st0')
    elemBgTeam.classList.remove('st1')
  }
  else if(positionTeam>1100 ){
    elemTeam.classList.remove('st0')
    elemBgTeam.classList.remove('st1')
  }

/*animation team and onscroll  end*/


  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var elem=document.querySelector('.out_stats');
  var position=elem.getBoundingClientRect().top;


  if(position<200 && position>180 ){
    // console.log(scrolled + 'px');
    var time=2;
    var array=document.querySelectorAll('.out_stats__text h3');
    
     if(numch<2){
      
      array.forEach (function(element){
        element.classList.add('view');
      var j=1;
      var num = element.innerHTML;
      var step= 1000*time/num;
      
      var int=setInterval(function(){
        if(j<=num){
          element.innerHTML=j;
        }
        else{
          clearInterval(int);
          numch++;
        }
        j++;
      }, step)
    })
    ;
  }
  }
  //  console.log(position);
  // 
}







/*счетчик цифр end*/

/*animation team and onscroll  start*/


// window.onscroll=function(){
  // var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 
// }







/* плавный scroll*/
window.onload = function(){
  var scrolled;
  var timer;
  document.getElementById('up__arrow').onclick = function(){
    scrolled = window.pageYOffset;
    scrollToTop();

  }
  function scrollToTop(){
    if(scrolled > 0){
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 50;
      timer = setTimeout(scrollToTop, 10);
    }
    else{
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }
}