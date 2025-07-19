import { PyramidDomainException } from "@core/exceptions/pyramid-domain.exception";
import { Height } from "@core/value-objects/height.vo";

describe("Height VO", () => {
  it("deve criar altura válida", () => {
    const height = new Height(5);
    expect(height.getValue()).toBe(5);
  });

  it("deve lançar exceção para altura zero ou negativa", () => {
    expect(() => new Height(0)).toThrow(PyramidDomainException);
    expect(() => new Height(-3)).toThrow(PyramidDomainException);
  });

  it("deve lançar exceção para altura não inteira", () => {
    expect(() => new Height(2.5)).toThrow(PyramidDomainException);
  });
});
