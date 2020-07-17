// Problem-01: Feet to Mile.
//             13200 feet = ?

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(13200);
console.log("13200 Feet =", result,"mile");

//  --------------------------------------- [ #SOLVED ]-------------------------------------------------



// Problem-02: Suppose...
//             To make 1 chair it takes 1 cu ft(cubic feet).
//             To make 1 table it takes 3 cu ft. 
//             To make 1 bed   it takes 5 cu ft. 

//             So,Total How much cu ft needed to make 6 chairs,2 tables and 3 beds?


function woodCalculator(chair,table,bed){
    var sum = ( chair*1 + table*3 + bed*5 );
    return sum;
}

var total = woodCalculator(6,2,3);
console.log("Total needed :", total , "cb ft(cubic feet) to make those furniture." );

//  --------------------------------------- [ #SOLVED ]-------------------------------------------------


// Problem-3:Imagine- A building that takes,
//           15 feet per floor to build the 1st           10        floors,
//           12 feet per floor to build the next          10(11-20) floors,  
//           10 feet per floor to build  on the upper of  20        floors,       

//           It takes 1000 brick to make 1 feet.
 


function brickCalculator(n){
    var firstFloor, secondFloor, thirdFloor
    if(n <= 10){
      return firstFloor = 15000 * n;
    }else if(n >= 11 && n <= 20 ){
        return secondFloor = (12000 * n)+ 30000 ;
    }else{
        return thirdFloor = (10000 * n) +70000;
    }
    }

    console.log("Bricks needed :", brickCalculator(20));


//  --------------------------------------- [ #SOLVED ]-------------------------------------------------



  


// Problem-04: Find the shortest name form an Array.


function tinyFriend(name){

    var tinyName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if( currentName.length < tinyName.length){
            tinyName = currentName ;
        }
    }
    return tinyName;
}

var smallestName =[ "sumon" , "rifa" , "kmWalid" , "oli", "raju"];
console.log("The shortest name is :" , tinyFriend(smallestName));

//  --------------------------------------- [ #SOLVED ]-------------------------------------------------





