
// const hamburger = document.getElementById('hamburger');
// const navUL = document.querySelectorAll('nav li');
// // i've tried menu id and class on querySelector, not working yet

// hamburger.addEventListener('click', () => {
//     navUL.classList.toggle('show');
// })

// function myFunction() {
//   var x = document.getElementById("menu");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

var widerScreenWidth = window.matchMedia("(max-width: 767px)");

if (widerScreenWidth.matches) {

    // [... YOUR CODE HERE...]

}



const button = document.getElementById('myButton');
const div = document.getElementById('menu');
const icon = document.querySelector('.icon');
console.log(icon);

document.addEventListener('click', myFunction)

function myFunction(e) {
  // e.preventDefault();
  console.log(e.target);
  
  if((div.style.display === '' || div.style.display === 'none') && (e.target === button || e.target === itag)) {
    div.style.display = 'block';    
  } else if((div.style.display === '' || div.style.display === 'none') && (e.target !== button || e.target !== itag)) {
    div.style.display = 'none';
  } else {
    div.style.display = 'none';
  }
}


  
//   var y =  document.getElementById("item1");

//   function myFunction2() {
//     document.getElementByClass('.menu ul li a').on("click", function (e) {
//     var item0 = document.getElementById("menu");
//     if (y.click() === true){
//       item0.removeClass("block");
//     }    
    
// });
//   }

// function myFunction2() {
//   var here = document.getElementById("item1");
//   var there = document.getElementById("menu");
//   there.classList.add("display: none");
//   }
  
  



    

  

  // function clickedLink() {
  //   var j = document.getElementById("item1")
  // }

  

  // hide menu when an li is clicked  

  


// random quote banner

// var quotes = ['hi', 'bye', 'lol', 'hello', 'world']
//     function randomQuotes() {
//         var idx = Math.floor(Math.random() * quotes.length)
//         document.getElementById('quote').innerHTML = quotes[idx]
//     }
