const dbConnect=require('./mongodb')

const updateData=async ()=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:'Eyeliner'},{$set:{name:'Maybeiline Eyeliner'}}
    )
    console.log("updated")
}
updateData();