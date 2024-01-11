export abstract class DBDriver<Entity, Repository> {
  abstract init(): void;
  abstract getRepository(entity: Entity): Repository;
}
