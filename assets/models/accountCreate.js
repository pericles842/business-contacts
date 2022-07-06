var clic = 1;
var buttonView = document.getElementById('button-view');
buttonView.addEventListener('click',view)
function view(){ 
   if(clic==1){
   document.getElementById("widows").style.display="block";
   clic = clic + 1;
   } else{
    document.getElementById("widows").style.display="none";
    clic = clic - 1;
   } 
}
 var buttonCreate = document.getElementById('button-create');
 buttonCreate.addEventListener('click',plusContact)
 //etiquetas
 const div =document.createElement('div');
 const img =document.createElement('img');
 const h3 =document.createElement('h3');
 const h5 =document.createElement('h5');
 const p =document.createElement('p');
 
  const names = [];
  const gmails = [];
  const nums =[];
  //clases 
  div.setAttribute("class",'element-create')
  img.setAttribute("src",'assets/styles/images/perfil.png')
    
   //estructura de cabeza
    function headContats() {
        elementCreateBox.insertAdjacentElement("beforeend",div)
        elementCreateBox.insertAdjacentElement("beforeend",img) 
        elementCreateBox.insertAdjacentElement("beforeend",h3)
        elementCreateBox.insertAdjacentElement("beforeend",h5)
        elementCreateBox.insertAdjacentElement("beforeend",p)
    }
    function add() {
        var nameAccount = document.getElementById('nameAccount').value;
        var gmailAccount = document.getElementById('gmailAccount');
        var numAccount  = document.getElementById('numAccount');
        names.push(nameAccount);
        gmails.push(gmailAccount);
        nums.push(numAccount);
        console.log(names);
    }
function plusContact() {
    var elementCreateBox = document.getElementById('lement-create-box');
    add();
    headContats();
    
 }