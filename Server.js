const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Work Order Schema
const WorkOrderSchema = new mongoose.Schema({
    titre: String,
    description: String,
    statut: { type: String, enum: ["Nouveau", "En cours", "Terminé"], default: "Nouveau" },
    date_planification: Date
});
const WorkOrder = mongoose.model("WorkOrder", WorkOrderSchema);

// API Routes
app.get("/workorders", async (req, res) => {
    try {
        const workOrders = await WorkOrder.find();
        res.json(workOrders);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la récupération des ordres de travail" });
    }
});

app.post("/workorders", async (req, res) => {
    try {
        const { titre, description, statut, date_planification } = req.body;
        if (!titre || !description) {
            return res.status(400).json({ error: "Titre et description sont requis" });
        }
        const newWorkOrder = new WorkOrder({ titre, description, statut, date_planification });
        await newWorkOrder.save();
        res.json({ message: "Ordre de travail créé" });
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la création de l'ordre de travail" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));