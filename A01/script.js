let nums = prompt('Enter 2 number').split(' '),
    x = +nums[0],
    y = +nums[1];
    sum = 0;

if((x <= 0 || y <= 0) || (x >= 1000 || y >= 1000) || x>= y ){
        alert('არასწორი შუალედი');
} else{
        for (x; x<=y; x++){
                sum += x;
        }
        alert (sum);
}


