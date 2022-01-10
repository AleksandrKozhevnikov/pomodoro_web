import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import {User} from '../users/users.model'
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidateEmail = await this.userService.getUserByEmail(userDto.email)
        const candidateNickName = await this.userService.getUserByNickName(userDto.nickName)

        if(candidateEmail) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        if(candidateNickName) {
            throw new HttpException('Пользователь с таким ником уже существует', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})

        return this.generateToken(user)
    }


    async checkRegData(regData: any) {
        if(regData.email) {
            const candidateEmail = await this.userService.getUserByEmail(regData.email)
            if(candidateEmail) {
                throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
            }
    
            return true
        }

        if(regData.nickname) {
            const candidateNickName = await this.userService.getUserByNickName(regData.nickname)
            if(candidateNickName) {
                throw new HttpException('Пользователь с таким ником уже существует', HttpStatus.BAD_REQUEST)
            }
            return true
        }
    }


    private async generateToken(user: User) {
        const payload = {id: user.id, email: user.email, nickName: user.nickName}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)

        if(user && passwordEquals) {
            return user
        }
        
        throw new UnauthorizedException('Неккоректный email или пароль')
    }
}
