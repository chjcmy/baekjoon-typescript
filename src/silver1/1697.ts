/**
 * 백준 1697번 - 숨바꼭질
 * 난이도: Silver I
 * 알고리즘 분류: BFS
 * URL: https://www.acmicpc.net/problem/1697
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
    const [n, k] = input[0].split(' ').map(Number);
    
    // 여기에 문제 해결 로직을 작성하세요
    
    // console.log(result);
}