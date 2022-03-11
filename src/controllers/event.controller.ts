import { Request, Response } from 'express';
import { CustomRequest } from '../middlewares/validateJwt';

import { Event } from '../models/Event.model';

export const getEvents = async (req: CustomRequest, res: Response) => {
  try {
    const events = await Event.find().populate('user', 'name');

    res.json({ ok: true, events });
  } catch (error) {
    res.status(500).json({ error: 'Talk admin' });
  }
};

export const createEvent = async (req: CustomRequest, res: Response) => {
  try {
    const event = new Event(req.body);

    if (!req.uid) throw new Error();
    event.user = req.uid;

    const eventSave = await event.save();

    res.json({ ok: true, eventSave });
  } catch (error) {
    res.status(500).json({ error: 'Talk admin' });
  }
};

export const updateEvent = async (req: CustomRequest, res: Response) => {
  try {
    const eventId = req.params.id;
    const { uid } = req;

    const event = await Event.findById(eventId);

    if (!event || !uid)
      return res.status(404).json({ ok: false, error: 'Event not found' });

    if (event.user.toString() !== uid.toString())
      return res.status(401).json({ ok: false, error: 'Without privileges.' });

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventUpdate = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

    res.json({ ok: true, eventUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, error: 'Talk admin' });
  }
};

export const deleteEvent = async (req: CustomRequest, res: Response) => {
  try {
    const eventId = req.params.id;
    const { uid } = req;

    const event = await Event.findById(eventId);

    if (!event || !uid)
      return res.status(404).json({ ok: false, error: 'Event not found' });

    if (event.user.toString() !== uid.toString())
      return res.status(401).json({ ok: false, error: 'Without privileges.' });

    const deleteEvent = await Event.findByIdAndDelete(eventId);

    res.json({ ok: true, deleteEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, error: 'Talk admin' });
  }
};
