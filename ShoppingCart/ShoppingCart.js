var txtItem= document.querySelector("#txtItemName");
var txtPrice= document.querySelector("#txtPrice");
var ddlQuantity= document.querySelector("#ddlQuantity");
var btnAddItem= document.querySelector("#btnAdd");
var mainDivList= document.querySelector("#divAllItem");
var spanTotal= document.getElementById("spanTotalPrice");


btnAddItem.addEventListener("click", addItem, false);

function addItem()
{ 
  if(txtItem.value.trim()==="") 
  {
    alert("Please enter the item");
  }
  else if(ddlQuantity.value === "Select the quantity")
  {
    alert("Please enter the quantity");
  }
  else if(txtPrice.value.trim() ===0 || txtPrice.value.trim() ==="")
  {
    alert("Please enter the item price");
  }  
  else
  {    
    createTheListSection();
    calculateTotal();
    txtPrice.value="";
    txtItem.value="";
    ddlQuantity.value="Select the quantity";
  }  
}

function createTheListSection()
{
  let divRow= createNewElement("div", ["row","SetRow"]);
  let divCol1= createNewElement("div",["col-sm-6","SetCol1"]);
  let divCol2= createNewElement("div",["col-sm-6","SetCol2"]);
  divcol1=createFirstColumnStructure(divCol1);
  divcol2=createSecondColumnStructure(divCol2);
  divRow.appendChild(divCol1);
  divRow.appendChild(divCol2);
  mainDivList.appendChild(divRow);
  console.log(divCol1+divCol2+divRow);
}

function createFirstColumnStructure(divCol1)
{
  console.log("insidefirstcol:" +divCol1);
  console.log("quantity:"+ddlQuantity.value);
  let divItemName= createNewElement("div","");

  let label= createNewElement("label","");
  label.innerHTML=txtItem.value;

  label.addEventListener("dblclick",function(){
    
      label.setAttribute("style","display:none");
      let inputGroceryName= createNewElement("input","");
      inputGroceryName.setAttribute("type","text")
      inputGroceryName.setAttribute( "id","txtGroceryName");
      inputGroceryName.value=label.innerHTML; 
           
      divItemName.appendChild(inputGroceryName);
     
      inputGroceryName.addEventListener("keydown",function(event)
      {
        if(event.key==="Enter")
        {
          if(inputGroceryName.value.trim()!=="")
          {
            label.setAttribute("style","display:block");
            label.innerHTML=inputGroceryName.value;
            inputGroceryName.remove();
          }
          else{
            alert("Please enter some item name");
          }
        }
      })   
  });

  let labelOriginalPrice= createNewElement("label","");
  labelOriginalPrice.innerHTML= txtPrice.value;
  

  divItemName.appendChild(label);
  divItemName.appendChild(labelOriginalPrice);

  //divQuantity Structure starts
  let divQuantity= createNewElement("div" ,["SetQuantity"]);
  let labelQuantity= createNewElement("label","");
  labelQuantity.innerHTML= ddlQuantity.value;  

  let buttonup= createNewElement("button","");
  let buttondown= createNewElement("button","");

  buttonup.innerHTML="<i class='fas fa-sort-up'></i>";
  buttondown.innerHTML="<i class='fas fa-sort-down'></i>";
  
  buttonup.addEventListener("click",function()
  {
    buttondown.removeAttribute("disabled");
    labelQuantity.innerHTML= Number(labelQuantity.innerHTML)+1;
   
    calculatePriceOnQuantity(this,labelQuantity.innerHTML,labelOriginalPrice.innerHTML);
    
  }); 
 
  buttondown.addEventListener("click",function(){
    let qua= Number(labelQuantity.innerHTML);
    
    if(qua !== 1)
    {
      labelQuantity.innerHTML= Number(labelQuantity.innerHTML)-1;
      if(labelQuantity.innerHTML === "1")
      {
        buttondown.setAttribute("disabled", "true");
      }
    calculatePriceOnQuantity(this,labelQuantity.innerHTML,labelOriginalPrice.innerHTML);
    
    }
    
  });
  
  divQuantity.appendChild(buttonup);
  divQuantity.appendChild(labelQuantity);
  divQuantity.appendChild(buttondown);
  // divQuantity structure end

  divCol1.appendChild(divItemName);
  divCol1.appendChild(labelOriginalPrice);
  divCol1.appendChild(divQuantity);

}

function createSecondColumnStructure(divCol2)
{
  let divDelete= createNewElement("divDelete",["ShowDeleteButton"]);
  let btnDelete= createNewElement("button","");
  btnDelete.innerHTML="<i class='fas fa-trash-alt'></i>";

  btnDelete.addEventListener("click",function(){
    if(confirm("Do you want to delete the item?"))
    {
      let row= this.closest(".row");
      console.log("row to delete:"+row);
      row.remove();
      calculateTotal();
    }
  });

  let divPrice= createNewElement("divPrice",["ShowPrice"]);
  let lblPrice= createNewElement("label","");
  lblPrice.innerHTML= txtPrice.value * ddlQuantity.value;
  divDelete.appendChild(btnDelete);
  divPrice.appendChild(lblPrice);

  divCol2.appendChild(divDelete);
  divCol2.appendChild(divPrice);
}

function calculatePriceOnQuantity(currentElement,quantity,priceoriginal)
{
  var currentRow=currentElement.closest("div.row");
  let currentPricelabel =currentRow.querySelector("divPrice > label");
  currentPricelabel.innerHTML= Number(quantity)*Number(priceoriginal);
  calculateTotal();
}

function calculateTotal()
{
  var allPrice= document.querySelectorAll(".ShowPrice > label");  
  let price=0;
  allPrice.forEach(e=>{
    price= price+Number(e.innerHTML);
  }); 
  spanTotal.innerHTML=price; 
}


function createNewElement(element, classNameArrayList)
{
  let newElement= document.createElement(element);
console.log("element::"+element +"classArraylist::"+classNameArrayList);
if(classNameArrayList!="")
{
  classNameArrayList.forEach(el => {
    newElement.classList.add(el);
  });
}
  return newElement;
}
