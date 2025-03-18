import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function App() {
    const [workOrders, setWorkOrders] = useState([]);

    useEffect(() => {
        axios.get("http://<your-server-ip>:5000/workorders")
            .then(response => setWorkOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tâches récentes</Text>
            <FlatList
                data={workOrders}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text>{item.titre}</Text>
                        <Text>{item.statut}</Text>
                    </View>
                )}
            />
            <Button title="Ajouter une tâche" onPress={() => console.log("Ajout")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    card: { padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 5 }
});
