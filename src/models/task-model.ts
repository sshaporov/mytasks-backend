import {Schema, Document} from 'mongoose'
import * as mongoose from 'mongoose'

export interface ITask extends Document {
  _id: mongoose.Types.ObjectId
  card_id: mongoose.Types.ObjectId
  title: string
  checked: boolean
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
    checked: {
      type: Boolean,
      required: false
    },
  },
)

// первый аргумент 'Tasks' - уникальное имя коллекции, второй аргумент Task - схема, которая используется для создания модели
export default mongoose.model<ITask>('Tasks', Task)
