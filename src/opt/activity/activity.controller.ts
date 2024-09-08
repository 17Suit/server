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

import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';

@ApiTags('Activities')
@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva actividad' })
  @ApiResponse({
    status: 201,
    description: 'La actividad ha sido creada exitosamente.',
    type: Activity,
  })
  async create(
    @Body() createActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    return this.activityService.create(createActivityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las actividades' })
  @ApiResponse({
    status: 200,
    description: 'Las actividades han sido obtenidas exitosamente.',
    type: [Activity],
  })
  async findAll(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Get('?id')
  @ApiOperation({ summary: 'Obtener una actividad por id' })
  @ApiQuery({ name: 'id', description: 'El id de la actividad' })
  @ApiResponse({
    status: 200,
    description: 'La actividad encontrada',
    type: Activity,
  })
  async findOne(@Query('id') id: string): Promise<Activity> {
    return this.activityService.findOne(id);
  }

  @Put('?id')
  @ApiOperation({ summary: 'Actualizar una actividad' })
  @ApiQuery({ name: 'id', description: 'El id de la actividad a actualizar' })
  @ApiResponse({
    status: 200,
    description: 'La actividad ha sido actualizada exitosamente.',
    type: Activity,
  })
  async update(
    @Query('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ): Promise<Activity> {
    return this.activityService.update(id, updateActivityDto);
  }

  @Delete('?id')
  @ApiOperation({ summary: 'Eliminar una actividad' })
  @ApiQuery({ name: 'id', description: 'El id de la actividad a eliminar' })
  @ApiResponse({
    status: 200,
    description: 'La actividad ha sido eliminada exitosamente.',
  })
  async remove(@Query('id') id: string): Promise<Activity> {
    return this.activityService.remove(id);
  }
}
