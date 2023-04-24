function solution(s) {
    s = s.split(" ");
    let temp = [];
    for (let i of s) {
        if (i === 'Z') {
            temp.pop();
        } else {
            temp.push(Number(i));
        }
    }
    return temp.reduce((acc, cur) => acc + cur, 0);
}