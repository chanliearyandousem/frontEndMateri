//Buat dalam bentuk IIFE dan Callback function
//buatlah fungsi yang menerima 2 input angka 
//dan mengembalikan nilai yang terbesar dari angka 
//yang dimasukan


function ReturnValue(desc1, desc2) {
    if (desc1 >= desc2) {
        return desc1;
    } else {
        return desc2;
    }
}

console.log(ReturnValue(12, 20));
