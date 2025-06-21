const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', async () => {
    // console.log('Running a task every minute');
});

module.exports = {};
