import { group } from './../model/group';
import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
import groupRepository from "../repository/group.repository";

@Controller('groups')
export class GroupController {

  @Get()
  async findAll(_: Request, res: Response) {
    try {
      const groups = await groupRepository.getAll()
      res.status(200).json(groups);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  @Post()
  async createGroup(req: Request, res: Response) {
    const group = req.body as group;
    try {
      const newGroup = await groupRepository.create(group)

      res.status(200).json(newGroup)
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  }
}
