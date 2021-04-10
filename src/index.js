
require("dotenv").config();
import express from 'express';
const graphqlHTTP  = require('express-graphql').graphqlHTTP /*Para integrar graphQL con express*/
import schema from "./schema";
import { connect } from "./database";



// Initializations
const app = express();
connect(); //Llamar a la funcion que conecta a la BD

// Settings
app.set("port", process.env.PORT || 1200);

//ruta url para renderizar 
app.get('/',(req,res)=>{
    res.json({
        message:'Hello world'
    })
})

//const schema = {}

// GraphiQl es una herramienta para crear queries (Postman), simula una app cliente
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema:schema
}))

//app.listen(1200, () => console.log('Server Running on port 1200'))
// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });