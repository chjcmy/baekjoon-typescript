/**
 * 백준 4963번 - 섬의 개수
 * 난이도: Silver II
 * 알고리즘 분류: DFS/BFS
 * URL: https://www.acmicpc.net/problem/4963
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
    // 입력 처리 예시 (문제에 맞게 수정하세요)
    // const n = parseInt(input[0]);
    // const arr = input[1].split(' ').map(Number);
    
    // 여기에 문제 해결 로직을 작성하세요
    
    // console.log(result);
}