module.exports = function reverse(n) {
    return Number(
        [...String(n)]
            .slice(Math.sign(n) === -1 ? 1 : 0)
            .reverse()
            .join("")
    );
};
