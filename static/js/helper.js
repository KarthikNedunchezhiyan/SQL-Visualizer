function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function parseTabSeparatedTable(input) {
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

function parseMarkdownTable(input) {
    const inputSplit = input.split("\n");

    const tableData = {
        head: inputSplit[1].split("|").map(val => val.trim()).filter(val => val.trim().length),
        rows: []
    };

    for (let i = 3; i < inputSplit.length - 1; ++i) {
        tableData.rows.push(inputSplit[i].split("|").map(val => val.trim()).filter(val => val.trim().length));
    }

    return tableData;
}

function cvtTableDataFromRaw(input) {
    if (input.trim().startsWith("+")) return parseMarkdownTable(input);
    return parseTabSeparatedTable(input);
}

function deepClone(target) {
    return JSON.parse(JSON.stringify(target));
}