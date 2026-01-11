import { Request, Response } from "express";
import { Activity } from "../models/activity.model";
import { count } from "node:console";


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

export const getEvents = async (req: Request, res: Response) => {
  try {
    const {
      type,
      userId,
      from,
      to,
      limit = '50'
    } = req.query;

    // query dinamica de para mongo
    const query: any = {};
    if (type) query.type = type;
    if (userId) query.userId = userId;

    if (from || to) {
      query.createdAt = {};
      if (from) {
        const fromDate = new Date(from as string);
        fromDate.setUTCHours(0, 0, 0, 0);
        query.createdAt.$gte = fromDate;
      }
      if (to) {
        const toDate = new Date(to as string);
        toDate.setUTCHours(23, 59, 59, 999);
        query.createdAt.$lte = toDate;
      }
    }

    const events = await Activity.find(query)
      .sort({ createdAt: -1 }) // el mas reciente primero // -1 -> DESC // 1 -> ASC
      .limit(Number(limit))

    res.json({
      count: events.length,
      events,
    });

  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' })
  }
}

export const getEventsStats = async (req: Request, res: Response) => {
  try {
    const stastByType = await Activity.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          type: '$_id',
          count: 1
        }
      }
    ]);


    const statsByDay = await Activity.aggregate([
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt"
            }
          },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          day: "$_id",
          count: 1
        }
      },
      {
        $sort: { day: 1 }
      }
    ]);

    res.json({
      byType: stastByType,
      byDay: statsByDay
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({message: "Error generatins stast"})
  }
}