const expressAsyncHandler = require("express-async-handler");
const Doc = require("../models/docModels");
const Pat = require('../models/patientModels');
const Apnmt = require("../models/apnmtModel");
const getMedicine = async (req, res) => {
    try {
        const patientId = req.params.patientId; 
        const patient = await Pat.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        const medicines = patient.medicines;

        res.status(200).json({ medicines });
    } catch (error) {
        console.error("Error fetching medicine details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const postMedicine = async (req, res) => {
    try {
        const { pid,medname,dur,qnt,mor,aft,nght } = req.body;
        const patient = await Pat.findById(pid);

        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        patient.medicines.push({ medname,dur,qnt,mor,aft,nght });
        await patient.save();
        res.status(201).json({ message: "Medicine added successfully", medicines: patient.medicines });
    } catch (error) {
        console.error("Error adding medicine:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const createApnmt = async (req, res) => {
    try {
        const { docId, patientId, prescription, meetingTimestamp, videoCallLink, aiResponse, currentBp, txnId } = req.body;

        const newApnmt = new Apnmt({
            docId,
            patientId,
            allApnmt: { prescription, meetingTimestamp, videoCallLink, aiResponse, currentBp, txnId }
        });
        await newApnmt.save();

        res.status(201).json({ message: "Appointment created successfully", appointment: newApnmt });
    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const fetchReports = async (req, res) => {
    try {
        const patientId = req.params.patientId;

        const patient = await Pat.findById(patientId);

        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        const medicalReports = patient.medicalReports;

        res.status(200).json({ medicalReports });
    } catch (error) {
        console.error("Error fetching medical reports:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {createApnmt,getMedicine,postMedicine,fetchReports};