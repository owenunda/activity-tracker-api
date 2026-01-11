import { Schema, model, Document } from "mongoose";

export interface ActivityDOcument extends Document {
  name: string;
  duration: number;
  date: Date;
  notes?:string
}