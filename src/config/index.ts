import {InvalidConfigurationError} from "./error";

function loadFromEnvironment() {

    const dbHost = process.env.DB_HOST;
    if (!dbHost) {
        throw new InvalidConfigurationError("Missing required database host parameter");
    }

    const dbUser = process.env.DB_USER;
    if (!dbUser) {
        throw new InvalidConfigurationError("Missing required database user parameter");
    }

    const dbPassword = process.env.DB_PASSWORD;
    if (!dbPassword) {
        throw new InvalidConfigurationError("Missing required database password parameter");
    }

    const dbName = process.env.DB_NAME;
    if (!dbName) {
        throw new InvalidConfigurationError("Missing required database name parameter");
    }

    const redisHost = process.env.REDIS_HOST;
    if (!redisHost) {
        throw new InvalidConfigurationError("Missing required redis host parameter");
    }

    const redisPort = process.env.REDIS_PORT;
    if (!redisPort) {
        throw new InvalidConfigurationError("Missing required redis port parameter");
    }

    const clientHost = process.env.CLIENT_HOST;
    if (!clientHost) {
        throw new InvalidConfigurationError("Missing required client host configuration");
    }

    const staticUrl = process.env.STATIC_URL;
    if (!staticUrl) {
        throw new InvalidConfigurationError("Missing required static url configuration");
    }

    return {
        serviceName: process.env.SERVICE_NAME || "ip-lookup-api",
        clientHost,
        env: process.env.NODE_ENV || "development",
        port: parseInt(process.env.PORT || "3000", 10),
        apiPrefix: process.env.API_PREFIX || "/",
        log: {
            level: "info",
            logDir: process.env.LOG_DIR || "/usr/src/app/logs",
        }
    };
}

export default loadFromEnvironment();

