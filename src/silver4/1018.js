/**
 * 백준 1018번 - 체스판 다시 칠하기
 * 난이도: Silver IV
 * 알고리즘 분류: 브루트포스
 * URL: https://www.acmicpc.net/problem/1018
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    solve();
    process.exit();
});

function solve() {
    const [n, m] = input[0].split(' ').map(Number);
    const board = [];
    
    for (let i = 1; i <= n; i++) {
        board.push(input[i]);
    }
    
    // 여기에 문제 해결 로직을 작성하세요
    
    // console.log(result);
}