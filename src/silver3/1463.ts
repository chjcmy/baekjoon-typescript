/**
 * 백준 1463번 - 1로 만들기
 * 난이도: Silver III
 * 알고리즘 분류: 다이나믹 프로그래밍
 * URL: https://www.acmicpc.net/problem/1463
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