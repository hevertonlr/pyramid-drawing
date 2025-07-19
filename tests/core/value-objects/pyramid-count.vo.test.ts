import { PyramidDomainException } from "../../../src/core/exceptions/pyramid-domain.exception";
import { PyramidCount } from "../../../src/core/value-objects/pyramid-count.vo";

describe("PyramidCount VO", () => {
  it("deve aceitar valores válidos (1, 2, 3)", () => {
    [1, 2, 3].forEach((valid) => {
      const vo = new PyramidCount(valid);
      expect(vo.getValue()).toBe(valid);
    });
  });

  it("deve lançar exceção para valores inválidos (<1 ou >3)", () => {
    const invalidValues = [0, -1, 4, 10];

    invalidValues.forEach((val) => {
      expect(() => new PyramidCount(val)).toThrowError(
        PyramidDomainException.invalidPyramidCount()
      );
    });
  });
});
