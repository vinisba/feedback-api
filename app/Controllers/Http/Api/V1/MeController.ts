import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MeController {
  public async index({ response, auth }: HttpContextContract) {
    return response.json(auth.user)
  }
}
