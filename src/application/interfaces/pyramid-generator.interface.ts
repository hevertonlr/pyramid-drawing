import { Pyramid } from "../../core/entities/pyramid.entity";
import { PyramidConfig } from "../../core/value-objects/pyramid-config.vo";

export interface IPyramidGenerator {
  generate(config: PyramidConfig): Pyramid;
}
