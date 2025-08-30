let array = [10, 20, 30, 40, 50, 60, 70];
let reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
}
console.log(array, "ORIGINAL ARRAY");
console.log(reversed, "REVERSED ARRAY");

let name = "dinesh";
let reversedname ="";
for (let i = name.length -1; i >=0 ; i--){
    reversedname+=(name[i]);
}
console.log(name,"original name");
console.log(reversedname,"reversed name");