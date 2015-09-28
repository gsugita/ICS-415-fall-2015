/**
 * Created by falconwing87 on 9/27/2015.
 */

$(document).ready(function() {
    $("#FAQ1").click(function () {
        $("#FAQCheck1").toggle();
        $("#FAQ1M").toggle();
        $("#FAQ1P").toggle();
    });

    $("#FAQ2").click(function () {
        $("#FAQCheck2").toggle();
        $("#FAQ2M").toggle();
        $("#FAQ2P").toggle();
    });

    $("#FAQ3").click(function () {
        $("#FAQCheck3").toggle();
        $("#FAQ3M").toggle();
        $("#FAQ3P").toggle();
    });

    $("#FAQ4").click(function () {
        $("#FAQCheck4").toggle();
        $("#FAQ4M").toggle();
        $("#FAQ4P").toggle();
    });

    $("#FAQ5").click(function () {
        $("#FAQCheck5").toggle();
        $("#FAQ5M").toggle();
        $("#FAQ5P").toggle();
    });
});

function validateForm(){
    var searchURL = "";
    var number = 0;
    var xhr = new XMLHttpRequest()
    searchURL = document.getElementById("address").value;

    try{
        xhr.open ("GET",searchURL,false);
        xhr.onload = function(){
            number = document.links.length;
        }
        xhr.send (null);
    }catch (e){
        window.alert ("Cant load");
    }

    document.getElementById("show").innerHTML = "" + number;

    return false;
}