function solution(array, n) {
    let answer = 0;
    let min = Infinity;
    array.sort((a,b) => a -b);
    for(let i = 0; i < array.length; i++) {
        if(min > Math.abs(n - array[i])) {
            min = Math.abs(n - array[i]);
            answer = array[i];
        }
    }
    return answer;
}