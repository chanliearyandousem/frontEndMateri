import helloWorld from "./helloWorld.js";
import ambilDataUser from "./nomorDua/ambilDataUser.js";
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
messages();
ambilDataUser();