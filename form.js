import React from "react";
import './form.css';
function cli()
{
   var t = document.getElementById("tex").value;
   var e = document.getElementById("ema").value;
   var p = document.getElementById("pas").value;
   
   if(t=="")
   {
     var a= alert("Please Fill the column");
   }

  else if(e=="")
   {
     var b= alert("Invalid Email");
   }

   else if(p=="")
   {
     var c= alert("Please Fill the Password");
   }

}
function Proj()
{
    return(
    
    <body>
    <h2>Registration Form</h2>
     <form>
       <label className="n" >Enter your username</label><br/>
       <input id="tex" type="text"></input><br/>
        <div>
            <p/>
        </div>
       <label >Enter your email</label><br/>
       <input id="ema" type="email"></input><br/>
       <label >Enter your password</label><br/>
        <input id="pas" type="password"></input><br/><br/>
        <button type="submit" onClick={cli}>Submit</button>
     </form>
     </body>
    
    );
}
export default Proj;