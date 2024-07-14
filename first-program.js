const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
console.log(array)

const newArray = array.map((value)=>{
    if(value.trim() === ''){
        return 'empty string';
    }
    return value;
})
console.log(newArray);