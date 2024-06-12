import axios from "axios";
import redis from "../../../config/redis";
import { Service } from "typedi";

const TTL = 60;

@Service()
export class IpLookupService {

    public async getIPInfo(ip: string): Promise<JSON> {
        const cacheKey = "ip:${ip}";
        const cachedData = await redis.get(cacheKey);

        if (cachedData) {
            console.log("Retrieving data from cache")
            return JSON.parse(cachedData);
        }

        console.log("Retrieving data from external source")
        const { data } = await axios.get(`https://ipwho.is/${ip}`);

        await redis.set(cacheKey, JSON.stringify(data), 'EX', TTL);

        return data;
    }
}