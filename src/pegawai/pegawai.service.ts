import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
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
    return await this.pegawaiRepo.findOne({where:{id}});
  }

  async update(id: number, createPegawaiDto: UpdatePegawaiDto):Promise<Pegawai> {
    await this.pegawaiRepo.update(id,createPegawaiDto);
    return this.findOne(id);
  }

  async remove(id: number):Promise<object> {
    await this.pegawaiRepo.delete(id);
    return {deleted:"success"};
  }
}
