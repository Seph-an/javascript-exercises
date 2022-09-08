const leapYears = function(n) {
    //not every value divisible by 4 such as 1900 is a leap year
    //if last two digits !==00 && divisible by 4 = leap year
    //if last two digits == 00 && !n%100 == 0 && n%400==0 
    //getting the last two digits
    //converting the year to string and then gettig the last two characters
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
