const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target = +counter.dataset.target;
        const increment = target / 300;
        const c = +counter.innerText;
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        }
   }
   updateCounter();
});
