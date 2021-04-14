import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Booking1617303675459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'booking',
                columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },{
                    name: 'date',
                    type: 'varchar',
                    isNullable: false
                },{
                    name: 'approved',
                    type: 'boolean',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: 'spot_id',
                    type: 'uuid'
                },{
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },{
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }]
            })
        )
        await queryRunner.createForeignKey(
            'booking',
            new TableForeignKey({
              name: 'userProviderBooking',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }),
          );

          await queryRunner.createForeignKey(
            'booking',
            new TableForeignKey({
              name: 'SpotsProviderBooking',
              columnNames: ['spot_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'spots',
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('booking')
    }

}
