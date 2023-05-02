function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => a-b);
    let num1 = numbers[0] * numbers[1];
    let num2 = numbers[numbers.length - 2] * numbers[numbers.length - 1];
    answer = num1 > num2 ? num1 : num2;
    return answer;
}