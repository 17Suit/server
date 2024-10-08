import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { TripService } from './trip.service';

@ApiTags('Trips')
@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new trip' })
  @ApiResponse({
    status: 201,
    description: 'The trip has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createPlanDto: CreateTripDto) {
    return this.tripService.create(createPlanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trips' })
  @ApiResponse({ status: 200, description: 'Return all trips.' })
  findAll() {
    return this.tripService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a trip by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the trip with the specified ID.',
  })
  @ApiResponse({ status: 404, description: 'Trip not found.' })
  findOne(@Param('id') id: string) {
    return this.tripService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a trip by ID' })
  @ApiResponse({
    status: 200,
    description: 'The trip has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Plan not found.' })
  update(@Param('id') id: string, @Body() updatePlanDto: UpdateTripDto) {
    return this.tripService.update(id, updatePlanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trip by ID' })
  @ApiResponse({
    status: 200,
    description: 'The trip has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Plan not found.' })
  remove(@Param('id') id: string) {
    return this.tripService.remove(id);
  }
}
