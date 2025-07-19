import { PyramidDomainException } from "@core/exceptions/pyramid-domain.exception";
import { Character } from "@core/value-objects/character.vo";

describe("Character VO", () => {
  it("deve criar caractere válido", () => {
    const character = new Character("*");
    expect(character.getValue()).toBe("*");
  });

  it("deve lançar exceção se valor for vazio", () => {
    expect(() => new Character("")).toThrow(PyramidDomainException);
  });

  it("deve lançar exceção se valor tiver mais de um caractere", () => {
    expect(() => new Character("##")).toThrow(PyramidDomainException);
  });
});
