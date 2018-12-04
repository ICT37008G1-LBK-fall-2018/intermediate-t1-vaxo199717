
let btn = document.querySelector('#highlight-product'),
vaxo = document.querySelector('#vaxo');
btn.addEventListener('click' , getColorById);
function getColorById(){
let color = vaxo.firstElementChild.value,
    ID = vaxo.lastElementChild.value,
    productById = document.querySelector(`.phone-list-item[data-product-id='${ID}']`);
    vaxo.classList.toggle('damalva');
if
    ((color && color[0] === '#' && color.length === 7) && productById){
    vaxo.classList.toggle('damalva');
    productById.style.backgroundColor = color; 
}
else{
        if(color && ID){
            color = '';
            ID = '';
            alert('ჩანაწერი ვერ მოიძებნა');
        }
    }
}