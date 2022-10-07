import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PegawaiModule } from './pegawai/pegawai.module';
import "dotenv/config";

const envConfig = process.env;
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: envConfig.DB_HOST,
    port: +envConfig.DB_PORT,
    username: envConfig.DB_USERNAME,
    password: envConfig.DB_PASSWORD,
    synchronize:true,
    autoLoadEntities:true,
    logging:true,
    dropSchema:false

  }),PegawaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
