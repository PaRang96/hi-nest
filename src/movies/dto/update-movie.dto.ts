import {IsString, IsNumber, IsArray} from 'class-validator';

export class UpdateMovieDto {

    @IsString()
    readonly title?: string;

    @IsNumber()
    readonly year?: number;

    @IsArray()
    @IsString({ each: true })
    readonly genres?: string[];
}