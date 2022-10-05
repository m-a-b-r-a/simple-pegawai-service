import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { Pegawai } from './entities/pegawai.entity';

@Controller('pegawai')
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  @Post()
  create(@Body() createPegawaiDto: CreatePegawaiDto):Promise<Pegawai> {
    return this.pegawaiService.create(createPegawaiDto);
  }

  @Get()
  findAll() {
    return this.pegawaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Pegawai> {
    return this.pegawaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePegawaiDto: UpdatePegawaiDto):Promise<Pegawai> {
    return this.pegawaiService.update(+id, updatePegawaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pegawaiService.remove(+id);
  }
}
