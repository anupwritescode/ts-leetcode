function myAtoi(s: string): number {
    let s_ = s.trim();
    let i = 0;
    let negative = false;
    let num = "";

    if(s_[i] == '+' || s_[i] == '-') {
        negative = s_[i] == '-' ? true : false;
        i++;
    }
    for(;s_[i]>='0' && s_[i]<='9'; i++) {
        num += s_[i];
    }
    if(num == "") return 0;
    let result = parseInt(num) * (negative ? -1 : 1);
    if (result < 2**31 * -1) {
        result = 2**31 * -1;
    }
    else if (result > 2**31 - 1) {
        result = 2**31 - 1;
    }
    return result;
};