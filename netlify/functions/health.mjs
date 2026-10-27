// Scheduled every minute: checks the site, API, storage and Telegram bot, and alerts the admin if something breaks.
import { runHealthCheck } from './api.mjs';

export default async () => {
  try { await runHealthCheck(); } catch (e) { console.error('health', e && e.message); }
  return new Response('ok');
};

export const config = { schedule: '* * * * *' };
