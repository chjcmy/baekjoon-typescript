/**
 * 백준 10773번 - 제로
 * 난이도: Silver IV
 * 알고리즘 분류: 스택
 * URL: https://www.acmicpc.net/problem/10773
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
    const k = parseInt(input[0]);
    
    // 여기에 문제 해결 로직을 작성하세요
    
    // console.log(result);
}