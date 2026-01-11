import { Request, Response } from "express";
import { Activity } from "../models/activity.model";

export const createActivity = async (req: Request, res: Response) => {
  try {
    const event = await Activity.create(req.body);
    res.status(201).json({ success: true, data: event });
  } catch (error) {
    console.error("Error saving event:", error);
    return res.status(400).json({
      success: false,
      message: "Invalid event data",
    });
  }
}