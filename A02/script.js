let  btn = document.querySelector('#highlight-product'),
    modal = document.querySelector('#modal');

btn.addEventListener('click' , getColorByid);

function getColorByid(){

    let color = modal.firstElementChild.Value,
    ID = modal.lastElementChild.Value,
    productById = document.querySelector(`.phone-list-item[data-product-id='${ID}']`);

    modal.classList.toggle('hide');

if((color && color[0] === '#' && color.length === 7) && productById){
    modal.classList.toggle('hide');
    productById.style.backgroundColor = color;

}else{
    if(color &&ID){
        color = '';
        ID = '';
    alert('ჩანაწერი ვერ მოიძებნა');
    }

}
}
