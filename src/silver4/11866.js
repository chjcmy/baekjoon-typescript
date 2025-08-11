/**
 * 백준 11866번 - 요세푸스 문제 0
 * 난이도: Silver IV
 * 알고리즘 분류: 큐
 * URL: https://www.acmicpc.net/problem/11866
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (line) => {
    const [n, k] = line.split(' ').map(Number);
    
    const queue = Array.from({length: n}, (_, i) => i + 1);
    const result = [];
    let idx = 0;
    
    while (queue.length > 0) {
        idx = (idx + k - 1) % queue.length;
        result.push(queue.splice(idx, 1)[0]);
    }
    
    console.log('<' + result.join(', ') + '>');
    rl.close();
});