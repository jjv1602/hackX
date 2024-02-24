const expressAsyncHandler = require('express-async-handler');
const Doc = require("../models/docModels");
const Pat = require("../models/patientModels");

const getDoctors = async (req, res) => {
    let docs;
    try {
      docs = await Doc.find();
    } catch (err) {
      return console.log(err);
    }
    if (!docs) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ docs });
  };

const getApnmtDetails = async (req, res) => {
    try {
        const apnmtId = req.params.apnmtId;
        const appointment = await Apnmt.findById(apnmtId)
            .populate('docId') 
            .populate('patientId'); 

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.status(200).json({ appointment });
    } catch (error) {
        console.error("Error fetching appointment details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
 };

const getDocDetails = async (req, res) => {
    try {
        const docId = req.params.docId; 
        const doctor = await Doc.findById(docId);

        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        res.status(200).json({ doctor });
    } catch (error) {
        console.error("Error fetching doctor details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {getDoctors,getApnmtDetails,getDocDetails};