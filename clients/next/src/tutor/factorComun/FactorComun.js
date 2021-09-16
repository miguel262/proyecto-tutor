import React, { useState } from "react";
//import {Ejercicio1, Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7} from './EjerciciosFC';

import FCpaso1 from "./steps/FCpaso1";
import { MathComponent } from "../../components/MathJax";
import { BreadcrumbTutor } from "../tools/BreadcrumbTutor";
import { Loading } from "../tools/Spinner";

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
import { FCabstract } from "../tools/Abstracts";

const FC = ({ ejercicio }) => {
  //const ejercicio=Ejercicio1;
  const [paso1Valido, setPaso1Valido] = useState(null);
  //const [hintsTerminado, setHintsTerminado] = useState(null);
  const [index, setIndex] = useState([0]);

  const [loading, setLoading] = useState(true);
  const change = () => setLoading(false);

  return (
    <div>
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
                {ejercicio.steps[0].stepTitle}
                {paso1Valido != null && "    ✔ "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Alert>
          <AccordionPanel style={{ padding: 0 }}>
            <>
              <FCpaso1
                ejercicio={ejercicio.steps[0]}
                setPaso1Valido={setPaso1Valido}
                paso1Valido={paso1Valido}
                loading={loading}
                // setHintsTerminado={setHintsTerminado}
              ></FCpaso1>
              {paso1Valido != null && (
                <FCabstract ejercicio={ejercicio.steps[0]} />
              )}
            </>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FC;
