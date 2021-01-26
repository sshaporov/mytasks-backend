import {Schema, Document} from 'mongoose'
import * as mongoose from 'mongoose'

export interface ITask extends Document {
  _id: mongoose.Types.ObjectId
  email: string
  password: string
  name?: string
}

const User: Schema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    },
  },
)

export default mongoose.model<ITask>('Users', User)
