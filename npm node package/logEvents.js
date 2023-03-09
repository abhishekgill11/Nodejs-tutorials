console.log('testing!');     

const { format } = require('date-fns');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const fspromises = require('fs').promises;
const path = require('path');


const logEvents = async (message) => {
    const dateTime = `${format(new Date(),'yyyyMMdd\tHH:mm:ss' )}`;
    const logItem = `${dateTime}\t${uuid()}${message}\n`;
    console.log(logItem);
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fspromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fspromises.appendFile(path.join(__dirname, 'logs', ' eventLog.txt' ), logItem)
    }catch (err) {
        console.log(err);
    }
}
module.exports = logEvents;
// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

// console.log('hello')
// console.log(uuid())