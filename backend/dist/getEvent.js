export const handler = async (event) => {
    const id = event.pathParameters?.id;
    console.log('GET evento:', id);
    if (!id)
        return { statusCode: 400, body: JSON.stringify({ message: 'Falta id' }) };
    return {
        statusCode: 200,
        body: JSON.stringify({ id, artist: 'Neon Waves', space: 'Main Stage', time: '22:30', status: 'CONFIRMED' })
    };
};
//# sourceMappingURL=getEvent.js.map