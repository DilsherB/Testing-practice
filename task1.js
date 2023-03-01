const stringLength = (string) => {
    let x = string.length;
    if(x > 0 && x < 11) return string.length;
    return false;
}
module.exports = stringLength;
