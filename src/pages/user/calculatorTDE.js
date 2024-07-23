import React, { useState } from "react";
import Layout from "../../components/Layout";
import "../../styles/CalculatorTDEE.css";

const CalculatorTDEE = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [tdee, setTdee] = useState(null);

  const handleCalculate = () => {
    let bmr;

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      superActive: 1.9,
    };

    const calculatedTdee = bmr * activityMultiplier[activityLevel];
    setTdee(calculatedTdee);
  };

  return (
    <Layout>
      <h1>Calculator TDEE</h1>
      <p>
        Total Daily Energy Expenditure (TDEE) reprezintă numărul total de
        calorii pe care corpul tău le arde zilnic pentru a-și menține funcțiile
        vitale și pentru a susține toate activitățile fizice. Calcularea TDEE
        este esențială pentru a înțelege necesarul caloric zilnic, fie că
        dorești să îți menții greutatea, să slăbești sau să câștigi masă
        musculară.
      </p>
      <div className="calculator-tdee">
        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="superActive">Super Active</option>
          </select>
        </div>
        <button onClick={handleCalculate}>Calculate TDEE</button>
        {tdee && (
          <div className="result">
            <h2>Your TDEE is: {Math.round(tdee)} calories/day</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CalculatorTDEE;
