import mongoose from 'mongoose';
const { Schema } = mongoose;

const BillItemSchema = new Schema({
  item_type: { 
    type: String, 
    enum: ["consultation", "medication", "procedure", "room_charge", "test", "other"] 
  },
  consult_id: { type: Schema.Types.ObjectId, ref: 'Consultation' },
  report_id: { type: Schema.Types.ObjectId, ref: 'Report' },
  prescription_id: { type: Number, ref: 'Prescription' },
  room_id: { type: Schema.Types.ObjectId, ref: 'Room' },
  item_description: String,
  item_amount: Number,
  quantity: Number
});


const PaymentSchema = new Schema({
    amount: Number,
    insurance_id: { type: Schema.Types.ObjectId, ref: 'Insurance' },
    payment_date: Date,
    payment_gateway_id: { type: Schema.Types.ObjectId, ref: 'PaymentGateway' },
    transaction_id: String,
    status: { type: String, enum: ["success", "failed"] },
    payment_method: { type: String, enum: ["cash", "card", "bank_transfer", "insurance"] }
  });
  
  const BillSchema = new Schema({
    patient_id: { type: Number, ref: 'Patient' },
    generation_date: Date,
    total_amount: Number,
    payment_status: {
      type: String,
      enum: ["paid", "pending", "partially_paid"]
    },
    items: [BillItemSchema], // Embedded array
    payments: [PaymentSchema] // Embedded array
  }, { timestamps: true });

  const Bill = mongoose.model('Bill', BillSchema);
  const BillItem = mongoose.model('BillItem', BillItemSchema);
  export  {Bill,BillItem};