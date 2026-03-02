import React, { useState } from "react";

function Calculator() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const getNumbers = () => {
    return [parseFloat(num1), parseFloat(num2)];
  };

  const calculate = (operation) => {
    const [a, b] = getNumbers();

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "subtract":
        setResult(a - b);
        break;
      case "multiply":
        setResult(a * b);
        break;
      case "divide":
        if (b === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(a / b);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.title}>Business Calculator</h2>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => calculate("add")}>+</button>
          <button style={styles.button} onClick={() => calculate("subtract")}>−</button>
          <button style={styles.button} onClick={() => calculate("multiply")}>×</button>
          <button style={styles.button} onClick={() => calculate("divide")}>÷</button>
        </div>

        <div style={styles.resultBox}>
          <span style={styles.resultText}>
            {result !== null ? result : "Result will appear here"}
          </span>
        </div>

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
    background: "linear-gradient(135deg, #1f4037, #99f2c8)"
  },

  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  title: {
    marginBottom: "25px",
    color: "#1f4037",
    fontWeight: "600"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none"
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },

  button: {
    flex: 1,
    margin: "5px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #1f4037, #99f2c8)",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s ease"
  },

  resultBox: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    background: "#f4f7f8",
    fontSize: "18px",
    fontWeight: "500"
  },

  resultText: {
    color: "#1f4037"
  }
};

export default Calculator;