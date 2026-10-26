export const handler = async (event) => {
    // Evidencia: esta petición llegó a nuestra función.
    console.log('EVENT RECIBIDO:', event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Festival Control API online'
        })
    };
};
//# sourceMappingURL=hello.js.map