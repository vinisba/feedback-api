import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthLoginValidator from 'App/Validators/AuthLoginValidator'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthLoginValidator)

    const token = await auth.use('api').attempt(email, password)
    return token
  }
}
