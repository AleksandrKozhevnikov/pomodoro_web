import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class LoginUserDto {

    @ApiProperty({example: 'test@gmail.com', description: 'Почта пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string

    @ApiProperty({example: 'ExamplePassword', description: 'Пароль пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(7, 20, {message: 'Длина пароля должна быть не менее 7 символов, но не более 20'})
    readonly password: string
}