import { IsNotEmpty, IsPositive, IsString, IsInt } from "class-validator";

export class CreateBookDto {
@IsNotEmpty()
@IsString()
title:string;
@IsNotEmpty()
@IsString()
author: string;
@IsNotEmpty()
@IsInt()
publish_year: number;
@IsNotEmpty()
@IsPositive()
page_count: number;
}
