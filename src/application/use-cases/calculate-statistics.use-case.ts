import { IPyramidRepository } from "../interfaces/pyramid-repository.interface";

export class CalculateStatisticsUseCase {
  constructor(private readonly repository: IPyramidRepository) {}

  execute(): number {
    const pyramids = this.repository.getAll();
    return pyramids.reduce((acc, pyramid) => acc + pyramid.getTotalLines(), 0);
  }
}
