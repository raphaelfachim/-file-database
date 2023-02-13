import { UserInputDTO } from "../../infra/dto/user";
import { IUserRepository } from "../../infra/repository";

export class CreateUserUsecase {

    constructor(private _userRepository: IUserRepository) { }

    public async execute(dto: UserInputDTO): Promise<void> {
        await this._userRepository.create({id: undefined, name: dto.user, password: dto.password});
    }
}