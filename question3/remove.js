const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {

    const files = fs.readdirSync(logsDir);
    
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`delete files...${file}`); 
        fs.unlinkSync(filePath); 
    });

    fs.rmdirSync(logsDir);
    console.log(`Deleted Logs directory.`);
} else {
    console.log(`Logs directory does not exist.`);
}