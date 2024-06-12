import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import config from '../../config';

const logTransports: any = [
    new transports.Console(),
];

if (config.log.logDir) {
    logTransports.push(
        new DailyRotateFile({
            filename: `${config.log.logDir}/log/${config.serviceName}-%DATE%.log`,
            datePattern: 'YYYY-MM-DD-HH-MM',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    );
}

const logger = createLogger({
    level: config.log.level,
    format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.json(),
    ),
    transports: logTransports,
});

export default logger;
