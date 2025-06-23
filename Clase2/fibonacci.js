function fibonacci(n) {
    let a = 0, b = 1, c;
    if (n < 0) {
        throw new Error("No permite valores Negativos.");
    }else{
        if (n === 0 || n === 1) {
        return 0;
        }
        else{
            for (let i = 0; i < n; i++) {
                if (i <= 1) {
                    console.log(i);
                }
                else {
                    c = a + b;
                    a = b;
                    b = c;
                    console.log(c);
                }
            }
        }
    }
}