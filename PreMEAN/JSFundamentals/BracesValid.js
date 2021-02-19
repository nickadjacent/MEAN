function bracesValid(str) {
    var arr = [];
    var dict = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            arr.push(str[i]);
        }
        else if (str[i] !== dict[arr.pop()]) {
            return false;
        }
    }
    if (arr.length !== 0) {
        return false;
    }
    return true;
}