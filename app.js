let empleados = [];

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

const nombreInput = document.getElementById("nombre");
const dniInput = document.getElementById("dni");
const cargoInput = document.getElementById("cargo");

const mostrarLista = () => {
  lista.innerHTML = empleados.map((empleado, index) => `
    <div class="tarjeta">
      <p><strong>Nombre:</strong> ${empleado.nombre}</p>
      <p><strong>DNI:</strong> ${empleado.dni}</p>
      <p><strong>Cargo:</strong> ${empleado.cargo}</p>
      <button onclick="eliminarEmpleado(${index})">X</button>
    </div>
  `).join("");
};


const eliminarEmpleado = (index) => {
  empleados.splice(index, 1);
  mostrarLista();
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = nombreInput.value.trim();
  const dni = dniInput.value.trim();
  const cargo = cargoInput.value.trim();

  if (nombre === "" || dni === "") return;

  const nuevoEmpleado = {
    nombre,
    dni,
    cargo
  };

  empleados.push(nuevoEmpleado);

  nombreInput.value = "";
  dniInput.value = "";
  cargoInput.value = "";

  mostrarLista();
});

