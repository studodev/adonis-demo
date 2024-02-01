import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'todos'

    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.boolean('done').defaultTo(false);
        })
    }

    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('done');
        })
    }
}
