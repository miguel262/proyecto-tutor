import React, { useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import { RequestHint } from "./RequestHint";

const Hint = ({ ejercicio, setHintsTerminado, stepId, itemTitle }) => {
  const [i, setI] = useState(0);

  const toast = useToast();

  const changeHint = () => {
    RequestHint(stepId, ejercicio[i].hintId, itemTitle);
    if (ejercicio[i + 1] != null) {
      setI(i + 1);
    } else {
      //retorna cuando se termina los hint a los ejercicios (hasta el momento no se usa)
      setHintsTerminado(i);
    }
  };

  return (
    <div>
      <Button
        onClick={() =>
          toast({
            description: ejercicio[i].hint,
            duration: 5000,
            isClosable: true,
            position: "bottom-right",
            variant: "left-accent",
            render: changeHint(),
          })
        }
        colorScheme="cyan"
        variant="outline"
        size="sm"
      >
        Hint {i + 1}
      </Button>
    </div>
  );
};

export default Hint;
