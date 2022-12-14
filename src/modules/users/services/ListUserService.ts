import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UsersRepository";

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UserRepository);

    //nao tem repository prq to usando o find que ja vem do typorm
    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;
