import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia retornar un saludo con hola", () => {
    expect(saludar("Maite")).toEqual("Hola Maite!");
  });
});

