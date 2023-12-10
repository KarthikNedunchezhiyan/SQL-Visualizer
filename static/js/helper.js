function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function cvtTableDataFromRaw(input) {
    const inputSplit = input.split("\n");

    const tableData = {
        head: inputSplit[0].split("\t").map(val => val.trim()),
        rows: []
    };

    for (let i = 1; i < inputSplit.length; ++i) {
        tableData.rows.push(inputSplit[i].split("\t").map(val => val.trim()));
    }

    return tableData;
}