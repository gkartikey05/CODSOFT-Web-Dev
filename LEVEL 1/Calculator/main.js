let string = '';
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
          if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input").value = string;
          } else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector(".input").value = string;
          } else if (e.target.innerHTML == "sq") {
            string = string * string;
            document.querySelector(".input").value = string;
          } else if (e.target.innerHTML == "DEL") {
            string = string.toString().slice(0,-1)
            document.querySelector(".input").value = string;
          } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector(".input").value = string;
          }
        } catch (e) {
          console.log('No such function exist')
        }
    })
})