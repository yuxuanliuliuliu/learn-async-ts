const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sum(arr: number[][]): Promise<number> {
    console.log("Begin adding...");

    if (arr.length === 0) {
        throw new Error("Cannot sum an empty array");
    }

    let totalSum = 0;

    for (const row of arr) {
        totalSum += await sumRow(row);
    }

    return totalSum;
}

async function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            const rowSum = row.reduce((acc, num) => acc+num, 0);
            console.log(`row sum: ${rowSum}`)
            resolve(rowSum)
        }, 0)
    })
}

async function sumMain(): Promise<void> {
    try{const result = await sum(array2D_1);
        console.log(`result ${result}`)}
    catch(err) {
        console.log(`sum fails`, err)
    }
}
sumMain();