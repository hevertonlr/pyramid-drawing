import { PyramidConfig } from "../../../src/core/value-objects/pyramid-config.vo";
import { PyramidGeneratorService } from "../../../src/infrastructure/generators/pyramid-generator.service";

describe("PyramidGeneratorService", () => {
  let generator: PyramidGeneratorService;

  beforeEach(() => {
    generator = new PyramidGeneratorService();
  });

  it("deve gerar uma instância de Pyramid com a configuração fornecida", () => {
    const config = new PyramidConfig(3, "*", 1, "normal");
    const pyramid = generator.generate(config);

    expect(pyramid).toBeDefined();
    expect(pyramid.getTotalLines()).toBe(3);
  });

  describe("Orientação normal", () => {
    it("deve gerar 1 pirâmide normal", () => {
      const config = new PyramidConfig(3, "*", 1, "normal");
      const lines = generator.generate(config);

      expect(lines.getLines().map((l) => l.content)).toEqual([
        "  *  ",
        " *** ",
        "*****",
      ]);
    });

    it("deve gerar 2 pirâmides normais, primeira invisível", () => {
      const config = new PyramidConfig(3, "*", 2, "normal");
      const lines = generator.generate(config);

      expect(lines.getLines().map((l) => l.content)).toEqual([
        "     " + "  " + "  *  ",
        "     " + "  " + " *** ",
        "     " + "  " + "*****",
      ]);
    });

    it("deve gerar 3 pirâmides normais, primeira invisível", () => {
      const config = new PyramidConfig(3, "*", 3, "normal");
      const lines = generator.generate(config);

      expect(lines.getLines().map((l) => l.content)).toEqual([
        "     " + "  " + "  *  " + "  " + "  *  ",
        "     " + "  " + " *** " + "  " + " *** ",
        "     " + "  " + "*****" + "  " + "*****",
      ]);
    });
  });

  describe("Orientação inversa", () => {
    it("deve gerar 1 pirâmide invertida", () => {
      const config = new PyramidConfig(3, "#", 1, "inversa");
      const lines = generator.generate(config);

      expect(lines.getLines().map((l) => l.content)).toEqual([
        "#####",
        " ### ",
        "  #  ",
      ]);
    });

    it("deve gerar 2 pirâmides invertidas com primeira invisível", () => {
      const config = new PyramidConfig(3, "#", 2, "inversa");
      const lines = generator.generate(config);

      expect(lines.getLines().map((l) => l.content)).toEqual([
        "     " + "  " + "#####",
        "     " + "  " + " ### ",
        "     " + "  " + "  #  ",
      ]);
    });

    it("deve gerar 3 pirâmides invertidas com primeira invisível", () => {
      const config = new PyramidConfig(3, "#", 3, "inversa");
      const lines = generator.generate(config);

      expect(lines.getLines().map((l) => l.content)).toEqual([
        "     " + "  " + "#####" + "  " + "#####",
        "     " + "  " + " ### " + "  " + " ### ",
        "     " + "  " + "  #  " + "  " + "  #  ",
      ]);
    });
  });
});
