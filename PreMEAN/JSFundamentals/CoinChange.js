function coinChange(n, obj) {
    var dollar = 0;
    var halfDollar = 0;
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    while (n > 0) {
        if (n % 100 >= 0) {
            dollar += 1;
            n = n - 100;
        }
        else if (n % 50 >= 0) {
            halfDollar += 1;
            n = n - 50;
        }
        else if (n % 25 >= 0) {
            quarter += 1;
            n = n - 25;
        }
        else if (n % 10 >= 0) {
            dime += 1;
            n = n - 10;
        }
        else if (n % 5 >= 0) {
            nickel += 1;
            n = n - 5;
        }
        else if (n % 1 >= 0) {
            penny += 1;
            n = n - 1;
        }
    }
    return ()
}
