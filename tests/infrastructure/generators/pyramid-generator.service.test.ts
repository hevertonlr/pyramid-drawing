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
});
