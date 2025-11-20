// server.ts
import app from './app';

/**
 * Server bootstrap
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
