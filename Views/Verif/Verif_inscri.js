$(document).ready(function(){

      function checkUnique()
    {
                    var email=$("#register_email").val();
                 var username=$("#register_user").val();


           $.ajax({
              
     url:"http://localhost/AvenirCulturel/Views/Verif/Check_username.php?username="+username+"&"+"email="+email,
      success:function(data)
         {
             if(data==1 || data==2 || data==3 )
                 {
                 $( "#register_submit" ).prop( "disabled", true );
                 }
else 
         {

        $("#register_submit" ).prop( "disabled", false );
         }
           
         }
}); 
    }     

    
    
function username()
{
         var x=0;
         var username=$("#register_user").val();
         var email=$("#register_email").val();

         var username_span=$("#register_user_span").val();
    var onlyNumber=/^[0-9]*$/gm;
    var onlyletter=/^[A-Za-z]+$/;
    $("#register_user_span").css({"color": "#ff7f7f"});
                            if(username=='')
                            {
                            $("#register_user_span").html("       Champ obligatoire"); 
                            $("#register_user").css({"background-color": "#ff7f7f"});                       
x++;
                            }
    
                            else if( username.match(onlyNumber)!=null || username.match(onlyletter)!=null )
                            {
                            $("#register_user_span").html("       Nom d\'utilisateur doit contenir des chiffres et des lettres"); 
                            $("#register_user").css({"background-color": "#ff7f7f"});                       
                                x++;       
                            }
    
    
                                else{  
                                    
        $.ajax({
     url:"http://localhost/AvenirCulturel/Views/Verif/Check_username.php?username="+$("#register_user").val(),
      success:function(data2)
         {  
         
             if(data2==1 || data2==2 || data2==3 )
                 {
                   
                 $("#register_user_span").html("       Nom utilisateur existe deja "); 
                 $("#register_user").css({"background-color": "#ff7f7f"});
                 }
else 
         {
  $("#register_user_span").html("  "); 
   $("#register_user").css({"background-color": "#98FB98"});
         }
           
         }
}); 
     checkUnique();

}
                 return x;
}       
    
function Email()
    {
       var x=0;
            var email=$("#register_email").val();
            var email_span=$("#email_span").val(); 
        var emailregex="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}";
            $("#email_span").css({"color": "#ff7f7f"});

        
            if(email=='')
                {
                    $("#email_span").html("        Champs obligatoire");
                    $("#register_email").css({"background-color":"#ff7f7f"});
                x++;
                }
                else if(email.match(emailregex)==null)
                {
                    $("#email_span").html("        Adresse mail non valide");
                    $("#register_email").css({"background-color":"#ff7f7f"});
                x++;
                }
            else
                {   
                      $.ajax({
                                    url:"http://localhost/AvenirCulturel/Views/Verif/Check_mail.php?email="+email,
                                    success:function(data2)
                                    {
                                        if(data2==1 )
                                            {
                                                    $("#email_span").html("       Adresse mail existe deja "); 
                                                    $("#register_email").css({"background-color": "#ff7f7f"});
                                                
                                            }
                                        else
                                            {
                                                    $("#email_span").html(""); 
                                                    $("#register_email").css({"background-color": "#98FB98"});

                                            }
                                    }
                            });  
  checkUnique();

                }
     
    return x;
    }
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    function Password()
    {
        var x=0;
        var  mdp=$("#MDP").val();
            var onlyNumber=/^[0-9]*$/gm;
        if(mdp=='')
            {
                  $("#MDP").css({"background-color": "#ff7f7f"});
                  $("#mdp_span").css({"color": "#ff7f7f"});
                  $("#mdp_span").html("       Champs obligatoire "); 
x++;            }
        else{
            
                    $("#mdp_span").html(" "); 
                    $("#MDP").css({"background-color": ""});
            
            
            if(mdp.length>0&&mdp.length<6)
                {
                    $("#mdp_span").css({"color": "#ff7f7f"});
                    $("#mdp_span").html("       Mot de passe faible"); 
                    $("#MDP").css({"background-color": ""});

                }
            else if(mdp.length>6&&mdp.length<12)
                {
                    $("#mdp_span").css({"color": "#FFFF66"});
                    $("#mdp_span").html("       Mot de passe moyen"); 
                    $("#MDP").css({"background-color": "#FFFF66"});
                }
            
        else if(mdp.length>12)
            {
                   $("#mdp_span").css({"color": "#98FB98"});
                    $("#mdp_span").html("       Mot de passe fort"); 
                    $("#MDP").css({"background-color": "#98FB98"});
            }
            else{
                
            }   
        }
        return x;
    }
    
    
    
    
    
    function confirm()
    {
    var x=0;
        var  mdp=$("#MDP_confirm").val();
         $("#ee2").css({"color": "#ff7f7f"});
    if(mdp=='')
        {
                  $("#MDP_confirm").css({"background-color": "#ff7f7f"});
                  $("#ee2").html("       Champs obligatoire "); 
x++;        
        }
        else if(mdp!=$("#MDP").val())
            {
                
                             $("#MDP_confirm").css({"background-color": "#ff7f7f"});
                             $("#ee2").html("       Confirmation non valide"); 
x++;
            }
        else{
            
                            $("#MDP_confirm").css({"background-color": "#98FB98"});
                                $("#ee2").css({"color": "#98FB98"});
                             $("#ee2").html("       Mot de passe valide");   
        }
    
    return x;
    }
    

    
    
    function nom()
    {
    var x=0;
     var nom=$("#nom").val();
            var onlyletter=/^[A-Za-z]+$/;
        if(nom=='')
            {
                   $("#nom").css({"background-color": "#ff7f7f"});
                  $("#nom_span").css({"color": "#ff7f7f"});
                  $("#nom_span").html("    *"); 
                x++;
            }
        else if(nom.match(onlyletter)==null){
            
            
                $("#nom").css({"background-color": "#ff7f7f"});
                  $("#nom_span").css({"color": "#ff7f7f"});
                  $("#nom_span").html(""); 
            x++;
        }
        else
            {
                  $("#nom").css({"background-color": "#98FB98"}); 
                  $("#nom_span").html("");
            }
        
        
        
        return x;
    }
    
    function prenom()
    {
        var x=0;
        var prenom=$("#prenom").val();
            
            var onlyletter=/^[A-Za-z]+$/;
        if(prenom=='')
            {
                   $("#prenom").css({"background-color": "#ff7f7f"});
                  $("#prenom_span").css({"color": "#ff7f7f"});
                  $("#prenom_span").html("    *"); 
                x++;
            }
        else if(prenom.match(onlyletter)==null){
            
            
                $("#prenom").css({"background-color": "#ff7f7f"});
                  $("#prenom_span").css({"color": "#ff7f7f"});
                  $("#prenom_span").html(""); 
            x++;
        }
        else
            {
                  $("#prenom").css({"background-color": "#98FB98"}); 
                  $("#prenom_span").html("");
            }
        
        
        
        return x;

    }
    
    function adresse()
    {
        var x=0;
        var adresse=$("#adresse").val();
        
        
        if(adresse=='')
        {
             
            $("#adresse").css({"background-color": "#ff7f7f"});
                  $("#adresse_span").css({"color": "#ff7f7f"});
                  $("#adresse_span").html("       Champs obligatoire ");   
            x++;
            
        }else
        {
            $("#adresse").css({"background-color": "#98FB98"});
                                $("#adresse_span").css({"color": "#98FB98"});
                             $("#adresse_span").html("");              
                      
        }
        
        
        return x;
    }
    
    function tel()
    {
        
        var x=0;
        var tel=$("#tel").val();
         var onlyNumber=/^[0-9]*$/gm;
        
                
        if(tel=='')
        {
             
            $("#tel").css({"background-color": "#ff7f7f"});
                  $("#tel_span").css({"color": "#ff7f7f"});
                  $("#tel_span").html("       Champs obligatoire ");   
            x++;
        }
        
        
        else if((tel.length!=8) || (tel.match(onlyNumber)==null))
                {
                  $("#tel").css({"background-color": "#ff7f7f"});
                  $("#tel_span").css({"color": "#ff7f7f"});
                  $("#tel_span").html("       Saisir un numero valide ");
                x++;
                }
        
        else
        {
                                $("#tel").css({"background-color": "#98FB98"});
                                $("#tel_span").css({"color": "#98FB98"});
                                $("#tel_span").html("");              
                      
        }
        
        return x;
    }
     
    
    
    function mailsent()
            {
                    $("#div1").fadeIn(3000);
                    $("#div1").css({"display":"inherit"});
                    setTimeout(function(){$("#div1").fadeOut(3000); }, 4000);
            }
    
 
function verif(event)
    {
    var y=username()+Email()+Password()+confirm()+nom()+prenom()+adresse()+tel();

        
        if(y==0)
     {  
         
        
         $.ajax({
                  type:"POST",
                  url:"http://localhost/AvenirCulturel/Core/CompteCore.php",
                dataType:"html",   
             data:{register_user:$("#register_user").val(),register_email:$("#register_email").val(),mot_de_passe:$("#MDP").val(),nom:$("#nom").val(),prenom:$("#prenom").val(),adresse:$("#adresse").val(),tel:$("#tel").val(),datenaiss:$("#datenaiss").val()},
                
             beforeSend: function()
             {
            // $("#register_submit").html("<img src='ajax-loader.gif'>");
             },
             success:function(data)
                    {
                        
                    }    
             
         });
     

     }    
    else
        {          
                event.preventDefault();
        }

}
   
$('#register_user').keyup(username);
$('#register_email').keyup(Email);
$('#MDP').keyup(Password);
$('#MDP_confirm').keyup(confirm);
$('#nom').keyup(nom);
$('#prenom').keyup(prenom);
$('#adresse').keyup(adresse);
$('#tel').keyup(tel);
    
$("#register_submit").click(verif);

    
});