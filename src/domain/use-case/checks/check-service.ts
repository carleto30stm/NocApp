import { log } from "console";


interface ChechServiceUseCase{
    execute(url : string) :Promise <boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error : string) => void;


export class CheckService implements ChechServiceUseCase{
    constructor(
        private readonly successCallback : SuccessCallback, 
        private readonly errorCallback : ErrorCallback){
   }
    public async execute (url : string): Promise < boolean> {
        try {
            const req  =  await fetch(url);
            if( !req.ok){
                throw new Error(`Error fetching ${url}`);             
            }
            this.successCallback();           
            return true;
        } catch (error) {
           this.errorCallback(`${error}`);
            return false;
        }
    }
}