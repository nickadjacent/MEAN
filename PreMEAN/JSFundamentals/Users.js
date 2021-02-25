function userLanguages(arr) {
    for (var i = 0; i < arr.length; i++) {
        var fname = arr[i].fname;
        var lname = arr[i].lname;
        var langsArr = [];
        for (var j = 0; j < arr[i].languages.length; j++) {
            langsArr.push(arr[i].languages[j]);
        }
        // var langs = ""
        // for (var k = 0; k < langsArr.length; k++) {
        //     langs.concat(langsArr[k]);
        // }
        console.log(fname, lname, "knows", langsArr)

    }
}