import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con Buenos dias en la mañana", () => {
    expect(saludar("Maite", 10)).toEqual("Buenos días Maite!");
  });

  it("deberia saludar con Buenas tardes en la tarde", () => {
    expect(saludar("Maite", 15)).toEqual("Buenas tardes Maite!");
  });

  it("deberia saludar con Buenas noches en la noche", () => {
    expect(saludar("Maite", 22)).toEqual("Buenas noches Maite!");
  });
});

