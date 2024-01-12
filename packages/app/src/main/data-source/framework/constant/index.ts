/**
 * 元数据标志
 */
export const META_TAGS = {
  /**
   * 数据库仓储实体的元数据标签
   */
  REPOSITORY_ENTITY_TAG: Symbol('REPOSITORY_ENTITY_TAG'),
};

/**
 * 框架内置类注入key
 */
export const INJECT_KEYS = {
  /**
   * 内置仓储类
   */
  REPOSITORY: Symbol('REPOSITORY'),
};

/**
 * 模块定义装饰器
 */
export const MODULE_DEFINE_DECORATOR = Symbol('MODULE_DEFINE_DECORATOR');

/**
 * 模块定义装饰器的模块数据
 */
export const MODULE_DEFINE_DECORATOR_MODULE_DATA = Symbol('MODULE_DEFINE_DECORATOR_MODULE_DATA');
