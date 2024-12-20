import { CheckService } from "../domain/use-case/checks/check-service";
import { CronService } from "./cron/cron-service";


export class Server {
    public static start(){
        CronService.startJob(
            '*/5 * * * * *',
            () => {
                new CheckService(
                    () => console.log('ok'),
                    (error) => console.log(error)
                ).execute('https://www.google.com')
            }
        );
        
    }
}