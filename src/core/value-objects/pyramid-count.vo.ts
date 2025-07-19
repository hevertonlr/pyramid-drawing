import { PyramidDomainException } from "../exceptions/pyramid-domain.exception";

export class PyramidCount {
  private readonly value: number;

  constructor(value: number) {
    if (![1, 2, 3].includes(value)) {
      throw PyramidDomainException.invalidPyramidCount();
    }

    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}
