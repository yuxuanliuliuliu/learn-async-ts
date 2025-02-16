import { error } from "console";

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function findNeg(arr: number[][]): Promise<number>{
    return new Promise((resolve, reject)=>{
        if (arr.length === 0) {
            return reject("Cannot sum an empty array");
        }
        let rowPromises: Promise<number>[] = [];
        let found = false;
        for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
        rowPromises.push(
            new Promise<number>((resolveRow, rejectRow) => {
                setTimeout(() => {
                    if (found) return;
                    for (let i = 0; i < arr[rowIndex].length; i++) {
                        if(arr[rowIndex][i] < 0){
                            if (!found) {
                                console.log(`Negative number found in Row ${rowIndex+=1}`);
                                found = true;
                            }
                            resolveRow(rowIndex);
                            return;
                        };
                    }
                    rejectRow('No negative number found');
                }, 0);
            })
        );
    }
    Promise.any(rowPromises)
    .then((rowIndex) => {
        resolve(rowIndex);
    })
    .catch((error)=> {
        console.log(error)
    });

    })
}

findNeg(array2D_3)