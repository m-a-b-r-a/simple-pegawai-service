import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { FilterPegawaiDto } from './dto/filter-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { Pegawai } from './entities/pegawai.entity';

@Injectable()
export class PegawaiService {

  constructor(@InjectRepository(Pegawai) private pegawaiRepo:Repository<Pegawai>){}

  async create(createPegawaiDto: CreatePegawaiDto):Promise<Pegawai> {
    const pegawai = await this.pegawaiRepo.create(createPegawaiDto);
    await this.pegawaiRepo.save(pegawai);
    return pegawai;
  }

  async findAll() {
    return await this.pegawaiRepo.find(); 
  }

  async findOne(id: number):Promise<Pegawai> {
    const found = await this.pegawaiRepo.findOne({where:{id}});
    if(!found){
      throw new NotFoundException(`Data Pegawai dengan id :${id} tidak ditemukan`)
    }
    return found;
  }

  async filter(filter:FilterPegawaiDto){
    const {fullName,email,phoneNumber,status} = filter;
 
    if(fullName || email || phoneNumber || status){

      return await this.pegawaiRepo.find({
        where:[
          {
            fullName:Like(`%${fullName}%`),
            email:email,
            phoneNumber:phoneNumber,
            status:status
          }
        ]
      })
    }
  }

  async update(id: number, createPegawaiDto: UpdatePegawaiDto):Promise<Pegawai> {
    await this.pegawaiRepo.update(id,createPegawaiDto);
    return this.findOne(id);
  }

  async remove(id: number):Promise<object> {
    await this.findOne(id);
    await this.pegawaiRepo.delete(id);
    return {deleted:"success"};
  }
}
