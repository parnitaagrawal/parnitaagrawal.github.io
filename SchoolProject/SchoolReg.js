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

btnSave.addEventListener("click" , displayData,false);

function displayData()
{
  
  console.log("checkvalid");
  // check all validation
  if(txtFirstName.value.trim()==="")
  {
    txtFirstName.classList.add("txtErrorClass");    
  }
  if(txtLastName.value.trim()==="" )
  {
    txtLastName.classList.add("txtErrorClass");
  }
  if(txtMobileNo.value.trim()==="" || txtMobileNo.value.trim()==="0")
  {
    txtMobileNo.classList.add("txtErrorClass");
  }
  if(txtEmailId.value.trim()==="")
  {
    txtEmailId.classList.add("txtErrorClass");
  }
  if(rdbFemale.checked=="false" && rdbMale.checked=="false" && rdbOthers.checked=="false")
  {
    divRadio.classList.add("rdbErrorClass");
  }
  if(txtAddress.value.trim()==="")
  {
    txtAddress.classList.add("txtErrorClass");
  }
  if(ddlCountry.value==="Select Country")
  {
    ddlCountry.classList.add("ddlErrorClass");
  }
  if(ddlCountry.value!=="Select Country" && ddlState.value==="Select State")
  {
    ddlState.classList.add("ddlErrorClass");
  }
  if(ddlCountry.value!=="Select Country" && ddlState.value!=="Select State" && ddlCity.value==="Select City")
  {
    ddlCity.classList.add("ddlErrorClass");
  }
  if(chkAgree.checked=="false")
  {
    chkAgree.classList.add("chkErrorClass");
  }
  


  
}
