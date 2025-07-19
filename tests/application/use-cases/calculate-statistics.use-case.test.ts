import { CalculateStatisticsUseCase } from "../../../src/application/use-cases/calculate-statistics.use-case";
import { Pyramid } from "../../../src/core/entities/pyramid.entity";
import { PyramidConfig } from "../../../src/core/value-objects/pyramid-config.vo";
import { MemoryPyramidRepository } from "../../../src/infrastructure/repositories/memory-pyramid.repository";

describe("CalculateStatisticsUseCase", () => {
  let statsUseCase: CalculateStatisticsUseCase;
  let pyramidRepository: MemoryPyramidRepository;

  beforeEach(() => {
    pyramidRepository = new MemoryPyramidRepository();
    statsUseCase = new CalculateStatisticsUseCase(pyramidRepository);
  });

  it("deve calcular o total de linhas somando todas as pirâmides", () => {
    const config1 = new PyramidConfig(2, "*", 1, "normal");
    const config2 = new PyramidConfig(3, "#", 1, "inversa");

    const pyramid1 = new Pyramid(config1);
    const pyramid2 = new Pyramid(config2);

    pyramidRepository.save(pyramid1);
    pyramidRepository.save(pyramid2);

    const total = statsUseCase.execute();

    expect(total).toBe(pyramid1.getTotalLines() + pyramid2.getTotalLines());
  });

  it("deve retornar zero se não houver pirâmides", () => {
    const total = statsUseCase.execute();
    expect(total).toBe(0);
  });
});
