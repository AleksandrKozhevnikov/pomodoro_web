import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }

    async getUserByNickName(nickName: string) {
        const user = await this.userRepository.findOne({where: {nickName}})
        return user
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        return user
    }

    async changeVisibility(id: number) {
        const userVisibility = await this.userRepository.findOne({where: {id}})
        const user = await this.userRepository.update({open: !userVisibility.open}, {where: {id}})
        return userVisibility
    }

    async changeTotalStarts(id: number) {
        const userTotalStarts = await this.userRepository.findOne({where: {id}})
        const user = await this.userRepository.update({totalStarts: userTotalStarts.totalStarts + 1}, {where: {id}})
        return userTotalStarts
    }

    async changeTotalConcentration(id: number, concentrationMinutes: number) {
        const userTotalConcentration = await this.userRepository.findOne({where: {id}})
        const user = await this.userRepository.update({totalConcentration: userTotalConcentration.totalConcentration + concentrationMinutes}, {where: {id}})
        return userTotalConcentration
    }

    async changeDayConcentration(id: number, concentrationDayAndMinutes: string) {
        const {nickName, dayConcentration} = await this.userRepository.findOne({where: {id}}) as any
        console.log(nickName, dayConcentration)
        const userNewDayConcentration = [dayConcentration, concentrationDayAndMinutes] as never
        const user = await this.userRepository.update({dayConcentration: userNewDayConcentration}, {where: {id}})

        return {nickName, dayConcentration}
    }

    async changeTotalPoints(id: number, points: number) {
        const user = await this.userRepository.findOne({where: {id}})
        const userTotalPointsBefore = user.totalPoints

        await user.update({totalPoints: Number(userTotalPointsBefore) + Number(points)})

        const userTotalPointsAfter = user.totalPoints

        if(userTotalPointsAfter > 149) {
            user.update({level: 2})
        }
        if(userTotalPointsAfter > 149 * 2) {
            user.update({level: 3})
        }
        if(userTotalPointsAfter > 149 * 3) {
            user.update({level: 4})
        }
        if(userTotalPointsAfter > 149 * 4) {
            user.update({level: 5})
        }
        return `User ${userTotalPointsBefore} total points now is ${userTotalPointsAfter} and level is ${user.level}` 
    }
}
