$(document).ready(function(){
  $('.dropdown img').click(function(){
    $('img').next().toggle();
  });
  
  $('form').submit(function(){
    
    var email= $('#email').val();
    var password = $('#password').val();
   	
    if (email === ""){
    	$(".email-error").text('Please enter your email.');
  }
  	if (password === ""){
    	$(".password-error").text('Please enter your password');
  };
    
    return false;
  });
  
});