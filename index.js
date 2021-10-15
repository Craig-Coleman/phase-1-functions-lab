function distanceFromHqInBlocks(location){
    if (location >=42){
        return location - 42;
    } else {
        return 42 - location;
    }
}

function distanceFromHqInFeet(location){
    if (location >=42){
        return (location - 42) * 264;
    } else {
        return (42 - location) * 264;
    }
}

function distanceTravelledInFeet(start, stop){
    return Math.abs((start - stop) * 264);
}

function calculatesFarePrice(start, destination){
    let startBlocks = start * 264;
    let destinationBlocks = destination * 264;
    if (Math.abs(startBlocks - destinationBlocks) <= 400){
        return 0;
    }else if (Math.abs(startBlocks - destinationBlocks) >=400 && Math.abs(startBlocks - destinationBlocks) <= 2000){
        return (Math.abs(startBlocks - destinationBlocks) - 400) * 0.02;
    }else if (Math.abs(startBlocks - destinationBlocks) >2000 && Math.abs(startBlocks - destinationBlocks) <= 2500){
        return 25;
    }else if (Math.abs(startBlocks - destinationBlocks) > 2500){
        return 'cannot travel that far';
    }
}
