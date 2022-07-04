import { Body, Controller, Post, UsePipes, UseGuards, Get} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import {LoginUserDto} from 'src/users/dto/login-user.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.quard';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {ValidationPipe} from '../pipes/validation.pipes'

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Вход'})
    @UsePipes(ValidationPipe)
    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

    @ApiOperation({summary: 'Проверка данных пользователя'})
    @Post('/checkRegData')
    checkEmail(@Body() regData: object) {
        return this.authService.checkRegData(regData)
    }

    @ApiOperation({summary: 'Проверка валидности токена'})
    @Get('/checkToken')
    @UseGuards(JwtAuthGuard)
    checkTokenValid() {
        return 'checKToken'
    }
}
