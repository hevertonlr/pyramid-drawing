import { PyramidInputDto } from "../dto/pyramid-input.dto";

export interface IInputHandler {
  readInput(): Promise<PyramidInputDto>;
}
