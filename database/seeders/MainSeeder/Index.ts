import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    if (!Seeder.default.environment.includes(Application.nodeEnvironment)) {
      return
    }

    await new Seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Role'))
    await this.runSeeder(await import('../Account'))
    await this.runSeeder(await import('../User'))
  }
}
