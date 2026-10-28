import { catalog, json } from './model.js';
export const handler = async (event) => {
    const id = event.pathParameters?.id;
    console.log('GET evento:', id);
    if (!id)
        return json(400, { message: 'Falta id' });
    const found = catalog.find(item => item.id === id);
    return found ? json(200, found) : json(404, { message: 'Evento no encontrado' });
};
//# sourceMappingURL=get.js.map