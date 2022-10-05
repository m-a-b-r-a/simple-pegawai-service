import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PegawaiStatus } from "../pegawai.model";

@Entity()
export class Pegawai {
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"full_name"})
    fullName:string
    
    @Column()
    email:string

    @Column({name:"phone_number"})
    phoneNumber:string

    @Column({type:"enum",enum:PegawaiStatus})
    status:PegawaiStatus
}
