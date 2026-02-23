
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        nombre: document.querySelector("#nombre").value,
        empresa: document.querySelector("#empresa").value,
        rol: document.querySelector("#rol").value,
        email: document.querySelector("#email").value,
        mensaje: document.querySelector("#mensaje").value
      };

      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message || "Enviado");
      form.reset();
    });
  }
});
