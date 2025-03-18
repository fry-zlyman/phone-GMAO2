const http = require ('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
const express = require('express');
class Person {
    constructor(name) {
        this.name = name; // "name" is a property of the class "Person"
    }
}
const person = new Person("Charlie");
console.log(person.name); // Accesses the "name" property of the "person" object
  return `Hello, ${name}!`;


console.log(greet('World'));
  express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.log(err));

// Schéma des ordres de travail
const WorkOrderSchema = new mongoose.Schema({
    titre: String,
    description: String,
    statut: { type: String, enum: ["Nouveau", "En cours", "Terminé"], default: "Nouveau" },
    date_planification: Date
});
const WorkOrder = mongoose.model("WorkOrder", WorkOrderSchema);

// Routes API
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

app.listen(5000, () => console.log("Serveur en écoute sur le port 5000"));
