/**
 * 백준 1920번 - 수 찾기
 * 난이도: Silver IV
 * 알고리즘 분류: 이분탐색
 * URL: https://www.acmicpc.net/problem/1920
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
    if (input.length === 4) {
        const n = parseInt(input[0]);
        const arr = input[1].split(' ').map(Number);
        const m = parseInt(input[2]);
        const queries = input[3].split(' ').map(Number);
        
        const set = new Set(arr);
        const result = queries.map(q => set.has(q) ? 1 : 0);
        
        console.log(result.join('\n'));
        rl.close();
    }
});