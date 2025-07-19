import { PyramidDomainException } from "../../../src/core/exceptions/pyramid-domain.exception";
import { PyramidConfig } from "../../../src/core/value-objects/pyramid-config.vo";

describe("PyramidConfig VO", () => {
  it("deve criar um objeto válido com todos os valores corretos", () => {
    const config = new PyramidConfig(5, "*", 2, "inversa");

    expect(config.height.getValue()).toBe(5);
    expect(config.character.getValue()).toBe("*");
    expect(config.count.getValue()).toBe(2);
    expect(config.orientation).toBe("inversa");
  });

  it("deve lançar exceção para orientação inválida", () => {
    expect(() => {
      new PyramidConfig(5, "*", 2, "invertida");
    }).toThrowError(PyramidDomainException.invalidOrientation());
  });

  it('deve aceitar tanto "normal" quanto "inversa"', () => {
    const c1 = new PyramidConfig(3, "#", 1, "normal");
    const c2 = new PyramidConfig(4, "$", 3, "inversa");

    expect(c1.orientation).toBe("normal");
    expect(c2.orientation).toBe("inversa");
  });
});
