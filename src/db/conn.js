const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/donationItems", {
    useNewURlParser: true,
    useUnifiedTopology: true
        // useCreateIndex: true

}).then(() => {
    console.log(" database connection successfull");

}).catch((e) => {
    console.log(e);
});