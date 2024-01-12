export interface InitConfig<Entity> {
  entities: Entity[];
}
export abstract class DBDriver<Entity, Repository> {
  abstract init(config: InitConfig<Entity>): void;
  abstract getRepository(entity: Entity): Repository;
}
