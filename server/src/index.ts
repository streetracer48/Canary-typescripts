import express, { Request, Response,} from "express"
import{router} from './routes/loginRoute'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended:true}))
app.use(router)
  
app.listen(4000,() =>{
    console.log('Listening on port 4000')
})

