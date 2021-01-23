import {Schema, Document} from 'mongoose'
import * as mongoose from 'mongoose'

export interface ICard extends Document {
  _id: mongoose.Types.ObjectId
  title: string
}

// используем класс схемы который могус предоставляет для описания структцры данных
// (используем класс на основе которого будет создавать объекты соотвествующие этой схеме)
const Card: Schema = new Schema({
    title: {
      type: String,
      required: true,
    }
  }
)

// расширяем тип базовой модели своим интерфейсом ICard
// можно не экспортировать модель тк при вызове функции model() монгус запомнит данную модель и предоставит ее в дальнейшем
// (но в этом случае ее необходимо подключить / проимпортировать в index.ts чтобы мангус узнал а ее существовании в проекте)
export default mongoose.model<ICard>('Cards', Card);
