const cron = require('node-cron');
import logger from '../config/logger';

// Schedule a task to run every minute
cron.schedule('* * * * *', async () => {
    logger.info('🔄 Cron job running every minute to keep Render free version awake');
});

module.exports = {};
