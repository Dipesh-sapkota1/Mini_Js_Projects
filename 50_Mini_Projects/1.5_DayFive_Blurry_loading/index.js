 const loadText = document.querySelector('.loading-text');
 const bg = document.querySelector('.bg');


var load = 0


 let int = setInterval(blurring, 30);

 function blurring () {
    load++;

    if(load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = `${scale(load, 100, 1)}`;
    bg.style.filter = `blur(${scale(load,100,30)}px)`
 }


const scale = (num, max_in, min_out ) => {
return (min_out - ((min_out / max_in ) * num)) };
