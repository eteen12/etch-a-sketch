document.addEventListener("DOMContentLoaded",function(){
    createBoard("16");
  
    let btn_popup=document.querySelector("#popup");
    btn_popup.addEventListener('click',function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board=document.querySelector('.board');

    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;

    let numDivs=size*size;

    for(let i=0;i<numDivs;i++){
        let div=document.createElement('div');

        div.addEventListener('mouseover', function(){
            div.style.backgroundColor="Black";
        })

        board.insertAdjacentElement("beforeend",div);
    }
}

function getSize(){
    let input = prompt("How large would you like the board?");
    let message=document.querySelector('#message');
    if(input==""){
        message.innerHTML="Please provide a number!";
    }
    else if(input<0 || input>100){
        message.innerHTML="Please provide a number that is greater than 0 but less than 100";
    }
    else{
        message.innerHTML="Thank you!";
        return input;
    }
}