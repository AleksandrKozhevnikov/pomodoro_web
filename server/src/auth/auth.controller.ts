import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {ValidationPipe} from '../pipes/validation.pipes'

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Вход'})
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
