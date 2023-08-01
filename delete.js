const dbConnect=require('./mongodb')

const deleteData=async()=>{
  let data=await dbConnect();
  let result=await data.deleteMany(
    {name:'Nail Paint'}
  )
  if((await result).acknowledged){
    console.log("data deleted")
  }
}
deleteData();