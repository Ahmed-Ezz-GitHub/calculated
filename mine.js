const calcoleter = document.getElementById("contant");
const screncalc = document.getElementById("scren");


calcoleter.addEventListener('click',(e)=>{
    if(e.target.nodeName == 'BUTTON'){
        switch(e.target.textContent){
            case 'C':
                clerContent();
                break;
            case 'DEL':
                deleteElemant();
                break;
            case '=':
                acwalContent();
                break;
            default :
            addElemantToScren(e.target.textContent);
            break;    

        }
    }
})


function clerContent(){
    screncalc.textContent ="";
}

function deleteElemant(){
let currentContent = screncalc.textContent;
screncalc.textContent = currentContent.substring(0 , currentContent.length -1 )
}
function acwalContent(){
    try{
       let confffl = math.evaluate(screncalc.textContent);
       screncalc.textContent =confffl;
    }catch{
        screncalc.textContent = 'invaled opretor';
        console.error(error);
    }
}
function addElemantToScren(valu){
    screncalc.textContent += valu;
}
