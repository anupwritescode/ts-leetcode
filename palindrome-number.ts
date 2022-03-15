function isPalindrome(x: number): boolean {
    if(x<0 || (x % 10 == 0 && x != 0)) return false;
    let reversedNum = 0; 
    while(x > reversedNum) {
        reversedNum = reversedNum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return(x == reversedNum || x == Math.floor(reversedNum/10));
};