function solution(my_string) {
    let answer = my_string.toLowerCase().split('');
    answer = answer.sort();
    return answer.join('');
}