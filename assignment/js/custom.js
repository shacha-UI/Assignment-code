
  /* Start - Function to open popup form  */
  function openForm() {
    var formcookie =  getCookie('formsubmit');
    var closecookie =  getCookie('closeform');
    console.log(formcookie,closecookie);
    if(formcookie == '' && closecookie =='')
    {
      document.getElementById("popup-dialog").style.display = "block";
    }
    else
    {
      alert('cookie found!!');
    }	
  }
  /* End - Function to open popup form  */
  
  /* Start - Function to open popup form on mobile  */
  function openMobileForm() {
    document.getElementById("popup-dialog").style.display = "block";
  }
  /* End - Function to open popup form on mobile  */
  
  /* Start - Function to close popup form  */
  function closeForm() {
      document.cookie= "closeform = Form Closed";
    document.getElementById("popup-dialog").style.display = "none";
  }
  /* End - Function to close popup form  */

  /* Start - Function to validate form  */
  function validateForm() {
    var x = document.forms["myForm"]["uname"].value;
    var y = document.forms["myForm"]["mail"].value;
    if (x == "" || x == null || y == "" || y == null) {
      alert("Name must be filled out");
      return false;
      openForm();
    }
    else{
      alert("Form submitted successfully");
      document.cookie= "formsubmit = Form submitted successfully";
      closeForm();
    }
  }
  /* End - Function to validate form  */

  /* Start - Function for resize window  */
  function reportWindowSize() {
    if(window.innerWidth <= 480){
      setTimeout(
        function(){  openMobileForm(); }, 5000);
    }
  }
  /* End - Function for resize window  */ 
  
  /* Start - Function to get cookie  */
  function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
/* End - Function to get cookie  */
  window.onresize = reportWindowSize;