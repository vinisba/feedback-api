import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Account from 'App/Models/Account'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  public async run() {
    await Account.create({
      name: 'ACME Inc.',
      description: 'Lorem ipsum ACME Inc.',
    })
  }
}
