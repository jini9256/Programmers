function solution(n) {
    var answer = 0;
    for(let i = 1 ; i <= n; i++){
        if(i%3 == 0 || (i + "").includes("3")){
            n++;
            continue;
        }
        answer = i;
    }
    return answer;
}