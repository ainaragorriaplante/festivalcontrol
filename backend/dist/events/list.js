import { catalog, json } from './model.js';
export const handler = async (event) => {
    console.log('LIST eventos:', event.httpMethod);
    return json(200, catalog);
};
//# sourceMappingURL=list.js.map