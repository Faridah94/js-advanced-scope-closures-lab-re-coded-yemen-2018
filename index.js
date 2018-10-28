function produceDrivingRange(range){
  return function(block1, block2){
   let block=parseInt(block1)-parseInt(block2);

    const absolute =  Math.abs(block);
      

    let DIS = absolute(block);
    const differ = function(range,DIS){
      let result = range-DIS;
      if(result < 0){result *= -1;}
      return result
    }

    let difference = differ(range, distance);
    if(distance <= range){
      return "within range by " + (difference);
    }
    else
    {
      return (difference) + " blocks out of range";

    }

  }
}

function produceTipCalculator(tip){
  return function(price){
    return price*tip;

  }
}
