import Todo from "#models/todo";
import { createTodoValidator } from "#validators/todo";
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
    async index(ctx: HttpContext) {
        const todos = await Todo.all();

        return ctx.view.render('pages/todos/index.edge', {
            todos: todos,
            entrypoint: 'resources/js/pages/todos/index.js',
        });
    }

    async store(ctx: HttpContext) {
        const data = {
            task: ctx.request.input('task')
        };

        const todo = await createTodoValidator.validate(data);

        if (todo) {
            await Todo.create(todo);
        }

        return ctx.response.redirect().back();
    }

    async done(ctx: HttpContext) {
        const id = ctx.params.id;
        const todo = await Todo.find(id);

        if (todo) {
            todo.done = !todo.done;
            await todo.save();
        }

        return ctx.response.redirect().back();
    }
}
