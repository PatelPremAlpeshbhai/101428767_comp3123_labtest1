const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log(`Created Logs directory.`);
}
process.chdir(logsDir);
for (let i = 0; i < 10; i++) {
    const logFileName = `log${i}.txt`;
    fs.writeFileSync(logFileName, `This is log file number ${i}.`);
    console.log(logFileName); 
}