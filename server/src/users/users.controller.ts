import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.quard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: 'Получение пользователя по id'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getOneById(@Param('id') id: number) {
        return this.userService.getUserById(id)
    }

    @ApiOperation({summary: 'Получение пользователя по никнейму'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get('/nickname/:name')
    getOneByNick(@Param('name') name: string) {
        return this.userService.getUserByNickName(name)
    }

    @ApiOperation({summary: 'Изменение статуса видимости пользователя'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get('/changeVisibility/:id')
    changeVisibility(@Param('id') id: number) {
        return this.userService.changeVisibility(id)
    }

    @ApiOperation({summary: 'Изменение суммарного количества очков пользователя'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Post('addPoints')
    changeTotalPoints(@Body() {id, points}) {
        return this.userService.changeTotalPoints(id, points)
    }

    @ApiOperation({summary: 'Изменение суммарного количества запусков пользователя'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Post('addTotalStarts')
    changeTotalStarts(@Body() {id}) {
        return this.userService.changeTotalStarts(id)
    }

    @ApiOperation({summary: 'Изменение суммарного количества минут концентрации'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Post('addTotalConcentration')
    changeTotalConcentration(@Body() {id, minutes}) {
        return this.userService.changeTotalConcentration(id, minutes)
    }

    @ApiOperation({summary: 'Изменение суммарного количества минут концентрации'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Post('addDayConcentration')
    changeDayConcentration(@Body() {id, dayAndMinutes}) {
        return this.userService.changeDayConcentration(id, dayAndMinutes)
    }
}



