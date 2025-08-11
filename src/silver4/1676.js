/**
 * 백준 1676번 - 팩토리얼 0의 개수
 * 난이도: Silver IV
 * 알고리즘 분류: 수학
 * URL: https://www.acmicpc.net/problem/1676
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (line) => {
    const n = Number(line);
    
    let count = 0;
    for (let i = 5; i <= n; i *= 5) {
        count += Math.floor(n / i);
    }
    
    console.log(count);
    rl.close();
});