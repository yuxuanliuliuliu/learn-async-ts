function doStep1(init: number, callback: (result: number) => void) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init: number, callback: (result: number) => void) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init: number, callback: (result: number) => void) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();
  