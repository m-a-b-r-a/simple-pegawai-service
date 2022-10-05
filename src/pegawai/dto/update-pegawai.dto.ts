import { PartialType } from '@nestjs/mapped-types';
import { PegawaiStatus } from '../pegawai.model';
import { CreatePegawaiDto } from './create-pegawai.dto';
import { IsEnum, IsOptional, IsString , IsEmail } from "class-validator"

export class UpdatePegawaiDto extends PartialType(CreatePegawaiDto) {
    
    //validasi bahwa data boleh null, yang lain liat di createpegawaiDto
    @IsOptional()
    @IsString()
    fullName:string

    @IsOptional()
    @IsEmail()
    email:string
    
    @IsOptional()
    @IsString()
    phoneNumber:string

    @IsOptional()
    @IsEnum(PegawaiStatus)
    status:PegawaiStatus
}
