const url = "https://eloquentjavascript.net/author";
const types = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbows+unicorns",
];
async function showTypes() {
  try {
    const responses = await Promise.all(
      types.map(async (type) => {
        // Realiza una solicitud fetch para cada tipo de medio
        const resp = await fetch(url, { headers: { accept: type } });

        // Formatea la respuesta como una cadena y la devuelve
        return `${type}: ${await resp.text()}\n`;
      })
    );

    console.log(responses.join(""));
  } catch (error) {
    console.error("Error:", error);
  }
}
showTypes();
