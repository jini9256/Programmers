

function solution(array) {
    let answer = array.join('').split('').filter((value) => value === '7').length;
    return answer;
}