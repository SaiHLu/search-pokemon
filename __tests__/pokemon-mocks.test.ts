import {
  bulbasaurMock,
  charmanderMock,
  squirtleMock,
} from "./mocks/pokemon-mocks";

describe("Pokemon Mock Data", () => {
  it("should have Bulbasaur as Grass/Poison type", () => {
    expect(bulbasaurMock.name).toBe("Bulbasaur");
    expect(bulbasaurMock.types).toContain("Grass");
    expect(bulbasaurMock.types).toContain("Poison");
  });

  it("should have Charmander as Fire type", () => {
    expect(charmanderMock.name).toBe("Charmander");
    expect(charmanderMock.types).toContain("Fire");
  });

  it("should have Squirtle as Water type", () => {
    expect(squirtleMock.name).toBe("Squirtle");
    expect(squirtleMock.types).toContain("Water");
  });
});
