const {Schema, model, mongoose}= require("mongoose");



const OrdersSchema=new Schema({
    orderId: String,
    name: String,
    price: Number,
    qty:Number,
    mode:String,

    //Link to user
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }


});


module.exports={ OrdersSchema };