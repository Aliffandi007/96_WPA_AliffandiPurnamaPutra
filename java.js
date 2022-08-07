// 1. buatkan contoh reference variable
// 2. buatkan contoh destructive 4
// 3. reverse array [1, 3, 4, 7, 2, 9]
let array = [1, 3, 4, 7, 2, 9];
let n = array.length-1;

for(let i=0; i<=n/2; i++) {
  let temp = arr[i];
  arr[i] = arr[n-i];
  arr[n-i] = temp;
}
console.log(arr);
// 4. buatkan pengecekan tipe data :
// [1, "Web", true, {name: "John"}, null] => [number, string, boolean, object, null]

// 5 buatkan pattern
// *
// **
// ***
// ****
// *****

//1 
var a = 5;
var b = a;
b++;
console.log(b);
console.log(a);


//2
const number = ['one', 'two', 'three'];
const [red, green, blue] = number;
console.log(red);
console.log(green);
console.log(blue);

//3
let arr1 = [1, 3, 4, 7, 2, 9]
let flag = 1
for (let i = 0; i < arr1.length; i++) {
  if(flag == 1){
    flag = 0
  for(let j = 0; j <  arr1.length - i -1; i++)
  if(arr1[i] < arr1[i+1]){
    let temp = arr1[j]
    arr1[i] = arr1[j+1]
    arr1[i+1] = temp
    flag = 0
  }
  }
    console.log(arr1[i]);
}


// 3
let arrs =  [1, 3, 4, 7, 2, 9]
for (let i = arrs.length; i >= 0; i--) {
    console.log(arrs[i]);
}

// 3
let arr =  [1, 3, 4, 7, 2, 9]
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


//4
let data = [1,"Web",true, {name: "Jhon"}, null];
let dataBaru = [];
for (let item of data){
    dataBaru.push(typeof(item));
}
console.log(dataBaru)


//5
let length = 5
for (let i = 0; i < length; i++) {
  for (let j = 0; j < i; j++) {
    console.log('*');
  }
console.log('');
}

// 5
for (let i = 0; i < 5; i++) {
    let result = ''
    for (let j =0 ; j <= i; j++) {
        result += '*'
    }
    console.log(result);
}