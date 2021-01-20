import { Schema, Document } from 'mongoose'
import * as mongoose from 'mongoose'

export interface ICard extends Document {
  _id: mongoose.Types.ObjectId
  title: string
}

// создаем класс на основе которого будет создавать объекты соотвествующие этой схеме
const Card: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
  },
)

export default mongoose.model<ICard>('Cards', Card);
