import {Schema, Document} from 'mongoose'
import * as mongoose from 'mongoose'

export interface ITask extends Document {
  _id: mongoose.Types.ObjectId
  card_id: mongoose.Types.ObjectId;
  title: string
}

const Task: Schema = new Schema(
  {
    card_id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
)

export default mongoose.model<ITask>('Task', Task);
