import {Schema, Document} from 'mongoose'
import * as mongoose from 'mongoose'

export interface ICards extends Document {
  _id: mongoose.Types.ObjectId
  title: string
}

// создаем класс на основе которого будет создавать объекты соотвествующие этой схеме
const Cards: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
  },
)

export default mongoose.model<ICards>('Card', Cards);
