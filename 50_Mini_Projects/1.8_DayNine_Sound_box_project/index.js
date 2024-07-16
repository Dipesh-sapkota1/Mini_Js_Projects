 const sounds = ['applause', 'boo','victory', 'gasp', 'wrong', 'tada'];

 sounds.forEach(sound => {
    const btn  = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    
    btn.addEventListener('click',()=>{
        stopSound();
        const song = document.getElementById(sound);
        song.play();
    });

    const button = document.getElementById('button')
    button.appendChild(btn);
 })
 function stopSound() {
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
 }