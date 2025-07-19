import { PyramidConfig } from "../../core/value-objects/pyramid-config.vo";
import { PyramidInputDto } from "../dto/pyramid-input.dto";
import { PyramidOutputDto } from "../dto/pyramid-output.dto";
import { IPyramidGenerator } from "../interfaces/pyramid-generator.interface";
import { IPyramidRepository } from "../interfaces/pyramid-repository.interface";

export class CreatePyramidUseCase {
  constructor(
    private readonly generator: IPyramidGenerator,
    private readonly repository: IPyramidRepository
  ) {}

  execute(input: PyramidInputDto): PyramidOutputDto {
    const config = new PyramidConfig(
      input.height,
      input.character,
      input.pyramidCount,
      input.orientation
    );

    const pyramid = this.generator.generate(config);
    this.repository.save(pyramid);

    const lines = pyramid.getLines().map((line) => line.content);
    const totalLines = pyramid.getTotalLines();

    return { lines, totalLines };
  }
}
