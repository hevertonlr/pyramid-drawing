import { Pyramid } from "@core/entities/pyramid.entity";

export interface IPyramidRepository {
  save(pyramid: Pyramid): void;
  getAll(): Pyramid[];
}
