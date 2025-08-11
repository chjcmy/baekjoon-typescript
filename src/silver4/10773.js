// 로컬 테스트용 (readline 사용)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const k = parseInt(input[0]);
    const stack = [];
    
    for (let i = 1; i <= k; i++) {
        const num = parseInt(input[i]);
        
        if (num === 0) {
            stack.pop();
        } else {
            stack.push(num);
        }
    }
    
    const sum = stack.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
});

// 백준 제출용 (아래 주석 해제하고 위 코드 주석 처리)
/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const k = parseInt(input[0]);
const stack = [];

for (let i = 1; i <= k; i++) {
    const num = parseInt(input[i]);
    
    if (num === 0) {
        stack.pop();
    } else {
        stack.push(num);
    }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
*/
