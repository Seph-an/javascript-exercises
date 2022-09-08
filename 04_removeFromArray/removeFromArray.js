const removeFromArray = function(ari,...elementsToRemove) {
         /*rest operator (...) has been used to organize the parameters
          into an array called elementsToRemove for easy handling*/
        let forRemoval = [];
        for (let i = 0; i < elementsToRemove.length; i++) {
            //getting the index of the elements to be removed
            const toRemove = ari.indexOf(elementsToRemove[i]);
            //putting the indices of the elements to be removed into another array
            forRemoval.push(toRemove)
        }
        //A set is a collection of items which are unique & is declare as below.
        //A set can hold any value of any data types e.g the unique indices
        const indexSet = new Set(forRemoval);
        //Only elements which are not in the indexSet are returned
        const arrayWithValuesRemoved = ari.filter((value, i) => !indexSet.has(i));

        return arrayWithValuesRemoved;
    
    }

// Do not edit below this line
module.exports = removeFromArray;
