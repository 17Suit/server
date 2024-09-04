import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { DestinationService } from './destination.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Destination } from './entities/destination.entity';

@ApiTags('Destinies')
@Controller('destiny')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo destino' })
  @ApiResponse({
    status: 201,
    description: 'El destino ha sido creado exitosamente.',
    type: Destination,
  })
  async create(
    @Body() createDestinationDto: CreateDestinationDto,
  ): Promise<Destination> {
    return this.destinationService.create(createDestinationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los destinos' })
  @ApiResponse({
    status: 200,
    description: 'Los destinos han sido obtenidos exitosamente.',
    type: [Destination],
  })
  async findAll(): Promise<Destination[]> {
    return this.destinationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un destino por id' })
  @ApiParam({ name: 'id', description: 'El id del destino' })
  @ApiResponse({
    status: 200,
    description: 'El destino encontrado',
    type: Destination,
  })
  async findOne(@Param('id') id: string): Promise<Destination> {
    return this.destinationService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un destino' })
  @ApiParam({ name: 'id', description: 'El id del destino a actualizar' })
  @ApiResponse({
    status: 200,
    description: 'El destino ha sido actualizado exitosamente.',
    type: Destination,
  })
  async update(
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
  ): Promise<Destination> {
    return this.destinationService.update(id, updateDestinationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un destino' })
  @ApiParam({ name: 'id', description: 'El id del destino a eliminar' })
  @ApiResponse({
    status: 200,
    description: 'El destino ha sido eliminado exitosamente.',
  })
  async remove(@Param('id') id: string): Promise<Destination> {
    return this.destinationService.remove(id);
  }
}
