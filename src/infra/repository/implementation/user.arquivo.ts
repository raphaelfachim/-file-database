import { IUser } from "../../../model";
import { GenericArquivoRepository } from "./generic.arquivo";

export class UserArquivoRepository extends GenericArquivoRepository<IUser> {

    constructor() {
        super('src/infra/file-db/user.db.json');
    }

}