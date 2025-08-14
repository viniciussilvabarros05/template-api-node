import express , {urlencoded} from "express"
import cors from 'cors'
import helmet from 'helmet'

const server = express();
server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(urlencoded({extended:true}))

server.listen(process.env.PORT || 3000, ()=>{
    console.log(`Servidor rodando em ${process.env.BASE_URL}`)
})