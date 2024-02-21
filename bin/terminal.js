function write(text) {
    process.stdout.write(text);
}

// Text color
for (let i = 0; i < 255; i++) {
    if (i % 16 === 0) {
        write('\n');
    }
    write(`\x1B[38;5;${i}]m`);
    write(i.toString().padEnd(4, ' '));
}

// Bg color
for (let i = 0; i < 255; i++) {
    if (i % 16 === 0) {
        write('\n');
    }
    write(`\x1B[48;5;${i}]m`);
    write(' ');
    write('\x1B[0m');
}

// Truecolor
for (let i = 0; i < 255; i++) {
    if (i % 16 === 0) {
        write('\n');
    }
    write(`\x1B[48;2;${i};0;0m`);
    write(' ');
    write('\x1B[0m');
}