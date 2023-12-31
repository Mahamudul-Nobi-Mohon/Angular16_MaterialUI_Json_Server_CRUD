export interface Trainee {
    id?:number;
    courseID?:number;
    courseName?:string;
    traineeName?:string;
    traineeAddress?:string;
    email?:string;
    birthDate?:Date;
    picture?:string;
    isRunning?:boolean;
    examResults?:string[];
}