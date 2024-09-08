import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { DestinyService } from './destiny.service';
import { CreateDestinyDto } from './dto/create-destiny.dto';
import { UpdateDestinyDto } from './dto/update-destiny.dto';
import { Destiny } from './entities/destiny.entity';

@ApiTags('Destinies')
@Controller('destiny')
export class DestinyController {
  constructor(private readonly destinyService: DestinyService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo destino' })
  @ApiResponse({
    status: 201,
    description: 'El destino ha sido creado exitosamente.',
    type: Destiny,
  })
  async create(@Body() createDestinyDto: CreateDestinyDto): Promise<Destiny> {
    return this.destinyService.create(createDestinyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los destinos' })
  @ApiResponse({
    status: 200,
    description: 'Los destinos han sido obtenidos exitosamente.',
    type: [Destiny],
  })
  async findAll(): Promise<Destiny[]> {
    return this.destinyService.findAll();
  }

  @Get('?id')
  @ApiOperation({ summary: 'Obtener un destino por id' })
  @ApiQuery({ name: 'id', description: 'El id del destino' })
  @ApiResponse({
    status: 200,
    description: 'El destino encontrado',
    type: Destiny,
  })
  async findOne(@Query('id') id: string): Promise<Destiny> {
    return this.destinyService.findOne(id);
  }

  @Put('?id')
  @ApiOperation({ summary: 'Actualizar un destino' })
  @ApiQuery({ name: 'id', description: 'El id del destino a actualizar' })
  @ApiResponse({
    status: 200,
    description: 'El destino ha sido actualizado exitosamente.',
    type: Destiny,
  })
  async update(
    @Query('id') id: string,
    @Body() updateDestinyDto: UpdateDestinyDto,
  ): Promise<Destiny> {
    return this.destinyService.update(id, updateDestinyDto);
  }

  @Delete('?id')
  @ApiOperation({ summary: 'Eliminar un destino' })
  @ApiQuery({ name: 'id', description: 'El id del destino a eliminar' })
  @ApiResponse({
    status: 200,
    description: 'El destino ha sido eliminado exitosamente.',
  })
  async remove(@Query('id') id: string): Promise<Destiny> {
    return this.destinyService.remove(id);
  }
}
