import TodosController from "#controllers/todos_controller";
import router from '@adonisjs/core/services/router';

router.on('/').render('pages/home').as('home')

// Todos routes
router.get('/todos', [TodosController, 'index']).as('todos.index')
router.post('/todos/store', [TodosController, 'store']).as('todos.store')
router.get('/todos/:id/done', [TodosController, 'done']).as('todos.done')
