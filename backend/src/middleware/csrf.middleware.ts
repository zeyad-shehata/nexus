import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export function csrfProtection(req: Request, res: Response, next: NextFunction) {
  // Safe methods do not require CSRF validation
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next();
  }

  // Exempt webhooks or specific public paths if needed
  const origin = req.headers.origin || req.headers.referer;
  const customHeader = req.headers['x-requested-with'] || req.headers['authorization'] || req.headers['content-type'];

  // Requests originating from allowed origins or containing custom headers are safe against standard cross-site form posts
  if (!customHeader && !origin) {
    return res.status(403).json({ error: 'CSRF Protection: Missing request origin header.' });
  }

  next();
}
