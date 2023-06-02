import { ApiProperty } from "@nestjs/swagger";
import { STRING } from "sequelize";
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

    @ApiProperty({example: 'false', description: 'Открыт ли профиль пользователя для поиска в приложении'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    open: boolean

    @ApiProperty({example: 'true', description: 'Статус бана пользователя'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: string

    @ApiProperty({example: 'За нарушение правил...', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @ApiProperty({example: '1', description: 'Уровень пользователя'})
    @Column({type: DataType.INTEGER, allowNull: true, defaultValue: 1})
    level: number
    
    @ApiProperty({example: '1000', description: 'Суммарное количество очков пользователя'})
    @Column({type: DataType.INTEGER, allowNull: true, defaultValue: 0})
    totalPoints: number

    @ApiProperty({example: '1000', description: 'Общее количество запусков'})
    @Column({type: DataType.INTEGER, allowNull: true, defaultValue: 0})
    totalStarts: number

    @ApiProperty({example: '1000', description: 'Общее время концентрации(в минутах)'})
    @Column({type: DataType.INTEGER, allowNull: true, defaultValue: 0})
    totalConcentration: number

    @ApiProperty({example: '10.02.22 | 30', description: 'Концентрация в день'})
    @Column({type: DataType.ARRAY(STRING), allowNull: false, defaultValue: []})
    dayConcentration: []
}



