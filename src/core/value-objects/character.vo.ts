import { PyramidDomainException } from "../exceptions/pyramid-domain.exception";

export class Character {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.length !== 1) {
      throw PyramidDomainException.invalidCharacter();
    }

    this.value = value;
  }

  getValue = (): string => this.value;
}
