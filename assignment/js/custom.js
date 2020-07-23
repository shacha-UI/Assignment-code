  // Get the modal
  function openForm() {
    document.getElementById("popup-dialog").style.display = "block";
  }
  
  function closeForm() {
      document.cookie= "closeform = Form Closed";
    document.getElementById("popup-dialog").style.display = "none";
  }
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
  function reportWindowSize() {
    if(window.innerWidth <=480){
    //  setTimeout(
    //    function(){  openForm(); }, 5000);
    console.log('resize');
    }
  }
  
  window.onresize = reportWindowSize;