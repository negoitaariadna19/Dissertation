import React, { useState } from "react";
import Layout from "../../components/Layout";
import "../../styles/CalculatorIMC.css"; // Import the CSS file

const CalculatorIMC = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    let bmiMessage = "";
    let bmiCategory = "";
    let bmiColor = "";

    if (bmiValue < 18.5) {
      bmiCategory = "Subponderal";
      bmiColor = "#FFA500";
      bmiMessage =
        "Ai o greutate mai mică decât cea normală pentru înălțimea ta. Acest lucru te predispune unor afecțiuni precum osteoporoza, anemia sau infertilitatea. Te invităm să discuți cu medicul nutriționist, care va determina dacă ai un metabolism accelerat sau o afecțiune care previne asimilarea nutrienților și îți va recomanda metode de creștere corectă în greutate.";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      bmiCategory = "Normoponderal";
      bmiColor = "#28A745";
      bmiMessage =
        "Felicitări! Conform măsurătorilor tale, te încadezi în categoria persoanelor care au o greutate normală. Te invităm să discuți cu medicul nutriționist care să te ajute să menții acest stil de viață sănătos, alegând cele mai corecte principii alimentare în dieta ta. Tot nutriționistul îți poate recomanda un set de analize pentru o evaluare a sănătății tale și o scanare iDXA care să identifice dispoziția kilogramelor tale, compoziția organismului și eventualele deficiențe care trebuie compensate.";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      bmiCategory = "Supraponderal";
      bmiColor = "#FFC107";
      bmiMessage =
        "Ai un exces de kilograme față de o greutate normală pentru înălțimea ta. Îți recomandăm un plan de investigații complet și o discuție cu medicul nutriționist, pentru că dincolo de suprapondere urmează obezitatea. Este mai bine să prevenim decât să tratăm. În contextul unor patologii asociate, cum sunt diabetul zaharat, hipertensiunea arterială, dislipidemia, infertilitatea, suferințele osteoarticulare, te invităm la seminarul de obezitate.";
    } else if (bmiValue >= 30 && bmiValue < 40) {
      bmiCategory = "Obezitate grad I";
      bmiColor = "#DC3545";
      bmiMessage =
        "Un indice al masei corporale BMI > 30 crește exponențial riscul de complicații și patologii asociate, dintre care cele mai grave sunt diabetul zaharat și bolile cardiovasculare. Prezența kilogramelor în plus înseamnă multe probleme în plus. Înainte de a trece la grade din ce în ce mai avansate de obezitate, îți recomandăm un set de investigații și te invităm la seminarul despre chirurgia obezității. Împreună vom identifica o soluție pentru problema ta.";
    } else {
      bmiCategory = "Obezitate grad II";
      bmiColor = "#DC3545";
      bmiMessage =
        "Un indice al masei corporale BMI > 40 limitează funcțiile de bază ale organismului, presum respirația sau mersul. Mai mult, obezitatea morbidă crește alarmant riscul de diabet zaharat, hipertensiune, apnee în somn, reflux gastroesofagial, pietre la vezica biliară, artrită, boli cardiace și cancer. Este important să îți faci un set de investigații și să participi la seminarul despre chirurgia obezității. Împreună cu medicul chirurg vei putea alege cea mai potrivită intervenție care te va ajuta să duci o viață normală.";
    }

    setCategory(bmiCategory);
    setColor(bmiColor);
    setMessage(bmiMessage);
  };

  return (
    <Layout>
      <div className="content">
        <div className="body">
          <h1>Calculator IMC</h1>
          <div className="form-group">
            <label>Greutate (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="form-control"
              placeholder="Introdu greutatea în kilograme"
            />
          </div>
          <div className="form-group">
            <label>Înălțime (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="form-control"
              placeholder="Introdu înălțimea în centimetri"
            />
          </div>
          <button className="btn btn-primary" onClick={calculateBMI}>
            Calculează IMC
          </button>
          <hr />
          {bmi && (
            <div id="bmiResult">
              <h2 style={{ color: color, fontSize: "32px" }}>{category}</h2>
              <p>
                Indicele tău de masă corporală (BMI) este:{" "}
                <strong>{bmi}</strong>
              </p>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CalculatorIMC;

// import React, { useState } from "react";
// import Layout from "../../components/Layout";

// const CalculatorIMC = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bmi, setBmi] = useState(null);
//   const [message, setMessage] = useState("");

//   const calculateBMI = () => {
//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
//     setBmi(bmiValue);

//     let bmiMessage = "";
//     if (bmiValue < 18.5) {
//       bmiMessage =
//         "Subponderal: Ai o greutate mai mică decât cea normală pentru înălțimea ta. Acest lucru te predispune unor afecțiuni precum osteoporoza, anemia sau infertilitatea. Te invităm să discuți cu medicul nutriționist, care va determina dacă ai un metabolism accelerat sau o afecțiune care previne asimilarea nutrienților și îți va recomanda metode de creștere corectă în greutate.";
//     } else if (bmiValue >= 18.5 && bmiValue < 25) {
//       bmiMessage =
//         "Normoponderal: Felicitări! Conform măsurătorilor tale, te încadezi în categoria persoanelor care au o greutate normală. Te invităm să discuți cu medicul nutriționist care să te ajute să menții acest stil de viață sănătos, alegând cele mai corecte principii alimentare în dieta ta. Tot nutriționistul îți poate recomanda un set de analize pentru o evaluare a sănătății tale și o scanare iDXA care să identifice dispoziția kilogramelor tale, compoziția organismului și eventualele deficiențe care trebuie compensate.";
//     } else if (bmiValue >= 25 && bmiValue < 30) {
//       bmiMessage =
//         "Supraponderal: Ai un exces de kilograme față de o greutate normală pentru înălțimea ta. Îți recomandăm un plan de investigații complet și o discuție cu medicul nutriționist, pentru că dincolo de suprapondere urmează obezitatea. Este mai bine să prevenim decât să tratăm. În contextul unor patologii asociate, cum sunt diabetul zaharat, hipertensiunea arterială, dislipidemia, infertilitatea, suferințele osteoarticulare, te invităm la seminarul de obezitate.";
//     } else if (bmiValue >= 30 && bmiValue < 40) {
//       bmiMessage =
//         "Obezitate grad I: Un indice al masei corporale BMI > 30 crește exponențial riscul de complicații și patologii asociate, dintre care cele mai grave sunt diabetul zaharat și bolile cardiovasculare. Prezența kilogramelor în plus înseamnă multe probleme în plus. Înainte de a trece la grade din ce în ce mai avansate de obezitate, îți recomandăm un set de investigații și te invităm la seminarul despre chirurgia obezității. Împreună vom identifica o soluție pentru problema ta.";
//     } else {
//       bmiMessage =
//         "Obezitate grad II: Un indice al masei corporale BMI > 40 limitează funcțiile de bază ale organismului, presum respirația sau mersul. Mai mult, obezitatea morbidă crește alarmant riscul de diabet zaharat, hipertensiune, apnee în somn, reflux gastroesofagial, pietre la vezica biliară, artrită, boli cardiace și cancer. Este important să îți faci un set de investigații și să participi la seminarul despre chirurgia obezității. Împreună cu medicul chirurg vei putea alege cea mai potrivită intervenție care te va ajuta să duci o viață normală.";
//     }import CalculatorIMC from './calculatorIMC';

//     setMessage(bmiMessage);
//   };

//   return (
//     <Layout>
//       <h1>Calculator IMC</h1>
//       <div>
//         <label>
//           Greutate (kg):
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Înălțime (cm):
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateBMI}>Calculează IMC</button>
//       {bmi && (
//         <div>
//           <h2>Indicele tău de masă corporală este: {bmi}</h2>
//           <p>{message}</p>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default CalculatorIMC;
