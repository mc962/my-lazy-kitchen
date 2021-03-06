import { Model, snakeCaseMappers } from 'objection';

export default class Application extends Model {
    createdAt: string | undefined;
    updatedAt: string | undefined;

    static get columnNameMappers() {
        return snakeCaseMappers();
    }

    static get pickJsonSchemaProperties() {
        return true;
    }

    $beforeInsert() {
        this.createdAt = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}