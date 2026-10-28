export const catalog = [
    { id: 'EVT-101', artist: 'Neon Waves', space: 'Main Stage', time: '22:30', status: 'CONFIRMED' },
    { id: 'EVT-102', artist: 'Midnight Session', space: 'Club Stage', time: '23:45', status: 'CONFIRMED' }
];
export const json = (statusCode, value) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(value)
});
export function readBody(text) {
    try {
        const value = JSON.parse(text ?? 'null');
        return typeof value === 'object' && value !== null && !Array.isArray(value)
            ? value : null;
    }
    catch {
        return null;
    }
}
export function isEventInput(value) {
    return value !== null &&
        typeof value.artist === 'string' && value.artist.trim().length > 0 &&
        typeof value.space === 'string' && value.space.trim().length > 0 &&
        typeof value.time === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(value.time) &&
        (value.status === 'CONFIRMED' || value.status === 'CANCELLED');
}
//# sourceMappingURL=model.js.map