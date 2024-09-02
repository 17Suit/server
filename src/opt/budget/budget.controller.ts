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

import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@ApiTags('Budgets')
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo presupuesto' })
  @ApiResponse({
    status: 201,
    description: 'El presupuesto ha sido creado exitosamente.',
    type: Budget,
  })
  async create(@Body() createBudgetDto: CreateBudgetDto): Promise<Budget> {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los presupuestos' })
  @ApiResponse({
    status: 200,
    description: 'Los presupuestos han sido obtenidos exitosamente.',
    type: [Budget],
  })
  async findAll(): Promise<Budget[]> {
    return this.budgetService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un presupuesto por id' })
  @ApiParam({ name: 'id', description: 'El id del presupuesto' })
  @ApiResponse({
    status: 200,
    description: 'El presupuesto encontrado',
    type: Budget,
  })
  async findOne(@Param('id') id: number): Promise<Budget> {
    return this.budgetService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un presupuesto' })
  @ApiParam({ name: 'id', description: 'El id del presupuesto a actualizar' })
  @ApiResponse({
    status: 200,
    description: 'El presupuesto ha sido actualizado exitosamente.',
    type: Budget,
  })
  async update(
    @Param('id') id: number,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ): Promise<Budget> {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un presupuesto' })
  @ApiParam({ name: 'id', description: 'El id del presupuesto a eliminar' })
  @ApiResponse({
    status: 200,
    description: 'El presupuesto ha sido eliminado exitosamente.',
  })
  async remove(@Param('id') id: number): Promise<Budget> {
    return this.budgetService.remove(id);
  }
}
