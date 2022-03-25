// This function computes the interest as long as the entered number for principal is > 0
function compute()
{
		// get the value of principal from the principal element
    var principal = document.getElementById("principal").value;
    
    // get the value of rate from the rate element
    var rate = document.getElementById("rate").value;

		// get the value of years from the years element
    var years = document.getElementById("years").value;
    
    // if principal is less than 1, display an alert and focus the user on the principal box
    if (principal <= 0) {
    	alert("Enter a positive number!");
      document.getElementById("principal").focus();
    }
    // else the user entered a valid number for principal
		else {
    	// calculate the interest
      var interest = principal * years * rate /100;
			
      // convert years to a calendar year in the future
      var year = new Date().getFullYear()+parseInt(years);
			
      // update the inner HTML of the result element with the correct text, using spans linked to 
      // CSS to highlight the appropriate text and br's for line breaks
      document.getElementById("result").innerHTML= "If you deposit \<span class='hlspan'\>" + principal 			+ "\</span\>,\<br\> at an interest rate of \<span class='hlspan'\>" + rate + "</span\>.\<br\> You 			will receive an amount of \<span class='hlspan'\>" + interest + "</span\>,\<br\> in the year \<sp			an class='hlspan'\>" + year + "</span\>";
    }
}

// function that updates the rate slider of the webpage
function updateRate() 
{
		// get the rate value from the rate element
    var rateval = document.getElementById("rate").value;
    
    // change the inner text of the rate_val span to reflect the new value
    document.getElementById("rate_val").innerText=rateval;
}