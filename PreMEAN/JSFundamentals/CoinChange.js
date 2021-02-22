function coinChange(n, obj) {
    var change = {
        dollar: 0,
        halfDollar: 0,
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
    }

    while (n > 0) {
        if (n - 100 >= 0) {
            dollar += 1;
            n = n - 100;
            // console.log(dollar);
        }
    }
    while (n > 0) {
        if (n - 50 >= 0) {
            halfDollar += 1;
            n = n - 50;
            // console.log(halfDollar);
        }
    }
    while (n > 0) {
        if (n - 25 >= 0) {
            quarter += 1;
            n = n - 25;
            // console.log(quarter);
        }
    }
    while (n > 0) {
        if (n - 10 >= 0) {
            dime += 1;
            n = n - 10;
            // console.log(dime);
        }
    }
    while (n > 0) {
        if (n - 5 >= 0) {
            nickel += 1;
            n = n - 5;
            // console.log(nickel);
        }
    }
    while (n > 0) {
        if (n - 1 >= 0) {
            penny += 1;
            n = n - 1;
            // console.log(penny);
        }
    }
    return (change);
}