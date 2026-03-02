import React, { useState } from "react";

// Jay's Premium Todo Application
function TodoJay() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task];
    updatedTasks.sort((a, b) => a.localeCompare(b));

    setTasks(updatedTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.title}>Jay's Premium Todo App</h2>

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.listItem}>
              <span>{t}</span>
              <button
                onClick={() => deleteTask(index)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <p style={styles.footer}>Built by Jay 🚀</p>
      </div>
    </div>
  );
}

const styles = {
  background: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)"
  },

  card: {
    width: "400px",
    padding: "30px",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1e3c72"
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },

  addButton: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "600",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)"
  },

  list: {
    listStyle: "none",
    padding: 0
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    background: "#f4f6f8",
    borderRadius: "8px"
  },

  deleteButton: {
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#ff4d4d",
    color: "#fff"
  },

  footer: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "12px",
    color: "#888"
  }
};

export default TodoJay;