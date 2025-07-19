import { PyramidOrientation } from "@shared/types/common.types";
import { PyramidDomainException } from "../exceptions/pyramid-domain.exception";
import { Character } from "./character.vo";
import { Height } from "./height.vo";
import { PyramidCount } from "./pyramid-count.vo";

export class PyramidConfig {
  readonly height: Height;
  readonly character: Character;
  readonly count: PyramidCount;
  readonly orientation: PyramidOrientation;

  constructor(
    height: number,
    character: string,
    count: number,
    orientation: string
  ) {
    this.height = new Height(height);
    this.character = new Character(character);
    this.count = new PyramidCount(count);
    this.orientation = PyramidConfig.validateOrientation(orientation);
  }

  private static validateOrientation(orientation: string): PyramidOrientation {
    if (orientation !== "normal" && orientation !== "inversa") {
      throw PyramidDomainException.invalidOrientation();
    }

    return orientation;
  }
}
