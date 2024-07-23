import React, { useState } from "react";
import Layout from "../../components/Layout";
import "../../styles/FirstAid.css";
import unconsciousImg from "../../images/first.png";
import chokingImg from "../../images/choking.png";
import bleedingImg from "../../images/bleeding.png";
import allergyImg from "../../images/allergy.png";

const firstAidOptions = [
  {
    id: "unconscious",
    title: "Persoană inconștientă",
    imgSrc: unconsciousImg,
    steps: [
      "Cand o persoana pare sa fie inconstienta, primul lucru ce trebuie facut consta in verificarea sigurantei, atat pentru salvator cat si pentru victima. Vom avea grija ca sa indepartam, cat se poate, pericolele iminente care pot expune la risc atat pe victima cat si pe salvator. (de ex curent electric, butelii de gaz, flacara, trafic rutier intens etc) ",
      "Ulterior ne apropiem de victima si il intrebam cu voce ridicata , eventual scuturandu-l usor de umar: 'Esti bine? Cum esti? Ma vezi? Stii unde te afli? Ce s-a intamplat?' etc. Acestea sunt intrebari care ne permit o evaluare rapida a starii de constienta a victimei.",
      "Încearcă să-l trezești: verbal, tactil sau dureros.",

      "Verifică respirația și pulsul.",
      "Atentie! Nu se recomandă mișcarea victimei atunci când se suspectează traumatisme ale coloanei vertebrale deoarece mișcările pot agrava situația. În cazul în care salvatorul nu primește niciun răspuns, următorii pași trebuie efectuați în ordine:",
      "- verificarea permeabilității căilor aeriene prin metoda PAS (Privesc – Ascult – Simt); (mă apropii cu obrazul de nasul și gura victimei, încercând să îi simt respirația pe obraz și să îi urmăresc mișcările de expansiune a toracelui ce apar normal o dată cu respirațiile spontane.)",
      "- verificarea pulsului la carotidă, bilateral, dar pe rând, nu ambele concomitent.",
      "- apelarea serviciilor de urgență (112).",
      "Atunci cand se suna la numarul 112, apelul nu trebuie inchis pana cand nu este cerut de operator acest lucru. De asemenea, indicatiile primite de la operatori trebuie urmate intocmai.",
      "Dacă nu respiră, începe resuscitarea cardio-pulmonară (RCP).",

      "Dacă respiră, așază victima în poziția de siguranță.",
    ],
    followUp: "Și-a recăpătat starea de conștiență?",
  },
  {
    id: "choking",
    title: "Înec cu un corp străin",
    imgSrc: chokingImg,
    steps: [
      "Cand alimentele patrund in laringe pot bloca complet sau partial caile respiratorii. Uneori, tusea persistenta sau fortata poate ajuta la dislocarea si eliminarea blocajului, iar din acest motiv este necesara si ar trebui incurajata. In alte momente, blocajele de la nivelul laringelui pot duce la sufocare.",
      "Ducerea mainilor la nivelul gatului reprezinta un semn patognomonic si trebuie recunoscut imediat. Incapacitatea de a vorbi sau de a respira sunt alte elemente ce trebuie observate, alaturi de schimbarea culorii pielii in albastru, situatie cunoscuta sub denumirea de cianoza.",
      "Dacă persoana nu poate tuși, striga sau respira, efectuează 5 lovituri între omoplați.",
      "In cazul in care victima nu poate tusi, vorbi sau respira, manevra Heimlich poate fi necesara. Aceasta procedura implica aplicarea unei forte crescute asupra abdomenului, astfel incat blocajul de la nivelul laringelui sa fie eliminat, iar respiratia sa poata reveni la normal.",
      "• Pasul 1 – salvatorul trebuie sa se plaseze posterior de victima si usor in lateral, punand ambele brate in jurul taliei victimei;",
      "• Pasul 2 – pumnul unei maini trebuie pozitionat la nivel abdominal, exact intre ombilic si apendicele xifoid. Apendicele xifoid este partea cea mai inferioara a osului pieptului (stern);",
      "• Pasul 3 – pumnul inclestat trebuie prins cu mana cealalta, astfel incat pacientul sa fie cuprins complet;",
      "• Pasul 4 – salvatorul trebuie sa imprime miscari puternice in sus si spre coloana vertebrala a victimei, astfel incat corpul strain sa poata fi mobilizat si eliminat;",
      "• Pasul 5 – manevra se continua pana cand corpul strain este eliminat sau pana la sosirea cadrelor medicale special instruite.",
      "O persoana care este singura in timp ce se ineaca cu mancare ar putea fi nevoita sa isi aplice singura manevra Heimlich. Aceasta poate fi efectuata prin aplecarea puternica asupra spatarului unui scaun",
      "Acest lucru ar trebui sa ajute la deblocarea blocajelor de la nivelul cailor aeriene. In plus, este important de stiut ca manevra Heimlich nu este potrivita pentru copiii cu varste mai mici de 1 an sau pentru femeile aflate in stadii avansate ale sarcinii. Aceste persoane pot necesita variatii diferite ale manevrei.",
      "Alternați între lovituri între omoplați și compresii abdominale până când obiectul este eliminat sau persoana își pierde conștiența.",
      "Dacă persoana își pierde conștiența, începe resuscitarea cardio-pulmonară (RCP).",
      "Sună la 112 pentru ajutor medical de urgență.",
    ],
    followUp: "Respira normal acum?",
  },
  {
    id: "bleeding",
    title: "Oprirea sângerării",
    imgSrc: bleedingImg,
    steps: [
      "Persoana care sangereaza va fi asezata in pozitie orizontala si va fi acoperita cu o patura pentru a se preveni pierderea caldurii corpului. Daca este posibil, pozitia capului va fi usor mai jos decat trunchiul sau se vor ridica picioarele. Aceasta pozitie va reduce riscul aparitei lesinului prin cresterea fluxului de sange la nivelul creierului. Daca este posibil se va ridica putin si zona care sangereaza.",
      "Mainile persoanei care acorda primul ajutor vor fi acoperite de manusi. Se va indeparta orice murdarie si resturi evidente de la nivelul ranii. Nu se va elimina, fara ajutor specializat, nici un obiect de mari dimensiuni sau care este infipt in corpul victimei. Rana nu se va sonda si se va curata. Principala preocupare trebuie sa fie oprirea sangerarii.",
      "Se va aplica presiune directa asupra ranii pana cand sangerarea se va opri. Se va folosi un bandaj steril sau o carpa uscata si se va tine presiunea in mod continuu timp de cel putin 10 minute. La fiecare 10 minute se verifica starea circulatiei sanguine de la nivelul plagii, prin comprimarea zonei adiacente cu falanga distala a unui deget al salavatorului, pana cand zona verificata devine palida, si apoi se controleaza daca regiunea controlata isi recapata culoarea in 2 secunde. Daca intervalul de recolorare este mai mare, inseamna ca garoul sau materialul compresiv aplicat este prea constrictiv si, in consecinta, se va micsora presiunea aplicata in regiunea plagii. Presiunea se va mentine prin legarea ranii cu un bandaj strans (sau o bucata de carpa curata) si banda adeziva. Se vor folosi mainile in cazul in care nu este disponibil nimic altceva. Daca este posibil, se vor purta manusi din cauciuc sau latex sau o punga curata de plastic pentru protectie.",
      "Nu se va muta tifonul sau bandajul. Daca sangerarea continua sa patrunda prin tifon sau alt material, acesta nu se va indeparta, se va mentine in continuare pe rana. In schimb se vor adauga mai multe materiale absorbante in partea superioara a ranii.",
      "Ridicați membrul afectat deasupra nivelului inimii, dacă este posibil.",
      "Mențineți presiunea aplicată constant.",
      "Dacă sângerarea nu se oprește, aplicați un alt bandaj deasupra primului.",
      "Dacă sângerarea este severă și nu se oprește, sunați la 112 pentru ajutor medical de urgență.",
    ],
    followUp: "Sângerarea s-a oprit?",
  },
  {
    id: "allergicReaction",
    title: "Reacție alergică",
    imgSrc: allergyImg,
    steps: [
      "Reactiile alergice apar ca urmare a agresiunii exercitate asupra organismului de diferite substante din mediul extern, grupate sub denumirea de alergeni, cum ar fi: praf, poluanti, polenuri, pulberi chimice, medicamente, substante alimentare.",
      "Manifestarile alergiilor sunt diverse, variind de la simpla aparitie a urticariei sau eczemelor (alergii de la nivelul pielii) sau obstructia si hipersecretia apoasa (la nivelul nasului), pana la obstructia laringo-traheala si asfixie (la nivelul arborelui respirator).",
      "Identifică și îndepărtează alergenul, dacă este posibil.",
      "Administrează un antihistaminic (cum ar fi cetirizină sau loratadină) dacă persoana are unul la îndemână.  Actual, in farmacii sunt disponibile medicamente antialergice din clasa antihistaminicelor nesedative, medicamente care au beneficiul de a nu determina aparitia ametelilor si de a nu interfera cu capacitatea de operare a utilajelor industriale sau cu condusul autovehiculelor, ca in cazul sustantelor sedative. Totusi, nu este indicata administrarea lor pe o perioada de timp mai lunga de cateva zile.De asemenea, in cazul aparitiei urticariilor se poate folosi local un unguent pe baza de hidrocortizon.",
      "Daca este vorba de aparitia unor pete rosiatice cu localizare limitata la nivel tegumentar, este indicata aplicarea la nivelul zonei afectate a unei pungi cu gheata sau doar a unor comprese cu apa rece, pentru efectul lor antiinflamator.",
      "Punga cu gheata trebuie aplicata peste un prosop sau o alta bucata de material, niciodata direct pe piele intru cat se pot realiza leziuni celulare datorate temperaturii prea scazute.",
      "Dacă persoana are un EpiPen (injector de adrenalină), administrează-l conform instrucțiunilor.",
      "Sună la 112 dacă simptomele sunt severe sau persoana are dificultăți de respirație.",
      "Monitorizează persoana până la sosirea ajutorului medical.",
    ],
    followUp: "Simptomele s-au ameliorat?",
  },
];

const followUpSteps = {
  unconscious: [
    "Continuă să supraveghezi respirația și semnele vitale ale victimei.",
    "Daca victima pare a avea leziuni spinale, nu trebuie deplasata, iar gatul acesteia trebuie mentinut fix. In cazul in care nu exista leziuni spinale, iar victima respira si este inconstienta, trebuie asezata in pozitia laterala de siguranta. Astfel, se reduce riscul de aspiratie a lichidul de varsatura, ce poate duce la complicatii letale, precum sindromul Mendelson.",
    "Continuați resuscitarea cardio-pulmonară (RCP) până la sosirea ajutorului medical.",
    "Asigurați-vă că victima este așezată pe o suprafață dură și plană.",
    "Continuați alternarea compresiilor toracice cu respirațiile de salvare.",
  ],
  choking: [
    "Dacă persoana își pierde conștiența, începe resuscitarea cardio-pulmonară (RCP).",
    "Asigurați-vă că 112 a fost apelat pentru ajutor medical de urgență.",
    "Continuați cu manevrele de deblocare a căilor respiratorii (manevra Heimlich sau compresiile toracice pentru copii mici).",
  ],
  bleeding: [
    "Se va apasa cu putere o artera principala, daca este necesar. Daca sangerarea nu se opreste nici in urma presiunii directe, se va aplica presiune pe artera care furnizeaza sange in zona ranii. Punctele de presiune ale bratului sunt in interiorul bratului chiar deasupra cotului si chiar sub axila. Punctele de presiune ale piciorului sunt localizate chiar in spatele genunchiului si in zona abdomenului. Se va presa artera principala in aceste zone, spre os. Se vor tine degetele plate. Cu cealalta mana se va exercita presiune pe rana.",
    "Continuați aplicarea presiunii directe pe rană.",
    "Dacă aveți la dispoziție un garou și sunteți instruit să-l folosiți, aplicați-l deasupra rănii.",
    "Monitorizați victima pentru semne de șoc și asigurați-vă că ajutorul medical este pe drum.",
  ],
  allergicReaction: [
    "Administrează un al doilea EpiPen dacă simptomele nu se ameliorează și ajutorul medical întârzie.",
    "Asigură-te că persoana stă culcată și are căile respiratorii libere.",
    "Monitorizează îndeaproape simptomele și starea generală a persoanei până la sosirea ajutorului medical.",
  ],
};

const FirstAid = () => {
  const [currentOption, setCurrentOption] = useState(null);
  const [followUpResponse, setFollowUpResponse] = useState(null);

  const handleOptionClick = (option) => {
    setCurrentOption(option);
    setFollowUpResponse(null);
  };

  const handleFollowUpResponse = (response) => {
    setFollowUpResponse(response);
  };

  const renderMainMenu = () => (
    <div className="grid-container3">
      {firstAidOptions.map((option) => (
        <div
          key={option.id}
          className="grid-item3"
          onClick={() => handleOptionClick(option)}
        >
          <h2>{option.title}</h2>
          <img src={option.imgSrc} alt={option.title} className="grid-image" />
          {/* <a href="#action">Acționează</a> */}
        </div>
      ))}
    </div>
  );

  const renderDetails = () => (
    <div className="details-container">
      <h2>{currentOption.title}</h2>
      <img
        src={currentOption.imgSrc}
        alt={currentOption.title}
        className="details-image"
      />
      <ul>
        {currentOption.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <p>{currentOption.followUp}</p>
      <button onClick={() => handleFollowUpResponse("yes")}>Da</button>
      <button onClick={() => handleFollowUpResponse("no")}>Nu</button>
      {followUpResponse === "no" && (
        <div>
          <p>Continuați cu următorii pași:</p>
          <ul>
            {followUpSteps[currentOption.id].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => setCurrentOption(null)}>Înapoi</button>
    </div>
  );

  return (
    <Layout>
      <h1>Primul Ajutor</h1>
      <h3>
        Accesați linkul pentru demonstrațiile video:{" "}
        <a href="https://www.youtube.com/@manualvideodeprimajutor4724">
          Manual video de prim ajutor
        </a>
      </h3>

      {currentOption ? renderDetails() : renderMainMenu()}
    </Layout>
  );
};

export default FirstAid;

// // ----------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import Layout from "../../components/Layout";
// import "../../styles/FirstAid.css";
// import firstaidimg1 from "../../images/first-aid.png";

// const firstAidOptions = [
//   {
//     id: "unconscious",
//     title: "Persoană inconștientă",
//     imgSrc: firstaidimg1,
//     steps: [
//       "Verifica starea de conștiență.",
//       "Ma auziți?",
//       "Încearcă să-l trezești: verbal, tactil sau dureros.",
//       "!!!NU MOBILIZA VICTIMA ACCIDENTATE DECAT DACĂ ESTE ÎN PERICOL IMINENT.",
//       "Verifică respirația și pulsul.",
//       "Dacă nu respiră, începe resuscitarea cardio-pulmonară (RCP).",
//       "Sună la 112 pentru ajutor medical de urgență.",
//       "Dacă respiră, așază victima în poziția de siguranță.",
//     ],
//     followUp: "Și-a recăpătat starea de conștiență?",
//   },
//   {
//     id: "choking",
//     title: "Înec cu un corp străin",
//     steps: [
//       "Încurajează persoana să tușească pentru a elimina obiectul.",
//       "Dacă persoana nu poate tuși, striga sau respira, efectuează 5 lovituri între omoplați.",
//       "Dacă nu funcționează, efectuează 5 compresii abdominale (manevra Heimlich).",
//       "Alternați între lovituri între omoplați și compresii abdominale până când obiectul este eliminat sau persoana își pierde conștiența.",
//       "Dacă persoana își pierde conștiența, începe resuscitarea cardio-pulmonară (RCP).",
//       "Sună la 112 pentru ajutor medical de urgență.",
//     ],
//     followUp: "Respira normal acum?",
//   },
//   {
//     id: "bleeding",
//     title: "Oprirea sângerării",
//     steps: [
//       "Aplicați presiune directă pe rană cu un bandaj sau o bucată de pânză curată.",
//       "Ridicați membrul afectat deasupra nivelului inimii, dacă este posibil.",
//       "Mențineți presiunea aplicată constant.",
//       "Dacă sângerarea nu se oprește, aplicați un alt bandaj deasupra primului.",
//       "Dacă sângerarea este severă și nu se oprește, sunați la 112 pentru ajutor medical de urgență.",
//     ],
//     followUp: "Sângerarea s-a oprit?",
//   },
//   {
//     id: "allergicReaction",
//     title: "Reacție alergică",
//     steps: [
//       "Identifică și îndepărtează alergenul, dacă este posibil.",
//       "Administrează un antihistaminic (cum ar fi cetirizină sau loratadină) dacă persoana are unul la îndemână.",
//       "Dacă persoana are un EpiPen (injector de adrenalină), administrează-l conform instrucțiunilor.",
//       "Sună la 112 dacă simptomele sunt severe sau persoana are dificultăți de respirație.",
//       "Monitorizează persoana până la sosirea ajutorului medical.",
//     ],
//     followUp: "Simptomele s-au ameliorat?",
//   },
// ];

// const followUpSteps = {
//   unconscious: [
//     "Continuați resuscitarea cardio-pulmonară (RCP) până la sosirea ajutorului medical.",
//     "Asigurați-vă că victima este așezată pe o suprafață dură și plană.",
//     "Continuați alternarea compresiilor toracice cu respirațiile de salvare.",
//   ],
//   choking: [
//     "Dacă persoana își pierde conștiența, începe resuscitarea cardio-pulmonară (RCP).",
//     "Asigurați-vă că 112 a fost apelat pentru ajutor medical de urgență.",
//     "Continuați cu manevrele de deblocare a căilor respiratorii (manevra Heimlich sau compresiile toracice pentru copii mici).",
//   ],
//   bleeding: [
//     "Continuați aplicarea presiunii directe pe rană.",
//     "Dacă aveți la dispoziție un garou și sunteți instruit să-l folosiți, aplicați-l deasupra rănii.",
//     "Monitorizați victima pentru semne de șoc și asigurați-vă că ajutorul medical este pe drum.",
//   ],
//   allergicReaction: [
//     "Administrează un al doilea EpiPen dacă simptomele nu se ameliorează și ajutorul medical întârzie.",
//     "Asigură-te că persoana stă culcată și are căile respiratorii libere.",
//     "Monitorizează îndeaproape simptomele și starea generală a persoanei până la sosirea ajutorului medical.",
//   ],
// };

// const FirstAid = () => {
//   const [currentOption, setCurrentOption] = useState(null);
//   const [followUpResponse, setFollowUpResponse] = useState(null);

//   const handleOptionClick = (option) => {
//     setCurrentOption(option);
//     setFollowUpResponse(null);
//   };

//   const handleFollowUpResponse = (response) => {
//     setFollowUpResponse(response);
//   };

//   const renderMainMenu = () => (
//     <div className="grid-container3">
//       {firstAidOptions.map((option) => (
//         <div
//           key={option.id}
//           className="grid-item3"
//           onClick={() => handleOptionClick(option)}
//         >
//           <h2>{option.title}</h2>
//           <a href="#action">Acționează</a>
//         </div>
//       ))}
//     </div>
//   );

//   const renderDetails = () => (
//     <div className="details-container">
//       <h2>{currentOption.title}</h2>
//       <ul>
//         {currentOption.steps.map((step, index) => (
//           <li key={index}>{step}</li>
//         ))}
//       </ul>
//       <p>{currentOption.followUp}</p>
//       <button onClick={() => handleFollowUpResponse("yes")}>Da</button>
//       <button onClick={() => handleFollowUpResponse("no")}>Nu</button>
//       {followUpResponse === "no" && (
//         <div>
//           <p>Continuați cu următorii pași:</p>
//           <ul>
//             {followUpSteps[currentOption.id].map((step, index) => (
//               <li key={index}>{step}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button onClick={() => setCurrentOption(null)}>Înapoi</button>
//     </div>
//   );

//   return (
//     <Layout>
//       <h1>Primul Ajutor</h1>
//       {currentOption ? renderDetails() : renderMainMenu()}
//     </Layout>
//   );
// };

// export default FirstAid;
// // -------------------------------------------------------------------------

// import React, { useState } from "react";
// import Layout from "../../components/Layout";
// import "../../styles/FirstAid.css";

// const firstAidOptions = [
//   {
//     id: "unconscious",
//     title: "Persoană inconștientă",
//     steps: [
//       "Verifica starea de conștiență",
//       "Ma auziți?",
//       "Încearcă să-l trezești: verbal, tactil sau dureros",
//       "!!!NU MOBILIZA VICTIMA ACCIDENTATE DECAT DACĂ ESTE ÎN PERICOL IMINENT",
//     ],
//     followUp: "Și-a recăpătat starea de conștiență?",
//   },
//   {
//     id: "choking",
//     title: "Înec cu un corp străin",
//     steps: [
//       // Add relevant steps here
//     ],
//     followUp: "Respira normal acum?",
//   },
//   {
//     id: "bleeding",
//     title: "Oprirea sângerării",
//     steps: [
//       // Add relevant steps here
//     ],
//     followUp: "Sângerarea s-a oprit?",
//   },
//   {
//     id: "allergicReaction",
//     title: "Reacție alergică",
//     steps: [
//       // Add relevant steps here
//     ],
//     followUp: "Simptomele s-au ameliorat?",
//   },
// ];

// const FirstAid = () => {
//   const [currentOption, setCurrentOption] = useState(null);
//   const [followUpResponse, setFollowUpResponse] = useState(null);

//   const handleOptionClick = (option) => {
//     setCurrentOption(option);
//     setFollowUpResponse(null);
//   };

//   const handleFollowUpResponse = (response) => {
//     setFollowUpResponse(response);
//   };

//   const renderMainMenu = () => (
//     <div className="grid-container3">
//       {firstAidOptions.map((option) => (
//         <div
//           key={option.id}
//           className="grid-item3"
//           onClick={() => handleOptionClick(option)}
//         >
//           <h2>{option.title}</h2>
//           <a href="#action">Acționează</a>
//         </div>
//       ))}
//     </div>
//   );

//   const renderDetails = () => (
//     <div className="details-container">
//       <h2>{currentOption.title}</h2>
//       <ul>
//         {currentOption.steps.map((step, index) => (
//           <li key={index}>{step}</li>
//         ))}
//       </ul>
//       <p>{currentOption.followUp}</p>
//       <button onClick={() => handleFollowUpResponse("yes")}>Da</button>
//       <button onClick={() => handleFollowUpResponse("no")}>Nu</button>
//       {followUpResponse === "no" && <p>Continuați cu următorii pași...</p>}
//       <button onClick={() => setCurrentOption(null)}>Înapoi</button>
//     </div>
//   );

//   return (
//     <Layout>
//       <h1>Primul Ajutor</h1>
//       {currentOption ? renderDetails() : renderMainMenu()}
//     </Layout>
//   );
// };

// export default FirstAid;
