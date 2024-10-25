let mongoose = require("mongoose");
let dbURL = "mongodb://localhost:27017/db_latihan_uts"
// let dbURi = "mongodb=serv://paw2:si@paw2.iendmj6.mongodb.net/?retryWrites=true&w=majority&appName=paw2"
// let dbURI =
//   "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURI, {
    //useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
});

mongoose.connection.on("error", (error) => {
    console.log("connection Error: " + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("disconnected from mongodb ");
});