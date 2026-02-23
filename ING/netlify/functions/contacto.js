
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método no permitido" };
  }

  const data = JSON.parse(event.body);
  const { nombre, empresa, rol, email, mensaje } = data;

  if (!nombre || !email || !mensaje) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Campos obligatorios faltantes" })
    };
  }

  console.log("Nuevo Lead:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Mensaje enviado correctamente 🚀" })
  };
};
