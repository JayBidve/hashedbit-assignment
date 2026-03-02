import React, { useEffect, useState } from "react";

// Jay's IPL 2022 Points Table Application
function IplPointsJay() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {

        // Sort teams in ascending order based on NRR
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);

        setTeams(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.title}>Jay's IPL 2022 Points Table</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr key={index} style={styles.row}>
                <td>{team.Team}</td>
                <td>{team.M}</td>
                <td>{team.W}</td>
                <td>{team.L}</td>
                <td>{team.P}</td>
                <td>{team.NRR}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={styles.footer}>Developed by Jay 🚀</p>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#203a43"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center"
  },

  row: {
    backgroundColor: "#f9f9f9"
  },

  footer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555"
  }
};

export default IplPointsJay;