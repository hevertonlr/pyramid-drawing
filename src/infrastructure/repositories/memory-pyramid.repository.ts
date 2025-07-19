import { IPyramidRepository } from "../../application/interfaces/pyramid-repository.interface";
import { Pyramid } from "../../core/entities/pyramid.entity";

export class MemoryPyramidRepository implements IPyramidRepository {
  private readonly pyramids: Pyramid[] = [];

  save(pyramid: Pyramid): void {
    this.pyramids.push(pyramid);
  }

  getAll = (): Pyramid[] => [...this.pyramids];
}
