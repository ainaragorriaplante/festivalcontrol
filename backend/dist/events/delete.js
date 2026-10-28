import { catalog, json } from './model.js';
export const handler = async (event) => {
    const id = event.pathParameters?.id;
    if (!id)
        return json(400, { message: 'Falta id' });
    if (!catalog.some(item => item.id === id))
        return json(404, { message: 'Evento no encontrado' });
    console.log('DELETE evento:', id);
    return json(200, { id, operation: 'DELETED' });
};
//# sourceMappingURL=delete.js.map