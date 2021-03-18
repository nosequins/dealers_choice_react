const {db, syncAndSeed}= require('../db');
const path= require('path');
const express= require('express');
const {Problem}= require('../db');
const { urlencoded } = require('express');
const app= express();

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(urlencoded({extended:false}))
app.use(require('method-override')('_method'));
app.use('/problems', require('./router'))
app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'..', '/client', 'index.html' ))
})

 //this post should be in the router so shouldnt be here
app.post('/', async(req,res, next)=>{
    try{
        console.log(req.body)
        const newCreate= await Problem.create(req.body);
        res.send(newCreate);

    }catch(err){
        next(err)
    }

})



const init= async()=>{
    try{
        await syncAndSeed()
        const port= process.env.PORT || 3000
        app.listen(port,()=>(

            console.log(`listening on port ${port}`)
        ))

    }catch(err){
        console.log(err)
    }
}
init()
