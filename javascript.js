function count (num1, num2, mark) {
    if (mark == '+') {
        return num1 + num2;
    } else {
        if (mark == '-') {
            return num1 - num2;
        } else { 
            if (mark == '*') {
                return num1 * num2;
        } else 
            if (mark == '/') {
                return num1 / num2;
        }
    }
         
    }   
}
console.log(count(7, 3, '-'))