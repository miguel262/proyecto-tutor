import React from "react";

export const RequestHint = (stepId, hintId, itemTitle) => {
  var date = new Date();

  console.log("actor: " + "aca deberia ir ID del estudiante,");
  console.log("verbo: RequestHint,");
  console.log("objeto: {\n\titemTitle: " + itemTitle + ",");
  console.log("\tstepId: " + stepId + ",");
  console.log("\thintId: " + hintId + ",");
  console.log("},");
  console.log("timestamp: " + date);
  return RequestHint;
};
