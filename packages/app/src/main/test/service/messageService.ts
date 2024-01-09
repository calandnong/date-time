import type { DataSource } from 'typeorm';
import { DataBase } from './database';
import { MessageModel } from './model';

// 创建数据查询Modal
export interface MsgListDTO extends ListDTO {
  roomId: number;
}
// 列表查询基类
export interface ListDTO {
  pageNum: number;
  pageSize: number;
  sort: number;
}

// 实现MessageService
export class MessageService {
  static instance: MessageService;
  dataSource: DataSource;

  // 使用单例模式
  static getInstance() {
    if (!this.instance) {
      this.instance = new MessageService();
    }
    return this.instance;
  }

  constructor() {
    // 创建数据库
    this.dataSource = new DataBase('message').dataSource;
  }

  // 初始化主角进程监听事件
  init() {

  }

  // 实现新增方法
  async create(message: MessageModel) {
    await this.dataSource.initialize();
    const res = await this.dataSource.manager.save(message);
    await this.dataSource.destroy();
    return res;
  }

  // 实现分页查询
  async getList() {
    await this.dataSource.initialize();
    const listAndCount = await this.dataSource
      .createQueryBuilder(MessageModel, 'message')
      .getManyAndCount();
    await this.dataSource.destroy();
    return { list: listAndCount[0], count: listAndCount[1] };
  }
}
