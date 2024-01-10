// userService.ts
import { getDataSource } from '../core/applicaiton';
import User from '../entities/user.entity';

// 获取存储库
const getUserQueryBuilder = async () => {
  await getDataSource()
    .initialize();
  return getDataSource().getRepository(User).createQueryBuilder('user');
};

// 读取第一条记录
export const getFirstUser = async (name: string) => {
  const userQueryBuilder = await getUserQueryBuilder();
  return userQueryBuilder
    .where('user.name = :name', { name }) // 注意是别名 user 不是 User
    .limit(1)
    .getOne();
};

// 插入数据
export const insertUsers = async (userData: User[]) => {
  const userQueryBuilder = await getUserQueryBuilder();
  return userQueryBuilder.insert().values(userData).execute(); // 允许插入多条数据
};

// 删除单个
export const deleteUserById = async (id: number) => {
  const userQueryBuilder = await getUserQueryBuilder();
  return userQueryBuilder.delete().where('id = :id', { id }).execute();
};

// 删除所有记录
export const deleteAllUser = async () => {
  const userQueryBuilder = await getUserQueryBuilder();
  return userQueryBuilder.delete().execute();
};

// 获取总数
export const getUserCount = async () => {
  const inferQueryBuilder = await getUserQueryBuilder();
  return inferQueryBuilder.getCount();
};
