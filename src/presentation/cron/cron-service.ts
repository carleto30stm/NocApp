import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTime = () => void;



export class CronService {
    public static startJob( cronTime : CronTime, onTime: OnTime):CronJob {

        const job = new CronJob( cronTime, onTime);
        job.start();

        return job;
    }
}
