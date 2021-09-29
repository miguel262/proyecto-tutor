import React, { useState, useEffect } from "react";
//import { Ejercicio2 } from "./EjerciciosTC";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { TCpaso1 } from "./steps/TCpaso1";
import { TCpaso2 } from "./steps/TCpaso2";
import { TCpaso3 } from "./steps/TCpaso3";
import { TCpaso4 } from "./steps/TCpaso4";
import { TCpaso5 } from "./steps/TCpaso5";
import { TCpaso6 } from "./steps/TCpaso6";
import { TCsummary } from "../tools/Summary";
import { Loading } from "../tools/Spinner";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Alert,
  Wrap,
} from "@chakra-ui/react";

//react functional component
const TC = ({ejercicio}) => {
  //const ejemplo = Ejercicio1;
  //const ejercicio = Ejercicio2;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);
  const [paso3Valido, setPaso3Valido] = useState(null);
  const [paso4Valido, setPaso4Valido] = useState(null);
  const [paso5Valido, setPaso5Valido] = useState(null);
  const [paso6Valido, setPaso6Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);
  const [hintsTerminado3, setHintsTerminado3] = useState(null);
  const [hintsTerminado5, setHintsTerminado5] = useState(null);
  const [hintsTerminado6, setHintsTerminado6] = useState(null);
  const [index, setIndex] = useState([0]);

  useEffect(() => {
    //cierra paso 1 al completarlo
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  useEffect(() => {
    //cierra paso 2 al completarlo
    if (paso2Valido != null) {
      setIndex([2]);
    }
  }, [paso2Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso3Valido != null) {
      setIndex([3]);
    }
  }, [paso3Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso4Valido != null) {
      setIndex([4]);
    }
  }, [paso4Valido]);

  useEffect(() => {
    //cierra paso 3 al completarlo
    if (paso5Valido != null) {
      setIndex([5]);
    }
  }, [paso5Valido]);

  const [loading, setLoading] = useState(true);
  const change = () => setLoading(false);

  return (
    <>
      {/*Ejemplo diferencia de cubos 
            <TCejemplo ejemplo={ejemplo}></TCejemplo>
            */}
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      {ejercicio.text}
      <Wrap justify="center">
        {loading && <Loading />}
        <MathComponent
          tex={ejercicio.steps[0].expression}
          display={true}
          onSuccess={change}
        />
      </Wrap>

      <Accordion allowToggle allowMultiple index={index} style={{ padding: 0 }}>
        <AccordionItem isFocusable={false}>
          <Alert colorScheme={paso1Valido == null ? "blue" : "green"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 0)) {
                  setIndex(index.filter((e) => e !== 0));
                } else {
                  setIndex(index.concat(0));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[0].stepTitle}
                {paso1Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            <TCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
              loading={loading}
            ></TCpaso1>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert
            colorScheme={
              paso2Valido == null
                ? paso1Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 1)) {
                  setIndex(index.filter((e) => e !== 1));
                } else {
                  setIndex(index.concat(1));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[1].stepTitle}
                {paso2Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso1Valido != null && (
              <TCpaso2
                ejercicio={ejercicio.steps[1]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></TCpaso2>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert
            colorScheme={
              paso3Valido == null
                ? paso2Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 2)) {
                  setIndex(index.filter((e) => e !== 2));
                } else {
                  setIndex(index.concat(2));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[2].stepTitle}
                {paso3Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso2Valido != null && (
              <TCpaso3
                ejercicio={ejercicio.steps[2]}
                setPaso3Valido={setPaso3Valido}
                paso3Valido={paso3Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></TCpaso3>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert
            colorScheme={
              paso4Valido == null
                ? paso3Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 3)) {
                  setIndex(index.filter((e) => e !== 3));
                } else {
                  setIndex(index.concat(3));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[3].stepTitle}
                {paso4Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso3Valido != null && (
              <TCpaso4
                ejercicio={ejercicio.steps[3]}
                setPaso4Valido={setPaso4Valido}
                paso4Valido={paso4Valido}
                hintsTerminado={hintsTerminado3}
                setHintsTerminado={setHintsTerminado3}
              ></TCpaso4>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert
            colorScheme={
              paso5Valido == null
                ? paso4Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 4)) {
                  setIndex(index.filter((e) => e !== 4));
                } else {
                  setIndex(index.concat(4));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[4].stepTitle}
                {paso5Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso4Valido != null && (
              <TCpaso5
                ejercicio={ejercicio.steps[4]}
                setPaso5Valido={setPaso5Valido}
                paso5Valido={paso5Valido}
                hintsTerminado={hintsTerminado5}
                setHintsTerminado={setHintsTerminado5}
              ></TCpaso5>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Alert
            colorScheme={
              paso6Valido == null
                ? paso5Valido == null
                  ? "gray"
                  : "blue"
                : "green"
            }
          >
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 5)) {
                  setIndex(index.filter((e) => e !== 5));
                } else {
                  setIndex(index.concat(5));
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[5].stepTitle}
                {paso6Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso5Valido != null && (
              <TCpaso6
                ejercicio={ejercicio.steps[5]}
                setPaso6Valido={setPaso6Valido}
                paso6Valido={paso6Valido}
                hintsTerminado={hintsTerminado6}
                setHintsTerminado={setHintsTerminado6}
                a={ejercicio.steps[0].answers[0].answer}
              ></TCpaso6>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {paso6Valido != null && (
              <TCsummary
                step1={ejercicio.steps[0]}
                step2={ejercicio.steps[1]}
                step3={ejercicio.steps[2]}
                step4={ejercicio.steps[3]}
                step5={ejercicio.steps[4]}
                step6={ejercicio.steps[5]}
              />
            )}
    </>
  );
};

export default TC;
