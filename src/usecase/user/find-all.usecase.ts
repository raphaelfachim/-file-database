import { UserOutputDTO } from "../../infra/dto/user";
import { IUserRepository } from "../../infra/repository";
import { IUser } from "../../model";

export class FindAllUsersUsecase {

    constructor(private _userRepository: IUserRepository) { }

    public async execute(): Promise<UserOutputDTO[]> {
        const users: IUser[] = await this._userRepository.findAll();
        return users.map(user => {
            return {
            id: user.id,
            user: user.name
        }});
    }
}