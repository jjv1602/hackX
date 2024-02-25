import React from "react";
import st from "./Appointment.module.css";
import { Card } from "primereact/card";
export default function AppointCard() {
  return (
    <div className={st.appointCard}>
      <Card
        title="Amit Kumar"
        subTitle="Date: 10pm 26th Feb 2024"
        className="md:w-25rem m-5"
      >
        <p className="m-0">Report summary............................</p>
      </Card>
      <Card
        title="Amit Kumar"
        subTitle="Date: 10pm 26th Feb 2024"
        className="md:w-25rem m-5"
      >
        <p className="m-0">Report summary............................</p>
      </Card><Card
        title="Amit Kumar"
        subTitle="Date: 10pm 26th Feb 2024"
        className="md:w-25rem m-5"
      >
        <p className="m-0">Report summary............................</p>
      </Card><Card
        title="Amit Kumar"
        subTitle="Date: 10pm 26th Feb 2024"
        className="md:w-25rem m-5"
      >
        <p className="m-0">Report summary............................</p>
      </Card>
    </div>
  );
}
