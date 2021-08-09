import React, { useState } from "react";
//import {Ejercicio1, Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7} from './EjerciciosFC';

import FCpaso1 from "./steps/FCpaso1";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  Box,
  Wrap,
} from "@chakra-ui/react";

import { ClickStepTab } from "./../tools/ClickStepTab";

const FC = ({ ejercicio }) => {
  //const ejercicio=Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  const [hintsTerminado, setHintsTerminado] = useState(null);
  const [index, setIndex] = useState([0]);

  return (
    <div>
      <BreadcrumbTutor
        root="Factorización"
        item={ejercicio.itemTitle}
      ></BreadcrumbTutor>

      {ejercicio.text}
      <Wrap justify="center">
        <MathComponent tex={ejercicio.steps[0].expression} display={true} />
      </Wrap>

      <Accordion allowToggle allowMultiple index={index} style={{ padding: 0 }}>
        <AccordionItem>
          <Alert colorScheme={paso1Valido == null ? "blue" : "green"}>
            <AccordionButton
              onClick={() => {
                if (index.some((element) => element === 0)) {
                  setIndex(index.filter((e) => e !== 0));
                  ClickStepTab(
                    ejercicio.itemTitle,
                    ejercicio.steps[0].stepId,
                    "close"
                  );
                } else {
                  setIndex(index.concat(0));
                  ClickStepTab(
                    ejercicio.itemTitle,
                    ejercicio.steps[0].stepId,
                    "open"
                  );
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {ejercicio.steps[0].step}
                {paso1Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            <FCpaso1
              ejercicio={ejercicio.steps[0]}
              setPaso1Valido={setPaso1Valido}
              paso1Valido={paso1Valido}
              setHintsTerminado={setHintsTerminado}
            ></FCpaso1>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FC;
