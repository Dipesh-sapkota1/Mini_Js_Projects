const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');

updateCup();
 
smallCups.forEach((cup,idx)=> cup.addEventListener('click',()=> {
    highlightcup(idx);
}));

function highlightcup(idx) {
 
    if(smallCups[idx].classList.contains('full') && 
    !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup,idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })

    updateCup();
}

function updateCup() {
    const totalCups = document.querySelectorAll('.cup-small.full').length;
    const cups = smallCups.length;
    if(totalCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.innerText = `${(totalCups / cups) * 100}%`;
        percentage.style.height = `${ (totalCups / cups ) * 330}px`;   
    }
    if(totalCups === cups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * totalCups / 1000)}Ltrs`;
    }

}