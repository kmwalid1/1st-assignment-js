function tinyFriend(names){
    var smallName = names[0].length;
for(var i=0; i < names.length; i++){
    var currentName = names[i];
    if( tinyFriend.length > currentName.length){
        smallName = currentName;
    }      
} 

return smallName;
}

var smallestName = tinyFriend(["walid","km","dadu"])
console.log(smallestName);