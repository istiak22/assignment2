// feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}


// woodCalculator

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}


// Brick calculator

function brickCalculator(building){
    if(building>0 && building<=10){
        var totalBrick = (building*15)*1000; 
    }
    else if(building>0 && building<=20){
        var totalBrick = (((building-10)*12)*1000) + (10*15*1000); 
    }
    else if(building>0 && building>20){
        var totalBrick = ((building-20)*10)*1000 + ((20-10)*12*1000) + (10*15*1000); 
    }
    else{
        console.log("Invalid building");
    }
    return totalBrick;
}


// tinyFriend

function tinyFriend(names){
    var tinyName = names[0];
    for (var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < tinyName.length){
            tinyName = currentName;
        }
    }
    return tinyName;
}


