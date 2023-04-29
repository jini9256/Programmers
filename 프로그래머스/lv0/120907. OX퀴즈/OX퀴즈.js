function solution(quiz) {
    return quiz.map(el => {
        let [a1, a2] = el.split('=');
        a1 = eval(a1);
        if(a1 == a2) {
            return "O";
        }
        return "X";
    });
}