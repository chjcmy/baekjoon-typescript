/**
 * 백준 문제 템플릿
 * 문제 번호: 
 * 문제 제목: 
 * 난이도: 
 * 알고리즘 분류: 
 * URL: https://www.acmicpc.net/problem/
 */

// 방법 1: readline 사용 (디버깅할 때 편함)
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
    // 입력 처리
    // const n = parseInt(input[0]);
    // const arr = input[1].split(' ').map(Number);
    
    // 문제 해결 로직 작성
    
    // 결과 출력
    // console.log(result);
}

// 방법 2: fs.readFileSync 사용 (백준 제출용)
/*
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solve() {
    // 입력 처리
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    
    // 문제 해결 로직 작성
    
    // 결과 출력
    console.log(result);
}

solve();
*/