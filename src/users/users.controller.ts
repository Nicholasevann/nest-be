import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){

    }
    @Get() //get users
    findAll(@Query('role') role?:'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.userService.findAll(role)
    }
    @Get('interns') //users/interns
    findAllInterns(){
        return []
    }
    @Get(':id') //users/[id]
    findOne( @Param('id') id:string){
       return this.userService.findOne(+id)
    }

    @Post() //Post
    create(@Body() user:{name:string, email:string, role:'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.userService.create(user)
    }
    @Patch(':id') // Patch users/[id]
    update( @Param('id') id:string,@Body() userUpdate:{name:string, email:string, role:'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.userService.update(+id,userUpdate)
    }

    @Delete(':id') // Delete users/[id]
    delete( @Param('id') id:string){
       return this.userService.delete(+id)
    }
  
}
