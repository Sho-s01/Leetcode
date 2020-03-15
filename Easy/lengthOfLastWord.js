var lengthOfLastWord = function (s) {
    let str = s.split(" ")
    let len = 0
    if (str.length == 0)
        return 0
    else if (!str[str.length - 1].length) {

        for (let i = 0; i < str.length; i++) {
            if (str[i].length == 0)
                continue;
            len = str[i].length

        }
        return len
    }
    else
        return str[str.length - 1].length

};
