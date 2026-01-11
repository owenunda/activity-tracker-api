import { Schema, model, Document } from "mongoose";

export interface ActivityDocument extends Document {
  type: string;
  userId?: string;
  ip?: string;
  device?: string;

  // como mongo es felxible usamos mixed / record
  metadata?: Record<string, any>;

  // para errores u otros eventos
  code?: number;
  message?: string;
  service?: string;

  createdAt: Date;
}

const ActivitySchema = new Schema<ActivityDocument>(
  {
    type: {
      type: String,
      required: true,
      index: true, // lo usamos para los filtros
    },

    userId: {
      type: String,
      index: true,
    },

    ip: String,
    device: String,

    metadata: {
      type: Schema.Types.Mixed, // eso es clave para mongo { permite guardar cualquier estructura }
    },

    code: Number,
    message: String,
    service: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);



export const Activity = model<ActivityDocument>(
  "Activity",
  ActivitySchema
)