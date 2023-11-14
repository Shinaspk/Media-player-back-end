//import json-server library in index.js file
const jsonServer=require('json-server')

//create json-server
const mediaPlayerServer=jsonServer.create()

//craete path to json file
const router=jsonServer.router('db.json')

//middleware to convert json to js

const middleware=jsonServer.defaults()

//use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//set up port for runninhg server(since like react json server also run in port 3000 ,innorder to avoid the clash we have to setup another port )
// we can use any port other than port 3000
const port =5000 ||  process.env.PORT  //if port 5000 is occupied it uses any other free port while opening in other website like netify

//listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayerServer started at ${port} and waiting for the requeest`);
})