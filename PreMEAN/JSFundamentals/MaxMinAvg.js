function maxMinAvg(arr){
    var max = 0;
    var min = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        else if (arr[i] > max){
            max = arr[i];
        }
        avg += arr[i];
    }
    avg = avg / arr.length;
    return ("The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg );
}