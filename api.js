const express=require('express');
const dbConnect=require('./mongodb')
const app=express();

app.use(express.json());

app.get('/',async(req,resp)=>{
    let data=dbConnect();
    data=await data.find().toArray();
    resp.send({data})
});

app.post('/',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertOne(req.body)
    resp.send(result);
    console.log(result)
} );

app.put('/',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:req.body.name},
        {
        $set:req.body
        }
    )
    resp.send({result:"update"});
    console.log(result)
} );

app.delete("/:id",async (req,resp)=>{
    console.log(req.paramsms.id)
    const data=await dbConnect();
    const result=data.deleteOne({_id: new MongoDBCollectionNamespace.ObjectId(req.params.id)})
    resp.send("done")
})

app.listen(5000)