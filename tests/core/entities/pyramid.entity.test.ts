import { Pyramid } from "@core/entities/pyramid.entity";
import { PyramidConfig } from "@core/value-objects/pyramid-config.vo";

describe("Pyramid Entity", () => {
  it("deve gerar pirâmide normal com 1 unidade", () => {
    const config = new PyramidConfig(3, "*", 1, "normal");
    const pyramid = new Pyramid(config);

    const lines = pyramid.getLines().map((l) => l.content.trim());
    expect(lines).toEqual(["*", "***", "*****"]);
    expect(pyramid.getTotalLines()).toBe(3);
  });

  it("deve gerar pirâmide invertida com 1 unidade", () => {
    const config = new PyramidConfig(3, "*", 1, "inversa");
    const pyramid = new Pyramid(config);

    const lines = pyramid.getLines().map((l) => l.content.trim());
    expect(lines).toEqual(["*****", "***", "*"]);
    expect(pyramid.getTotalLines()).toBe(3);
  });

  it("deve gerar 2 pirâmides e ocultar a primeira", () => {
    const config = new PyramidConfig(2, "#", 2, "normal");
    const pyramid = new Pyramid(config);

    const lines = pyramid.getLines();
    expect(lines[0].content.trim()).toMatch(/^#+$/); // só a 2ª visível
    expect(lines[1].content.trim()).toMatch(/^###+$/);
  });
});
