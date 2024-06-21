import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { routes } from './routes'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
dayjs.extend(customParseFormat)
console.log(dayjs('19:00:00', 'HH:mm:ss').toDate());
app.listen(process.env.PORT, () => {
    console.log('listenning', process.env.PORT)
})
