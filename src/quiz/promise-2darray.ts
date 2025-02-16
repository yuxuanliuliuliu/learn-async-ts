/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        /** schedule the execution of the function to the next event loop cycle.
         * This is done using setTimeout() to simulate an asynchronous operations.
         * 
         * Replace the logic in the setTimeout() with the actual logic to sum the numbers
         * to understand the difference in execution with and without setTimeout()
         **/
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

function sum2DArray2(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log("Sum called ... ");

        if (arr.length === 0) {
            return reject("Cannot sum an empty array");
        }

        let rowPromises: Promise<number>[] = [];

        for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
            rowPromises.push(
                new Promise<number>((resolveRow) => {
                    setTimeout(() => {
                        let rowSum = 0;
                        for (let i = 0; i < arr[rowIndex].length; i++) {
                            rowSum += arr[rowIndex][i];
                        }
                        console.log(`Row ${rowIndex} sum: ${rowSum}`);
                        resolveRow(rowSum);
                    }, 0);
                })
            );
        }

        // Execute all row summations concurrently
        Promise.all(rowPromises)
            .then((rowSums) => {
                const totalSum = rowSums.reduce((acc, sum) => acc + sum, 0);
                resolve(totalSum);
            })
            .catch(error => reject(error));
    });
}



// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray2(array2D)
sumPromise1.then(
    (respone) => {
        console.log('sumPromise1', respone)
    }
)
.catch((error) => console.error(error));

const sumPromise2 = sum2DArray2([]);
sumPromise2.then(
    (respone) => {
        console.log('sumPromise2', respone)
    }
)
.catch((error) => console.error(error));
