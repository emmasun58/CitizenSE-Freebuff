/**
 * Serverfunktion för produktion (Cloudflare Pages).
 *
 * Filen ligger i `functions/api/` och blir därför automatiskt till rutten
 * `POST /api/translate` när sajten publiceras på Cloudflare Pages. Den
 * innehåller ingen logik själv – den återanvänder samma funktion som körs
 * lokalt i utvecklingsservern.
 *
 * Ställ in hemligheten `DEEPL_API_KEY` i hostingpanelen. Nyckeln får aldrig
 * läggas i frontend-koden eller checkas in i git.
 */
import { handleTranslateRequest, type TranslateEnv } from '../../server/translate'

interface PagesContext {
  request: Request
  env: TranslateEnv
}

export const onRequest = ({ request, env }: PagesContext): Promise<Response> =>
  handleTranslateRequest(request, env)
