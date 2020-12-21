
// const hamburger = document.getElementById('hamburger');
// const navUL = document.querySelectorAll('nav li');
// // i've tried menu id and class on querySelector, not working yet

// hamburger.addEventListener('click', () => {
//     navUL.classList.toggle('show');
// })

function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// random quote banner

// var quotes = ['hi', 'bye', 'lol', 'hello', 'world']
//     function randomQuotes() {
//         var idx = Math.floor(Math.random() * quotes.length)
//         document.getElementById('quote').innerHTML = quotes[idx]
//     }
