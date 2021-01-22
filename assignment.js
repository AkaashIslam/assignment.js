       //kilometerToMeter

function kilometerToMeter(meter){
    var kilometer = meter * 1000;
    return kilometer;
}
var meter = kilometerToMeter(5);
console.log(meter);


        // budgtCalculator

function budgtCalculator(watch, phone, laptop){
    var result = watch + phone + laptop;
    return result;
}
var price = budgtCalculator(10, 50, 100,);
console.log(price);


       //hotelCost

function hotelCost(total){

    if(total < 11){
        var vara = 100 * total;
        return vara ;
    
    }
    if(total > 10 && total < 21){
        var second10days = 1000;
        var after20days = total - 10;
        var first10days = after20days * 80 ;
        var vara = first10days + second10days;
        return vara ;

    }
    else if (total > 20){
        var second10days = 1800;
        var after20days = total - 20;
        var first10days = after20days * 50;
        var vara = first10days + second10days;
        return vara;
    }
}
    var Fullcost = hotelCost(21);
    console.log(Fullcost);




 
    function megaFriend(friendsName) {
        var longestName = '';
        for (var i = 0; i < friendsName.length; i++) {
            if (longestName.length < friendsName[i].length) {
                longestName = friendsName[i];
            }
        }
        return longestName;
    }


    
      // MegaFriend


var getMegaFriend = megaFriend([
    'Shanto',
    'Ariful Islam Akaash',
    'Rozina',

]);
    console.log(getMegaFriend);


        
