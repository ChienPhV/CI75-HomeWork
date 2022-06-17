//1.	Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

function reverseStr(str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
}

console.log(reverseStr("abcdef"));

//2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:
let X=[1, 2, 3, 5, 4, 2, 6, 4]
let check = X.filter((element, index) => {
    return X.indexOf(element) === index;
});

console.log(check);


//3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:

function find(arr){
    arr.sort();
    let max =[0,0];
    let count =1;
    for (let i = arr.length-1; i > 0; --i) {
        if (arr[i] == arr[i-1]) ++count; 
        else{
          
             if (max[1] < count){ 
                  max[0] = arr[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "value "+max[0]+", count "+max[1]);
}

let arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
find(arr);

//4.	Viết một ứng dụng web danh bạ có giao diện và yêu cầu như sau:


