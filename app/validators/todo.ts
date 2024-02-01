import vine from '@vinejs/vine'

export const createTodoValidator = vine.compile(
    vine.object({
        task: vine.string().trim().minLength(3).maxLength(255),
    })
)
