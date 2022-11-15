function solution(denum1,num1,denum2,num2) {

    let answer = [0,1];

    let first = num1*denum2 + num2*denum1
    let second = num1*num2

    let cd = (a,b) => (a%b === 0 ? b : cd(b,a%b));
    let min=cd(first,second);    

    answer[0] = first / min;
    answer[1] = second / min;


    return answer;
}