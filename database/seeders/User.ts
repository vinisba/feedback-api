import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Account from 'App/Models/Account'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  public async run() {
    const user = await User.create({
      email: 'vinisba@gmail.com',
      password: '12341234',
    })

    const account = await Account.first()

    await account?.related('users').attach({
      [user.id]: {
        role_id: 1,
      },
    })
  }
}
