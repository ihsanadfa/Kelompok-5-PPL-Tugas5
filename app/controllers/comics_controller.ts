import type { HttpContext } from '@adonisjs/core/http'
import Comic from '../models/comic.js'

export default class ComicsController {
  // GET /comics
  async index({ response }: HttpContext) {
    const comics = await Comic.all()
    return response.ok({ data: comics })
  }

  // GET /comics/:id
  async show({ params, response }: HttpContext) {
    const comic = await Comic.find(params.id)
    if (!comic) {
      return response.notFound({ message: 'Comic not found' })
    }
    return response.ok({ data: comic })
  }

  // POST /comics
  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'author', 'genre', 'description', 'releaseYear'])
    const comic = await Comic.create(data)
    return response.created({ message: 'Comic created', data: comic })
  }

  // PUT /comics/:id
  async update({ params, request, response }: HttpContext) {
    const comic = await Comic.find(params.id)
    if (!comic) {
      return response.notFound({ message: 'Comic not found' })
    }

    const data = request.only(['title', 'author', 'genre', 'description', 'releaseYear'])
    comic.merge(data)
    await comic.save()

    return response.ok({ message: 'Comic updated', data: comic })
  }

  // DELETE /comics/:id
  async destroy({ params, response }: HttpContext) {
    const comic = await Comic.find(params.id)
    if (!comic) {
      return response.notFound({ message: 'Comic not found' })
    }

    await comic.delete()
    return response.ok({ message: 'Comic deleted' })
  }
}