import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Simple health/check GET endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Hello from the API check',
        timestamp: new Date().toISOString(),
    });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

export default app;