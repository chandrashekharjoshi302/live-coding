
const mongoose = require("mongoose")

dotenv.config()

const connection = mongoose.connect(process.env.MongoUrl)


module.exports = 
{
    connection
}
