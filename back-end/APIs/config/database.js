const mongoose = require ('mongoose');
mongoose.connect('mogodb://localhost/minhaApi', {
    userNewUrlParser:true,
    useUnifiedTopology:true
});

module.exports = mongoose;