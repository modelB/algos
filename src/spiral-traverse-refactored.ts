// https://www.algoexpert.io/questions/Spiral%20Traverse

export function spiralTraverse(array: number[][]) {
    if (array.length < 1) return array;
    let wStart = 0;
    let hStart = 0;
    let wEnd = array[0].length - 1;
    let hEnd = array.length - 1;
    let currValue: number;
    const output = [];
    
    let moved = true;
    let longitude = 0;
    let latitude = -1;
    let direction = "r";
  
    while (moved) {
      moved = false;
      if (direction === "r") {
        while (latitude < wEnd) {
          moved = true;
          latitude++;
          currValue = array[longitude][latitude];
          output.push(currValue);
          if (hStart === hEnd) wStart++;
        }
        hStart++;
        direction = "d";
      }
      if (direction === "d") {
        while (longitude < hEnd) {
          moved = true;
          longitude++;
          currValue = array[longitude][latitude];
          output.push(currValue);
          if (wStart === wEnd) hStart++;
        }
        wEnd--;
        direction = "l";
      }
      if (direction === "l") {
        while (latitude > wStart) {
          moved = true;
          latitude--;
          currValue = array[longitude][latitude];
          output.push(currValue);
          if (hStart === hEnd) wEnd--;
        }
        hEnd--;
        direction = "u";
      }
      if (direction === "u") {
        while (longitude > hStart) {
          moved = true;
          longitude--;
          currValue = array[longitude][latitude];
          output.push(currValue);
          if (wStart === wEnd) hEnd--;
        }
        wStart++;
        direction = "r";
      }
    }
  
    return output;
  }
  
  console.log(
    spiralTraverse([
      [27, 12, 35, 26],
      [25, 21, 94, 11],
      [19, 96, 43, 56],
      [55, 36, 10, 18],
      [96, 83, 31, 94],
      [93, 11, 90, 16]
    ])
  );
  