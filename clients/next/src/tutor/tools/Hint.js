import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Center,
  Badge,
} from "@chakra-ui/react";

import { BellIcon } from "@chakra-ui/icons";

//import { RequestHint } from "./RequestHint";

const Hint = ({
  ejercicio,
  //setHintsTerminado,
  stepId,
  itemTitle,
  error,
  setError,
}) => {
  const [i, setI] = useState(0);
  const [lista] = useState([ejercicio[0]]);
  const [j, setJ] = useState(0); //para los botones
  //let lista = [ejercicio[0]];

  const ayuda = () => {
    if ((ejercicio.length > lista.length) & error) {
      //setI(i + 1);
      lista.push(ejercicio[i + 1]);
      console.log(lista);
      console.log(ejercicio);
      setI(i + 1);
      setJ(i + 1);
      //lista.push(ejercicio[i]);
    }
    setError(false);
  };

  const siguiente = () => {
    // RequestHint(stepId, ejercicio[i].hintId, itemTitle);

    if (lista[j + 1] != null) {
      setJ(j + 1);
    } /*else {
      //retorna cuando se termina los hint a los ejercicios (hasta el momento no se usa)
      setHintsTerminado(i);
    }*/
  };
  const atras = () => {
    // RequestHint(stepId, ejercicio[i].hintId, itemTitle);

    if (lista[j - 1] != null) {
      setJ(j - 1);
    } /*else {
      //retorna cuando se termina los hint a los ejercicios (hasta el momento no se usa)
      setHintsTerminado(i);
    }*/
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button
            onClick={ayuda}
            colorScheme="cyan"
            variant="outline"
            size="sm"
          >
            Ayuda &nbsp;
            {error && i < ejercicio.length - 1 ? ( //en esta parte va la notificación de un nuevo hint
              <Badge
                boxSize="1.25em"
                color="white"
                bg="tomato"
                borderRadius="lg"
              >
                1
              </Badge>
            ) : (
              <Badge boxSize="1.25em" color="white" bg="gray" borderRadius="lg">
                0
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <br />
            {lista[j].hint} <br />
            <br />
            <Center>
              {lista[j - 1] && (
                <Button
                  onClick={atras}
                  colorScheme="cyan"
                  variant="outline"
                  size="sm"
                >
                  atras
                </Button>
              )}
              &nbsp;&nbsp;&nbsp;
              {lista[j + 1] && (
                <Button
                  onClick={siguiente}
                  colorScheme="cyan"
                  variant="outline"
                  size="sm"
                >
                  siguiente
                </Button>
              )}
            </Center>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Hint;
