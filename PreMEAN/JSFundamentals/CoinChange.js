function coinChange(n, obj) {
    var change = {
        hundredDollar: 0,
        fiftyDollar: 0,
        twentyDollar: 0,
        tenDollar: 0,
        fiveDollar: 0,
        twoDollar: 0,
        dollar: 0,
        halfDollar: 0,
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
    }

    for (var i = n; i > 0;) {
        if (i - 10000 >= 0) {
            change.hundredDollar += 1;
            i = i - 10000;
        }
        if (i - 5000 >= 0) {
            change.fiftyDollar += 1;
            i = i - 5000;
        }
        if (i - 2000 >= 0) {
            change.twentyDollar += 1;
            i = i - 2000;
        }
        if (i - 1000 >= 0) {
            change.tenDollar += 1;
            i = i - 1000;
        }
        if (i - 500 >= 0) {
            change.fiveDollar += 1;
            i = i - 500;
        }
        if (i - 200 >= 0) {
            change.twoDollar += 1;
            i = i - 200;
        }
        if (i - 100 >= 0) {
            change.dollar += 1;
            i = i - 100;
        }
        else if (i - 50 >= 0) {
            change.halfDollar += 1;
            i = i - 50;
        }
        else if (i - 25 >= 0) {
            change.quarter += 1;
            i = i - 25;
        }
        else if (i - 10 >= 0) {
            change.dime += 1;
            i = i - 10;
        }
        else if (i - 5 >= 0) {
            change.nickel += 1;
            i = i - 5;
        }
        else if (i - 1 >= 0) {
            change.penny += 1;
            i = i - 1;
        }
    }

    return Object.entries(change).forEach(([key, value]) => filter(val => val.value > 0));

    // return Object.entries(change).filter(val => val.value > 0);
}
