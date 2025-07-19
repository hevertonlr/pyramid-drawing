import { ValidationUtil } from "../../../src/shared/utils/validation.util";

describe("ValidationUtil", () => {
  describe("ensureNumber", () => {
    it("não lança erro para valores numéricos válidos", () => {
      expect(() => ValidationUtil.ensureNumber(10, "erro")).not.toThrow();
    });

    it("lança erro para valores não numéricos", () => {
      expect(() => ValidationUtil.ensureNumber("10", "não é número")).toThrow(
        "não é número"
      );
      expect(() => ValidationUtil.ensureNumber(null, "err")).toThrow("err");
      expect(() => ValidationUtil.ensureNumber(NaN, "inválido")).toThrow(
        "inválido"
      );
    });
  });

  describe("ensureString", () => {
    it("não lança erro para strings válidas", () => {
      expect(() => ValidationUtil.ensureString("teste", "erro")).not.toThrow();
    });

    it("lança erro para valores não string ou string vazia", () => {
      expect(() => ValidationUtil.ensureString("", "msg")).toThrow("msg");
      expect(() => ValidationUtil.ensureString("   ", "msg")).toThrow("msg");
      expect(() => ValidationUtil.ensureString(123, "string esperada")).toThrow(
        "string esperada"
      );
    });
  });
});
