import React, { useState, useEffect } from "react";
//import { Ejercicio1 } from "./EjerciciosDC";
import { MathComponent } from "../../components/MathJax";
//import { Accordion,Card } from 'react-bootstrap';
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { DCpaso1 } from "./steps/DCpaso1";
import { DCpaso2 } from "./steps/DCpaso2";
import { DCsummary } from "../tools/Summary";
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
  Center, Spacer
} from "@chakra-ui/react";
import { VideoScreen } from "../tools/VideoScreen";
import { SelectStep } from "../tools/SelectStep";

//react functional component
const DC = ({ejercicio}) => {
  //const ejemplo = Ejercicio1;
 //const ejercicio = Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [paso2Valido, setPaso2Valido] = useState(null);

  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [hintsTerminado2, setHintsTerminado2] = useState(null);

  const [index, setIndex] = useState([1, 0]);
  //selectStep
  const [select, setSelect] = useState(true);
  const [select2, setSelect2] = useState(true);
  const steps = ejercicio.steps.map((i)=>i.stepTitle);

  useEffect(() => {
    if (paso1Valido != null) {
      setIndex([1]);
    }
  }, [paso1Valido]);

  const [loading, setLoading] = useState(true);
  const change = () => setLoading(false);

  return (
    <>
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      <Wrap>{ejercicio.text}
        <Spacer/>
        <VideoScreen></VideoScreen>
      </Wrap>
      
      <Wrap justify="center">
        {loading && <Loading />}
        <MathComponent
          tex={ejercicio.steps[0].expression}
          display={true}
          onSuccess={change}
        />
      </Wrap>

      <Accordion allowToggle allowMultiple index={index} style={{ padding: 0 }}>
        <AccordionItem isFocusable={false} isDisabled = {select}>
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
                <Wrap>
                  <Center>
                    {!select&&ejercicio.steps[0].stepTitle}&nbsp;&nbsp;
                    {paso1Valido != null && !select&&  "✔ "}
                    {select&&<Wrap>Paso 1:<SelectStep correct={0} steps={steps} setSelect={setSelect}></SelectStep></Wrap>}
                  </Center>
                </Wrap>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
          {!select&&<DCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              hintsTerminado={hintsTerminado}
              setHintsTerminado={setHintsTerminado}
              loading={loading}
            ></DCpaso1>}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isDisabled = {select2}>
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
                <Wrap>
                  <Center>
                    {!select2 && ejercicio.steps[1].stepTitle}
                    {paso2Valido != null && !select2 && "✔ "}
                    {select2&&paso1Valido != null&&<Wrap>Paso 2:<SelectStep correct={1} steps={steps} setSelect={setSelect2}></SelectStep></Wrap>}
                  </Center>
                </Wrap>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            {paso1Valido != null && !select2&& (
              <DCpaso2
                ejercicio={ejercicio.steps[paso1Valido]}
                setPaso2Valido={setPaso2Valido}
                paso2Valido={paso2Valido}
                hintsTerminado={hintsTerminado2}
                setHintsTerminado={setHintsTerminado2}
              ></DCpaso2>
            )}
            
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {paso2Valido != null && (
              <DCsummary
                step1={ejercicio.steps[0]}
                step2={ejercicio.steps[1]}
              />
            )}
    </>
  );
};

export default DC;
