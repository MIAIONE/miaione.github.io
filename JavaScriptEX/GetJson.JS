function GetJsonValue(obj,name){
    var result = null;
    var value  = null;
    for(var key in obj){        
        value = obj[key];
        if(key == name){
        return value;
    } else {
        if( typeof value == "object" ){
        result = GetJsonValue(value,name);
        }
    }
}
return result;
}