function solution(my_string) {
    let answer = 0;
    const regex = /[a-zA-Z]/gi;
    let str = my_string.replaceAll(regex, " ").split(" ");
    for(let i of str) {
        if(Number(i)) answer += parseInt(i);
    }
    return answer;
}