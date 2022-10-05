
import { Pegawai } from "../entities/pegawai.entity"
import { PegawaiStatus } from "../pegawai.model"
import { IsEnum, IsNotEmpty, IsString , IsEmail } from "class-validator"

export class CreatePegawaiDto {
    // validasi tipe data adalah string dan tidak kosong
    @IsNotEmpty()
    @IsString()
    fullName:string

    // validasi data adalah email dan tidak kosong
    @IsNotEmpty()
    @IsEmail()
    email:string

    //validasi tipe data adalah string dan tidak kosong
    @IsNotEmpty()
    @IsString()
    phoneNumber:string

    //validasi tipe data adalah enum, dengan kriteri ayang ada di file pegawai.model
    @IsNotEmpty()
    @IsEnum(PegawaiStatus)
    status:PegawaiStatus
}
