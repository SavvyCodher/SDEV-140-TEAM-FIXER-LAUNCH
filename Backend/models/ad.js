const db = require("../db");

// Create a model from the schema
const Ad = db.model("Ad", {  
   ServiceRequest: { type: String },
   Desc:       { type: String, required: true },
   DatePosted: { type: String, default: Date.now },  
   JobCategory: { type: String },
   DateNeeded: { type: Date, default: Date.now }, 
   TimeSlot: { type: String },
   Email:  { type: String },
   City:  { type: String },
   ZipCode:  { type: String },
   UserId:  { type: String },
   Applicants: [String],
   Accepted: { type: Boolean, default: false },
   ApprovedApplicant:  { type: String }
});

module.exports = Ad;
