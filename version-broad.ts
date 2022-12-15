function stringStats(numberString: string) {
    let numArray = numberString.split(",").map(element => parseInt(element));
    let numArraySorted = numArray.sort((a, b) => (a - b));
    //
    let noDuplicates:number[] = [];
    numArraySorted.forEach((num) => {
        if (!noDuplicates.includes(num)) {
            noDuplicates.push(num);
        }
    });
    //
    let threeLowest = noDuplicates.slice(0, 3);
    let threeGreatest = noDuplicates.slice(-3).reverse();
    //
    function repeatsTheMost(arr:number[]){
        arr.sort();
        let mostCount = 1, result = arr[0], currCount = 1;
           
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] == arr[i - 1])
                currCount++;
            else
                currCount = 1;
            
            if (currCount > mostCount)
            {
                mostCount = currCount;
                result = arr[i - 1];
            }
        }
        if (mostCount !== 1) {
            return result;
        } else {
            return "none";
        }
    }


    return {
        threeLowest: threeLowest,
        threeGreatest: threeGreatest,
        repeatsTheMost: repeatsTheMost(numArray)
    };
}

console.log(stringStats("7,2,5,7,6,568,3,77,8,44,1,7,32,7,56,2,1,789,444,1,32,2,346,3,77,3,444,7,789,7,90,7,50,7,1"));
console.log(stringStats("7,39,201,2,0,1,82,7,3,65,8,54,0,30,29,1,6,72,63,8,4,93,927,2,53,7,84,9,40,39,2,7,12,51,2,7,38,934,9,47,4,56,2,52,72,8,4,85,495,8"));
console.log(stringStats("7,35,40,39,2"))
