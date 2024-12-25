import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(){
        return this.moviesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieId: string) {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: any) {
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData
        }
    }
}