/**
 * 백준 2164번 - 카드2
 * 난이도: Silver IV
 * 알고리즘 분류: 큐
 * URL: https://www.acmicpc.net/problem/2164
 */

// copilot: disable
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (line) => {
    const N = Number(line);
    
    let queue = [];
    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }

    let head = 0;
    let tail = N;

    while (tail-head > 2) {
        head ++;
        queue[tail++] = queue[head++];
    }

    console.log(queue[tail-1]);
    rl.close();
});