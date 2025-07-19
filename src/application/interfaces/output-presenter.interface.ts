import { PyramidOutputDto } from "../dto/pyramid-output.dto";

export interface IOutputPresenter {
  present(output: PyramidOutputDto): void;
}
