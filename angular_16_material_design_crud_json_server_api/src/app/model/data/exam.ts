import { ExamResult } from "./exam-result";

export interface Exam {
    id?:number;
    examName?:string;
    examFee?:Number;
    examResults?:ExamResult[];
}