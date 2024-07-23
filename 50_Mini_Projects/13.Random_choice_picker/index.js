 const textarea  = document.getElementById('textarea');
 const tagsEl = document.getElementById('tags');

 textarea.focus();
 
 textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        select_Random();
    }
 });

function select_Random() {
    const times = 30;
    const interval =  setInterval(() => {
        const randomTag = get_Randomtag();
        add_Highlight(randomTag);
        setTimeout(() => {
            remove_Highlight(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = get_Randomtag();
            add_Highlight(randomTag);
        }, 100);
    }, times * 100);
}



 function createTags(input) {
    const tags = input.split(",")
    .filter(tag => tag.trim() !== '')
    .map(tag=> tag.trim());
    
    tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
   
 }
 

 function get_Randomtag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
 }
 function add_Highlight(input){
    input.classList.add('highlight');
 }
 function remove_Highlight(input){
    input.classList.remove('highlight');
 }