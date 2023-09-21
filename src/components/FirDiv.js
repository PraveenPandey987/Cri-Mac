import React from "react";

function FirDiv() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        paddingBottom: "1em",
        marginTop: "1em",
      }}
    >
      <div>
        <span style={{ color: "red", fontWeight: "bold" }}>
          FIR NO. 4576437339
        </span>{" "}
        On 22.09.2023 a Jail Break took place at Naini Jail resulting in the
        escape of 116 prisoners{" "}
      </div>
      <div>
        <span style={{ color: "black", fontWeight: "bold" }}>by:-</span>
        <span style={{ color: "red" }}>yogesh_kumar</span>
        <span style={{ color: "black", fontWeight: "bold" }}>,State:-</span>
        <span style={{ color: "red" }}>Delhi</span>
        <span style={{ color: "black", fontWeight: "bold" }}>,District:-</span>
        <span style={{ color: "red" }}>NEW DELHI</span>
        <span style={{ color: "black", fontWeight: "bold" }}>,PS:-</span>
        <span style={{ color: "red" }}>yogesh_kumar</span>
        <span style={{ color: "black", fontWeight: "bold" }}>,on:-</span>
        <span style={{ color: "red" }}>23.09.2023</span>
      </div>
    </div>
  );
}

export default FirDiv;
