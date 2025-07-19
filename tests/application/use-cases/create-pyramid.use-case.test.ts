import { CreatePyramidUseCase } from "@app/use-cases/create-pyramid.use-case";
import { PyramidGeneratorService } from "@infra/generators/pyramid-generator.service";
import { MemoryPyramidRepository } from "@infra/repositories/memory-pyramid.repository";

describe("CreatePyramidUseCase", () => {
  let createUseCase: CreatePyramidUseCase;
  let pyramidGenerator: PyramidGeneratorService;
  let pyramidRepository: MemoryPyramidRepository;

  beforeEach(() => {
    pyramidGenerator = new PyramidGeneratorService();
    pyramidRepository = new MemoryPyramidRepository();
    createUseCase = new CreatePyramidUseCase(
      pyramidGenerator,
      pyramidRepository
    );
  });

  it("deve criar uma pirâmide e salvar no repositório", () => {
    const input = {
      height: 3,
      character: "*",
      pyramidCount: 1,
      orientation: "normal",
    };

    const output = createUseCase.execute(input);

    expect(output.lines.length).toBe(3);
    expect(output.totalLines).toBe(3);

    const saved = pyramidRepository.getAll();
    expect(saved.length).toBe(1);
  });

  it("deve lançar erro para configuração inválida", () => {
    const input = {
      height: 0,
      character: "*",
      pyramidCount: 1,
      orientation: "normal",
    };

    expect(() => createUseCase.execute(input)).toThrow();
  });
});
