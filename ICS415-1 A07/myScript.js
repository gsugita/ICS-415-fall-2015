/**
 * Created by falconwing87 on 9/20/2015.
 */
function getClasses(elem){
    var name = elem.className;
    return name.split(" ");
}

function addClass(elem, className){
    var nameArray = getClasses(elem);
    var nameCat;
    for (var i = 0; i<nameArray.length; i++){
        if (i == 0){
            nameCat = nameArray[i];
        }else{
            nameCat = nameCat + " " + nameArray[i];
        }

        if (nameArray[i] == className){
            return nameArray;
        }
    }
    nameCat = nameCat + " " + className;
    elem.className = nameCat;
    return getClasses(elem);
}