/**
 * Created by falconwing87 on 11/17/2015.
 */
$(document).ready(function() {
    $("#loggin").click(function () {
        $("#logginBox").toggle();
    });

    var Users = ["Falcon"];
    var Password = ["moo"];

    function logginCheck(form){
        var u = false;
        var p = false;
        for (i=0;i<Users.length;i++){
            if (form.UserName == Users[i]){
                u = true;
                break;
            }
        }
        for (i=0;Passwords.length;i++){
            if (form.Password == Passwords.length[i]){
                p = true;
                break;
            }
        }
        if (u && p){

            return true;
        }else{
            $("check").toggle();
            return false;
        }
    }
});