/*
    Bacics of express: How to create HTTP server
    here we learnt to use express lib, 'app.use' method, 'app.listen' method,
    http protocols: get, post, put, delete
*/ 
const z = require("zod");

const express = require("express");
const app = express();

const users = [{
    name: "joe",
    username: "joe123@example.com",
    password: "123",
    kidneys:[{
        healthy: false,
        kidneyId: 1
    }]
},
{
    name: "ron",
    username: "ron123@example.com",
    password: "123",
    kidneys:[{
        healthy: false,
        kidneyId: 1
    }]
},
{
    name: "snow",
    username: "snow123@example.com",
    password: "123",
    kidneys:[{
        healthy: false,
        kidneyId: 1
    }]
}
];

//checking authorization of user
userExistsMiddleware=(req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const userExists = users.some(user => user.username === username 
        && user.password === password);
        if(!userExists){
        res.status(404).json({
            msg: "User doesn't exist"
        })
    }
    else{
        next();
    }
}
// checking valid kiydney input
iskidneyIdMiddleware=(req, res, next)=>{
    const kidneyId = req.body.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Invalid Kidneys"
        })
    }
    else{
        next();
    }
}

app.use(express.json())
app.use(userExistsMiddleware)

app.get('/', iskidneyIdMiddleware, function(req, res){
    
    // logic for getting info of kidneys: healthy, unhealthy
    const johnskidneys = users[0].kidneys;
    const numberofKidneys = johnskidneys.length;
    let numberofHealthykidneys = 0;
    for(let i=0; i<johnskidneys.length; i++){
        if(johnskidneys[i].healthy){
            numberofHealthykidneys = numberofHealthykidneys + 1;
        }
    }

    const numberofunHealthykidneys = numberofKidneys - numberofHealthykidneys;
    res.json({

        numberofKidneys,
        numberofHealthykidneys,
        numberofunHealthykidneys
        
    });


})

app.post('/',userExistsMiddleware, iskidneyIdMiddleware, function(req, res){
    const mySchema = z.boolean();
    const isHealthy = mySchema.parse(req.body.isHealthy);
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })

})

app.put("/",userExistsMiddleware, iskidneyIdMiddleware, function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/",userExistsMiddleware, iskidneyIdMiddleware, function(req, res){
    //only do this if only one bad kidney is there
    if(isatleastoneunHealthykidney()){

        const newKidneys = []
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done!"})
    }
    else{
        res.status(411).json({
            msg:"you have no bad kidneys"
        })
    }
})

function isatleastoneunHealthykidney(){
    let atleastOneunHealthykidneys = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneunHealthykidneys = true;
        }
    }
    return atleastOneunHealthykidneys;
}
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send("An internal server error occurred")
})
app.listen(3000);