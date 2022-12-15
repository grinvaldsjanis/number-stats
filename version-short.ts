// Create a function that receives string with numbers, that are separated with commas, and return an object where you can see

// three lowest numbers
// three greatest numbers
// number who repeats the most.
// String example: "7,2,5,7,6,568,3,77,8,44,1,7,32,7,56,2,1,789,444,1,32,2,346,3,77,3,444,7,789,7,90,7,50,7,1"

function stringStats(numberString: string) {
    let numArray = numberString.split(",");
    let numArraySorted = numArray.map(element =>
        parseInt(element)).sort((a, b) =>
            (a - b));
    let noDuplicates = [...new Set(numArraySorted)];
    let threeLowest = noDuplicates.slice(0,3);
    let threeGreatest = noDuplicates.slice(-3).reverse();
    let repeatsTheMost = numArray.sort((a, b) =>
        numArray.filter(v => v === a).length
        - numArray.filter(v => v === b).length
    ).pop();

    return {
        threeLowest:  threeLowest,
        threeGreatest: threeGreatest,
        repeatsTheMost: repeatsTheMost
      };
}

console.log(stringStats("7,2,5,7,6,568,3,77,8,44,1,7,32,7,56,2,1,789,444,1,32,2,346,3,77,3,444,7,789,7,90,7,50,7,1"));
console.log(stringStats("7,39,201,2,0,1,82,7,3,65,8,54,0,30,29,1,6,72,63,8,4,93,927,2,53,7,84,9,40,39,2,7,12,51,2,7,38,934,9,47,4,56,2,52,72,8,4,85,495,8"));
