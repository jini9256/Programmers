function solution(n, k) {
    
    if(n>=10){
        k-= Math.floor(n/10)
        
        //Math.floor대신에 ~~ 부정연산자 두번을 써도 됨
    }
    
 return 12000*n + 2000*k
}