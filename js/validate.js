function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
var lati = document.getElementById("Latitude").value;
var long = document.getElementById("Longitude").value;
var validLa;
var validLo;
var both;
 if(-90 <= lati && lati<=90 && long>=(-180) && long <= 180)
 {
   return true;
 }

 if(-90 >= lati || lati >= 90)
 {
   document.getElementById("latitudeE").innerHTML = "must be a valid Latityde(-90 to 90)"
   validLa = false;
 }else{
   validLa = true;
 }

 if(long <=(-180) || long >= 180)
 {
   document.getElementById("longitudeE").innerHTML = "must be a valid longitude(-180 to 180)"
   validLo = false;
 }else{
   validLo = true;
 }

 if(validLa==true &&validLo==true)
 {
   both = true;
 }else{
   both = false;
 }
   console.log('TODO - validate the longitude, latitude values before submitting');
  return both;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
  
};
