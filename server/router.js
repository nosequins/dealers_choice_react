const router = require('express').Router();
const {Problem}= require('../db')

router.get('/', async(req, res, next)=>{
    try{
        const problem= await Problem.findAll();
        res.send(problem);

    }catch(err){
        next(err)
    }
});
router.get('/:id', async(req,res, next)=>{
    try{
        const selProblem= await Problem.findByPk(req.params.id);
        res.send(selProblem)

    }catch(err){
        next(err)
    }
})

router.post('/', async(req,res, next)=>{
    try{
        const newCreate= await Problem.create(req.body);
        res.send(newCreate);

    }catch(err){
        next(err)
    }

})

router.delete('/:id', async(req, res, next)=>{
    try{
        const delProblem= await Problem.findByPk(req.params.id);
        await delProblem.destroy();
        //this redirects to '/problems' because you are using it within
        //the `/problems` router
        //your delete routes should send back an http status code 204
        //following the RESTful api principles
        //https://restfulapi.net/http-status-204-no-content/
        //when using react, your data routes should not change the view on the frontend 
        res.redirect('/')

    }catch(err){
        next(err)
    }
})
module.exports= router
