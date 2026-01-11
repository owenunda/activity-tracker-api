import { Schema, model, Document } from "mongoose";

export interface ActivityDocument extends Document {
  name: string;
  duration: number;
  date: Date;
  notes?:string
}

const ActivitySchema = new Schema<ActivityDocument>({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  notes: {
    type: String
  }
})


export const Activity = model<ActivityDocument>(
  "Activity",
  ActivitySchema
)