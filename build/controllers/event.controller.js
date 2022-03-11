"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.createEvent = exports.getEvents = void 0;
const Event_model_1 = require("../models/Event.model");
const getEvents = async (req, res) => {
    try {
        const events = await Event_model_1.Event.find().populate('user', 'name');
        res.json({ ok: true, events });
    }
    catch (error) {
        res.status(500).json({ error: 'Talk admin' });
    }
};
exports.getEvents = getEvents;
const createEvent = async (req, res) => {
    try {
        const event = new Event_model_1.Event(req.body);
        if (!req.uid)
            throw new Error();
        event.user = req.uid;
        const eventSave = await event.save();
        res.json({ ok: true, eventSave });
    }
    catch (error) {
        res.status(500).json({ error: 'Talk admin' });
    }
};
exports.createEvent = createEvent;
const updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const { uid } = req;
        const event = await Event_model_1.Event.findById(eventId);
        if (!event || !uid)
            return res.status(404).json({ ok: false, error: 'Event not found' });
        if (event.user.toString() !== uid.toString())
            return res.status(401).json({ ok: false, error: 'Without privileges.' });
        const newEvent = {
            ...req.body,
            user: uid,
        };
        const eventUpdate = await Event_model_1.Event.findByIdAndUpdate(eventId, newEvent, { new: true });
        res.json({ ok: true, eventUpdate });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, error: 'Talk admin' });
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const { uid } = req;
        const event = await Event_model_1.Event.findById(eventId);
        if (!event || !uid)
            return res.status(404).json({ ok: false, error: 'Event not found' });
        if (event.user.toString() !== uid.toString())
            return res.status(401).json({ ok: false, error: 'Without privileges.' });
        const deleteEvent = await Event_model_1.Event.findByIdAndDelete(eventId);
        res.json({ ok: true, deleteEvent });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, error: 'Talk admin' });
    }
};
exports.deleteEvent = deleteEvent;
//# sourceMappingURL=event.controller.js.map