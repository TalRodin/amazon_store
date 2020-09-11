const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors");
const { request } = require('express');
const { response } = require('express');

const stripe = require('stripe')('sk_test_51HQ3u0LnTe1yIHph6HCtUCuDXAIU4Px4ndEblfC237Z9MZ5IiTmEltORIWGofusk4n4i8rOC94SiUBF6RSGmqg0800dhqnIAOw')

//API

//App config
const app = express()

//Middlewares
app.use(cors({origin: true}))
app.use(express.json())

//API routes
app.get('/', (request, response)=>response.status(200).send('hello'))

app.post('/payments/create', async(request,response)=>{
    const total=request.query.total
    console.log('payment request received',total)
    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency:'usd'
    })
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
        
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/store-e90d0/us-central1/api