// https://www.algoexpert.io/questions/Spiral%20Traverse

export function spiralTraverse(array: number[][]) {
  if (array.length < 1) return array;

  let wEnd = array[0].length - 1;
  let hEnd = array.length - 1;

  const covered: Record<string, any> = {};
  let currValue: number;
  const output = [];
  
  let moved = true;
  let longitude = 0;
  let latitude = -1;
  let direction = "r";

  while (moved) {
    moved = false;
    if (direction === "r") {
      while (latitude < wEnd && !covered[`${longitude}.${latitude + 1}`]) {
        moved = true;
        latitude++;
        currValue = array[longitude][latitude];
        output.push(currValue);
        covered[`${longitude}.${latitude}`] = true;
      }
      direction = "d";
    }
    if (direction === "d") {
      while (longitude < hEnd && !covered[`${longitude+1}.${latitude}`]) {
        moved = true;
        longitude++;
        currValue = array[longitude][latitude];
        output.push(currValue);
        covered[`${longitude}.${latitude}`] = true;
      }
      direction = "l";
    }
    if (direction === "l") {
      while (latitude > 0 && !covered[`${longitude}.${latitude-1}`]) {
        moved = true;
        latitude--;
        currValue = array[longitude][latitude];
        output.push(currValue);
        covered[`${longitude}.${latitude}`] = true;
      }
      direction = "u";
    }
    if (direction === "u") {
      while (longitude > 0 && !covered[`${longitude-1}.${latitude}`]) {
        moved = true;
        longitude--;
        currValue = array[longitude][latitude];
        output.push(currValue);
        covered[`${longitude}.${latitude}`]= true;
      }
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
