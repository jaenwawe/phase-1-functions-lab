const walk = 264;
let beginning;
let distance;
let destinatin,destination ;
let start;

function distanceFromHqInBlocks (destinatin){
    let start = 42;
    if (destinatin > start)
    return destinatin - start;

    return start - destinatin;
}

 function  distanceFromHqInFeet(destinatin){

    return distanceFromHqInBlocks (destinatin) * walk;
 }

 function  calculatesFarePrice(start,destination){
    let tripFeet = distanceTravelledInFeet (start, destination);
    tripFeet = tripFeet - 400;
    let fare = 0;

    if (tripFeet <= 1600 && tripFeet > 0)
    {
        fare = tripFeet *.02;
        return fare;
    }

     else if (1600 < tripFeet &&  tripFeet <= 2100){
        fare = 25;
        return fare;
    }
    else  if (tripFeet >= 2100){
        
        return 'cannot travel that far';
    }
    return fare;
}

function distanceTravelledInFeet (start, destinatin){

    if (destinatin > start){
    return Math.abs((destinatin - start) * walk);

    }

    return (start - destinatin) * walk;
}

