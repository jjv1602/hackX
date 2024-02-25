import React, { useEffect, useState } from "react";
import st from "./Medicines.module.css";
import { Card } from "primereact/card";
import axios from "axios";

export default function MedicneCard() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("/api/patients/123/medicines"); // Replace "/api/patients/123/medicines" with your actual backend API endpoint
        setMedicines(response.data.medicines);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching medicine details:", error);
        // Handle error
      }
    };

    fetchMedicines();
  }, []);

  return (
    <div className={st.medCard}>
      {loading ? (
        <p className="p-5">Loading...</p>
      ) : medicines.length === 0 ? (
        <p>No medicines to be taken.</p>
      ) : (
        medicines.map((medicine, index) => (
          <Card
            key={index}
            title={medicine.name}
            subTitle={`Time: ${medicine.time}`}
            className="md:w-25rem m-5"
          >
            <p className="m-0">Med dis: {medicine.description}</p>
          </Card>
        ))
      )}
    </div>
  );
}
