export const PORT = 3010
const MONGO_DB_USER_NAME = 'admin'
const MONGO_DB_PASSWORD = process.env.MONGO_DB_USER_PASSWORD || 'Passw0rd'
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'cluster0.ahetv.mongodb.net/myTasks'
export const MONGO_URI = `mongodb+srv://${MONGO_DB_USER_NAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`
export const MONGOOSE_CONNECT_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
export const JWT_SECRET = 'MyTasks app'