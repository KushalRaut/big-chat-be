export const logConfig = {
    logMode: process.env.NODE_ENV === 'local' ? 'tiny' : 'combined',
    logFolder: process.env.LOG_FOLDER ?? './logs/',
};
