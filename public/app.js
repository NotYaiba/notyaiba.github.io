
 console.log("start")
 const bar_slide = () =>{

    const bar = document.querySelector('.bar');
    const menu = document.querySelector('.menu'); 
    bar.addEventListener('click', ()=>{
        // console.log("mokk");
        menu.classList.toggle('nav-active');
    });
}

// var slideIndex = 0;
// var x = document.getElementsByClassName("img");
// var imgArray = new Array(x.length);
//   for (var i = 0; i < x.length; i++) {
//       imgArray[i] = (x[i].getAttribute('src'));
//         x[i].style.opacity = 0;
//     //   x[i].style.display = "none";
//   }


// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("img");
//   for (i = 0; i < x.length; i++) {
//       //imgArray.push(x[i].getAttribute('src'));
//         x[i].style.opacity = 0.5;
//       x[i].style.display = "none";
//   }

//   slideIndex++;
//     if (slideIndex >= x.length)
//         slideIndex = 0;

   
//     x[slideIndex].style.display = "block";
//     //  x[slideIndex].style.opacity = 1;
//     //setTimeout(carousel, 2000);
// }

var slideIndex = 0;
function carousel()
{
    var x = document.getElementsByClassName("img");
    for (var i = 0; i < x.length; i++) {
        x[i].style.opacity = 0;
    }
    if (slideIndex >= x.length)
    {
        slideIndex = 0;
    }
    x[slideIndex].style.opacity = 1;
    setTimeout(carousel, 5000);
    slideIndex++;
}
 
var index = 0
 const push = () =>{
    
    var  move = 0;
    var p = document.getElementsByClassName("imagewrap");
    var right = document.querySelector(".right");
    var left = document.querySelector(".left");
    var w = window.outerWidth;
    var scroll = 330;
    if (w <= 850)
        scroll = 230;
    right.addEventListener('click', ()=>{
        console.log(index);
        if (index < p.length - 1)
        {
            // p[index].toggleClass('move');
            move  += scroll;
            p[index].style.transform = "translateX(-" + move + "px)";
             p[index + 1].style.transform = "translateX(-" + move + "px)";
            index++;
        }
        else
        {
            console.log(index);
            move = 0;
            index = 0;
           for (var i = 0; i < p.length; i++) {
            p[i].style.transform = "translateX(" + move + "px)";
            }
        }
      
    });
    left.addEventListener('click', ()=>{
        if (index > 0)
        {
            // p[index].toggleClass('move');
            move  -= scroll;
            p[index].style.transform = "translateX(-" + move + "px)";
            p[index - 1].style.transform = "translateX(-" + move + "px)";
            index--;
        }
    });
   
    
}

push();
carousel();
bar_slide();


