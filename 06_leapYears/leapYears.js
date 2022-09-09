const leapYears = function(n) {
    //converting the year to string and then gettig the last two characters
    /*The slice() method extracts a section of a string and returns it as a new string,
    without modifying the original string. On using a -ve sign i.e slice(-n) elements
    from the last end will be returned*/
    let lastTwoDigits = n.toString().slice(-2);

    if ((lastTwoDigits == "00") && (!n%100==0) && (n%400 ==0)) {
        return true;
    }else if((lastTwoDigits !== "00") && (n%4==0)){
        return true;
    }else{
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
