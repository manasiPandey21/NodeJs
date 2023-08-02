const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerse');
    console.log('Connected to the database!');
    // Do other database-related operations here
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectToDatabase();

//mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: Number,
    

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "Lipstick",
        color: 'Pitch',
        price: 1000,
       
    });
    const result = await data.save();
    console.log(result);
}
//saveInDB();

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "Lipstick" },
        {
            $set: { price: 1550 }
        }
    )
    console.log(data)
}
//updateInDB();

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'Lipstick'})
    console.log(data);
}
deleteInDB();
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find()
    console.log(data);
}

findInDB();

