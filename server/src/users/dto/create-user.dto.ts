import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'test@gmail.com', description: 'Почта пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string

    @ApiProperty({example: 'ExamplePassword', description: 'Пароль пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(7, 20, {message: 'Длина пароля должна быть не менее 7 символов, но не более 20'})
    readonly password: string

    @ApiProperty({example: 'ExampleNickName', description: 'Никнэйм пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(3, 15, {message: 'Длина никнейма должна быть не менее 3 символов, но не более 15'})
    readonly nickName: string
}