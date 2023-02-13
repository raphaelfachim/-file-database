import { IUserRepository } from "./infra/repository";
import { UserArquivoRepository } from "./infra/repository/implementation";
import { CreateUserUsecase, FindAllUsersUsecase } from "./usecase/user";


const userRepo: IUserRepository = new UserArquivoRepository();

console.log('Creating user');

new CreateUserUsecase(userRepo).execute({user: 'raphael', password: '1234'}).then( ( ) => {

    new FindAllUsersUsecase(userRepo).execute().then((users) => {
        console.log('User list:', users);
    })

});