const pacientes = new Array(
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  }
);

const total = function (pacientes) {
  return {
    nPacientes: pacientes.length,

    nMayoresEdad: pacientes.filter((persona) => persona.paciente.edad > 17)
      .length,

    nHombresDiabeticos: pacientes.filter(
      ((persona) => persona.dieta === "Diabetes") &&
        ((persona) => persona.paciente.sexo === "H")
    ).length,

    totalDiasIngreso: pacientes.reduce(function sumar(antes, despues) {
      return antes + despues.diasIngresado;
    }, 0),
  };
};

console.log(total(pacientes));
