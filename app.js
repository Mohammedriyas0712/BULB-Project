function chang()
{
    var imag=document.getElementById("bulb");
    if(imag.src.match("bulboff"))
    {
        imag.src="./images/bulbon.jpg";
    }
    else{
        imag.src="./images/bulboff.jpg";
    }
}