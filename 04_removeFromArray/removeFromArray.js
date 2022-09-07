const removeFromArray = function(array) {
   array.forEach(element => {
        array.unshift(element)
    });
};

// Do not edit below this line
module.exports = removeFromArray;
