import { freeloApiInit } from "./src/freeloApiInit";
export default freeloApiInit;

import "dotenv/config";

const apiKey = process.env["API_KEY"] ?? "";

const main = async () => {
  const freelo = freeloApiInit("jan@vrkota.name", apiKey);

  const project = await freelo.getTasklist({
    tasklistID: "601782",
  });
  console.log(project.data);
};
main();
