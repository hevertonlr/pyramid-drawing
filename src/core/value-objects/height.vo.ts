import { PyramidDomainException } from "../exceptions/pyramid-domain.exception";

export class Height {
  private readonly value: number;

  constructor(value: number) {
    if (!Number.isInteger(value) || value <= 0) {
      throw PyramidDomainException.invalidHeight();
    }

    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}
