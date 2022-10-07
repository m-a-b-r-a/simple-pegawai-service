import { IsEnum, IsOptional, IsString , IsEmail } from "class-validator"
import { PegawaiStatus } from "../pegawai.model"

export class FilterPegawaiDto{
   
    //validasi bahwa data boleh null, yang lain liat di createpegawaiDto
    @IsOptional()
    @IsString()
    fullName?:string

    @IsOptional()
    @IsEmail()
    email?:string
    
    @IsOptional()
    @IsString()
    phoneNumber?:string

    @IsOptional()
    @IsEnum(PegawaiStatus)
    status?:PegawaiStatus
}