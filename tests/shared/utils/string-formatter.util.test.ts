import { StringFormatter } from "../../../src/shared/utils/string-formatter.util";

describe("StringFormatter", () => {
  describe("repeat", () => {
    it("repete corretamente um caractere", () => {
      expect(StringFormatter.repeat("*", 3)).toBe("***");
      expect(StringFormatter.repeat("#", 0)).toBe("");
      expect(StringFormatter.repeat("x", 1)).toBe("x");
    });
  });

  describe("padBothSides", () => {
    it("centraliza o conteúdo corretamente", () => {
      expect(StringFormatter.padBothSides("*", 3)).toBe(" * ");
      expect(StringFormatter.padBothSides("**", 6)).toBe("  **  ");
    });

    it("não remove caracteres se totalLength for igual ao tamanho", () => {
      expect(StringFormatter.padBothSides("abc", 3)).toBe("abc");
    });

    it("retorna string original se totalLength for menor", () => {
      expect(StringFormatter.padBothSides("abcdef", 4)).toBe("abcdef");
    });
  });
});
