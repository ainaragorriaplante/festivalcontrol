import { catalog, readBody, json } from './model.js';
export const handler = async (event) => {
    const id = event.pathParameters?.id;
    if (!id)
        return json(400, { message: 'Falta id' });
    if (!catalog.some(item => item.id === id))
        return json(404, { message: 'Evento no encontrado' });
    const input = readBody(event.body);
    if (!input || Object.keys(input).length !== 1 || (input.status !== 'CONFIRMED' && input.status !== 'CANCELLED')) {
        return json(400, { message: 'PATCH admite únicamente status CONFIRMED o CANCELLED' });
    }
    console.log('PATCH evento:', id);
    return json(200, { id, changes: { status: input.status }, operation: 'UPDATED' });
};
//# sourceMappingURL=update.js.map