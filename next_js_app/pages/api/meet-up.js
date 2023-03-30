// POST api and domain is /api/meet-up

import { MongoClient } from "mongodb";
async function HandlerAPI(req,res)
{

    if(req.method === 'POST')
    {
        const data = req.body;

        // const {titel,image,address,descripton} = data
       const client =  await MongoClient.connect('mongodb+srv://Ujjwal_TST:Ujjw@lTST$@cluster0.qii00ha.mongodb.net/meetups?retryWrites=true&w=majority');
       const db = client.db();

       const meetupCollection = db.collection('meetups');

       const result = meetupCollection.insertOne(data);

       console.log(result);

       client.close();

       res.status(201).json({messag:'Data inserted!!!!'})
    }

};

export default HandlerAPI;