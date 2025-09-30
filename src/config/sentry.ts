import 'dotenv/config';
import Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN ?? '',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  debug: true,
});
