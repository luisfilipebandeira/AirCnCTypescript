import { EntityRepository, Repository, getRepository } from 'typeorm'

import Users from '../models/Users'

@EntityRepository(Users)
class UserRepository extends Repository<Users>{
    private ormRepository: Repository<Users>;

    constructor() {
        super();
        this.ormRepository = getRepository(Users);
    }
    public async getSpots(){
        
    }

    public async findByEmail(email: string): Promise<Users | undefined> {
        const user = this.ormRepository.findOne({ where: { email } });
        return user;
      }
}   

export default UserRepository