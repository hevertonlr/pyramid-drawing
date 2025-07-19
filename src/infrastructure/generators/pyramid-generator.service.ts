import { IPyramidGenerator } from "../../application/interfaces/pyramid-generator.interface";
import { Pyramid } from "../../core/entities/pyramid.entity";
import { PyramidConfig } from "../../core/value-objects/pyramid-config.vo";

export class PyramidGeneratorService implements IPyramidGenerator {
  generate(config: PyramidConfig): Pyramid {
    return new Pyramid(config);
  }
}
