// let circles = document.querySelectorAll('.circle');
// let red = circles[0]
// let yellow = circles[1]
// let green = circles[2]

onbtn.onclick = function () {
            setTimeout(function(){circles[0].classList.add("red")}, 1000);
            setTimeout(function(){circles[0].classList.remove("red")}, 2500);

            setTimeout(function(){circles[1].classList.add("yellow")}, 2500);
            setTimeout(function(){circles[1].classList.remove("yellow")}, 4000);

            setTimeout(function(){circles[2].classList.add("green")}, 4000);
            setTimeout(function(){circles[2].classList.remove("green")}, 5500);
}
// setInterval(nt, 1000)



offbtn.onclick = function () {
    function aylan () {
        for(let i = 0; i<=circles.length; i++){
            circles[i].classList.add('green')
        }
    }
    setInterval (aylan, 1000)

    function cl () {
        for(let i = 0; i<=circles.length; i++){
            circles[i].classList.remove("green")
        }
    }
    setInterval(cl, 2500)
}

