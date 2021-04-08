let num = [22, -3, 9, 33, -7];
let temp;
for (let i = 0; i <= num.length - 2; i++) {
    console.log('------------------');
    console.log('outer' + i + '(value:' + num[i] + ')');
    console.log(num);
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] < num[j]) {
            temp = num[i];
            num[i] = num[j];
            num[j] = temp;
            console.log('inner' + j + '(' + num[j] + ' with ' + num[i]) + ')';
            console.log(num);
            
        }

    }
    //console.log(num);

    console.log('--------------------------------------');
    console.log();
    console.log();

}
console.log('result'),
console.log(num);


