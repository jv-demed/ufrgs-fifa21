export function quickSort(arr, item){
    if(arr.length <= 1){
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][item] >= pivot[item]){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left, item), pivot, ...quickSort(right, item)];
}