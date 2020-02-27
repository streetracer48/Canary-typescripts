import {Router, Request, Response} from 'express'

const router = Router();
router.get('/login',(req,res) => {

res.send('hi there');
})

router.get('/login',(req:Request,res:Response) => {

    res.send(`<form method="post">

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <button type="submit">Login</button>
    </div>

  </form>`);
    })

    

router.post('/login', (req:Request, res:Response) =>{

 const { email, password} = req.body

 res.send(email + password)

})

export { router}