
    let boxlist = document.querySelectorAll('.sqr-0')
    for (let index = 0; index < boxlist.length; index++) {
        const box  = boxlist[index];
        box.addEventListener('mouseleave',()=>{
            ///alert("Hello")
            box.style.transition = "ease-in-out 1s";
        })
    }
    
