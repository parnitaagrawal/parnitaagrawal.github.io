var txtFirstName= document.getElementById("txtFirstName");
var txtLastName= document.getElementById("txtLastName");
var txtMobileNo= document.getElementById("txtMobileNo");
var txtEmailId= document.getElementById("txtEmailId");
var txtAddress= document.getElementById("txtAddress");
var ddlCountry= document.getElementById("ddlCountry");
var ddlState= document.getElementById("ddlState");
var ddlCity= document.getElementById("ddlCity");
var chkAgree= document.getElementById("chkAgreement");
var rdbMale= document.getElementById("rdMale");
var rdbFemale= document.getElementById("rdFemale");
var rdbOthers= document.getElementById("rdOthers");
var btnSave= document.getElementById("btnSave");
var divRadio= document.getElementById("divRadio");

onFirstPageLoad();

function onFirstPageLoad()
{
  fillCountry();
  btnSave.addEventListener("click" , validateData,false);
}

function fillCountry()
{
  
}

function fillState()
{

}

function fillCity()
{

}

function validateData()
{
  let isValid=true;
  debugger;
  // check all validation
  if(txtFirstName.value.trim()==="")
  {
    txtFirstName.classList.add("txtErrorClass");    
    isValid=false;
  }
  else
  {
    txtFirstName.classList.remove("txtErrorClass");
  }

  if(txtLastName.value.trim()==="" )
  {
    txtLastName.classList.add("txtErrorClass");
    isValid=false;
  }
  else
  {
    txtLastName.classList.remove("txtErrorClass");
  }

  if(rdbFemale.checked===false && rdbMale.checked===false && rdbOthers.checked===false)
  {
    divRadio.classList.add("rdbErrorClass");
    isValid=false;
  }
  else
  {
    divRadio.classList.remove("rdbErrorClass");
  }
  debugger;

  // mobile validation
  if(validateMobileNo()===false)
  {
    txtMobileNo.classList.add("txtErrorClass");
    isValid=false;
  }  
  else
  {
    //alert(validateMobileNo());
    txtMobileNo.classList.remove("txtErrorClass");
    
  } 
  
  // email id validation
  if( validateEmailId()===false)
  {
    txtEmailId.classList.add("txtErrorClass");    
    isValid=false;
  }
  else
  {   
    txtEmailId.classList.remove("txtErrorClass");
  }

 

  if(txtAddress.value.trim()==="")
  {
    txtAddress.classList.add("txtErrorClass");
    isValid=false;
  }
  else
  {
    txtAddress.classList.remove("txtErrorClass");
  }
  // if(ddlCountry.value==="Select Country")
  // {
  //   ddlCountry.classList.add("ddlErrorClass");
  //   isValid=false;
  // }
  // else
  // {
  //   ddlCountry.classList.remove("ddlErrorClass");
  // }
  // if(ddlCountry.value!=="Select Country" && ddlState.value==="Select State")
  // {
  //   ddlState.classList.add("ddlErrorClass");
  //   isValid=false;
  // }
  // else{
  //   ddlState.classList.remove("ddlErrorClass");
  // }
  // if(ddlCountry.value!=="Select Country" && ddlState.value!=="Select State" && ddlCity.value==="Select City")
  // {
  //   ddlCity.classList.add("ddlErrorClass");
  //   isValid=false;
  // }
  // else
  // {
  //   ddlCity.classList.remove("ddlErrorClass");
  // }
  if(chkAgree.checked===false)
  {
    chkAgree.classList.add("chkErrorClass");
    isValid=false;
  }
  else
  {
    chkAgree.classList.remove("chkErrorClass");
  } 
    
  if(isValid)
  {
    showTabelData();   
  }
  
}

function validateMobileNo()
{
  
  debugger;
  let phoneno = /^\d{10}$/;  
  if(txtMobileNo.value.trim()==="" || txtMobileNo.value.trim()==="0" || !(txtMobileNo.value.match(phoneno)))
  {   
    return false;
  }
  return true;
}

function validateEmailId()
{
  debugger;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (txtEmailId.value.trim()==="" || reg.test(txtEmailId.value) === false) 
  {    
      return false;
  } 
  return true;       
}

function showTabelData()
{
  debugger;
alert("hi");
}
