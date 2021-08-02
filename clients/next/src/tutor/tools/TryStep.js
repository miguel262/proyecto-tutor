import React from "react";

export const TryStep = (entrada, itemTitle, stepId, result) => {
  var date = new Date();

  console.log("actor: " + "aca deberia ir ID del estudiante,");
  console.log("verbo: TryStep,");
  console.log("objeto: {\n\tentrada: " + entrada + ",");
  console.log("\titemTitle: " + itemTitle + ",");
  console.log("\tStepID: " + stepId + ",");
  console.log("},");
  console.log("timestamp: " + date);
  console.log("result: " + result + ",");
  return TryStep;
};
