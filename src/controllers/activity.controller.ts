import { Request, Response } from "express";
import { Activity } from "../models/activity.model";

export const createActivity = async(req: Request, res: Response) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating activity',
      error
    })
  }
}