import React from "react";

export const ClickStepTab = (itemTitle, stepId, result) => {
  var date = new Date();
  console.log("actor: " + "aca deberia ir ID del estudiante,");
  console.log("verbo: ClickStepTab,");
  console.log("objeto: {\n\titemTitle: " + itemTitle + ",");
  console.log("\tstepId: " + stepId + ",");
  console.log("},");
  console.log("timestamp: " + date);
  console.log("result: " + result + ","); //booleano si esta abierto o cerrado
  return ClickStepTab;
};
