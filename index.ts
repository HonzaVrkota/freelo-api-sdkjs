import { freeloApiInit } from "./src/freeloApiInit";
export default freeloApiInit;

import "dotenv/config";

const apiKey = process.env["API_KEY"] ?? "";
const freeloUser = process.env["FREELO_USER"] ?? "";

const main = async () => {
  const freelo = freeloApiInit(freeloUser, apiKey);
  // const project = await freelo.getTasklist({
  //   tasklistID: "601782",
  // });
  // console.log(project.data);
};
main();
