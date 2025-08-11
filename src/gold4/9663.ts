/**
 * 백준 9663번 - N-Queen
 * 난이도: Gold IV
 * 알고리즘 분류: 백트래킹
 * URL: https://www.acmicpc.net/problem/9663
 */

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input: string[] = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    solve();
    process.exit();
});

function solve(): void {
    const n = parseInt(input[0]);
    
    // 여기에 문제 해결 로직을 작성하세요
    
    // console.log(result);
}