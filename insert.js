const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [{
            name: 'Nail Paint', color: 'teal', price: 50
        },
        {
            name: 'Hair Extension', color: 'brown', price: 500
        },
        {
            name: 'Anklet', color: 'Rose Gold', price: 250
        }
    ]
    );
    if (result.acknowledged) {
        console.log("data inserted")
    }
}
insert();