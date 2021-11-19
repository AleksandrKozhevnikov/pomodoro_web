import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttributes {
    email: string,
    password: string,
    nickName: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number


    @ApiProperty({example: 'example@gmail.com', description: 'Адрес электронной почты'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: 'SomePassword', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: 'Никнейм'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    nickName: string

    @ApiProperty({example: '1', description: 'Уровень пользователя'})
    @Column({type: DataType.NUMBER, allowNull: true, defaultValue: 1})
    level: number

    @ApiProperty({example: '1000', description: 'Суммарное количество очков пользователя'})
    @Column({type: DataType.NUMBER, allowNull: true, defaultValue: 0})
    totalPoints: number

    @ApiProperty({example: 'false', description: 'Открыт ли профиль пользователя для поиска в приложении'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    open: string

    @ApiProperty({example: 'true', description: 'Статус бана пользователя'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: string

    @ApiProperty({example: 'Потому что', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string
}