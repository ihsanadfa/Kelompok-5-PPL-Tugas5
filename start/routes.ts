/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ComicsController from '../app/controllers/comics_controller.js'

// UI Route
router.get('/', async ({ view }) => {
  return view.render('comics/index')
})

// API Routes
router.get('/comics', [ComicsController, 'index'])
router.get('/comics/:id', [ComicsController, 'show'])
router.post('/comics', [ComicsController, 'store'])
router.put('/comics/:id', [ComicsController, 'update'])
router.delete('/comics/:id', [ComicsController, 'destroy'])
