function solution(sides) {
    let answer = 0;
    sides.sort((a,b) => a - b);
    let sum = sides[0] + sides[1];
    if(sum > sides[2]) return 1;
    return 2;
}