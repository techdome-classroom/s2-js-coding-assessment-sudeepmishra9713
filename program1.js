/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let mapping = {")": "(", "}": "{", "]": "["};

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.length === 0 || mapping[char] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };


