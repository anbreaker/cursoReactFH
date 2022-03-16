import { Schema, model } from 'mongoose';

interface EventI {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  user: Schema.Types.ObjectId;
}

const EventSchema = new Schema<EventI>({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

EventSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();

  object.id = _id;

  return object;
});

export const Event = model<EventI>('Event', EventSchema);
