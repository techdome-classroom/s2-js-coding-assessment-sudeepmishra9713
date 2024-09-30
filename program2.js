/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let mapping = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let current = mapping[s[i]];
        let next = i + 1 < s.length ? mapping[s[i + 1]] : 0;

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};

module.exports = { romanToInt };