import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';

interface UserI {
  name: string;
  email: string;
  password: string;
  checkPassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema<UserI>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// middlewares mongoose
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  const salt = await genSalt(10);

  this.password = await hash(this.password, salt);
});

UserSchema.methods.checkPassword = async function (passwordForm: string) {
  return await compare(passwordForm, this.password);
};

export const User = model<UserI>('User', UserSchema);
