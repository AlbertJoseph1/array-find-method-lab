const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

// Short method
function superbowlWin(record){
    const winningYear = record.find(item => item.result === 'W');
    return winningYear ? winningYear.year : undefined;
}

//Long Method
function superbowlWin(record){
    for (let i=0; i < record.length; i++){
        if(record[i].result === "W"){
            return record[i].year;
        }
    }
    return undefined;
}



// console.log(superbowlWin(record));