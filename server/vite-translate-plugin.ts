/**
 * Vite-plugin som kör serverfunktionen även lokalt.
 *
 * I produktion hanteras `/api/translate` av en riktig serverfunktion (till
 * exempel functions/api/translate.ts på Cloudflare Pages). Under utveckling
 * finns ingen sådan – därför monterar det här plugin:t samma funktion som
 * middleware i Vite:s utvecklings- och förhandsvisningsserver.
 *
 * Nyckeln läses från process.env när servern startas och skickas aldrig till
 * webbläsaren.
 */
import type { Connect, Plugin } from 'vite'
import { handleTranslateRequest, type TranslateEnv } from './translate'

/** Måste matcha standardadressen i src/translation/client.ts. */
export const TRANSLATE_PATH = '/api/translate'

async function readRequestBody(req: Connect.IncomingMessage): Promise<Uint8Array> {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(chunk as Buffer)
  }
  return Buffer.concat(chunks)
}

function createMiddleware(env: TranslateEnv): Connect.NextHandleFunction {
  return async (req, res, next) => {
    try {
      const headers = new Headers()
      const contentType = req.headers['content-type']
      if (typeof contentType === 'string') headers.set('content-type', contentType)

      const hasBody = req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH'
      const url = `http://${req.headers.host ?? 'localhost'}${TRANSLATE_PATH}`
      const request = new Request(url, {
        method: req.method,
        headers,
        ...(hasBody ? { body: await readRequestBody(req) } : {}),
      })

      const response = await handleTranslateRequest(request, env)
      res.statusCode = response.status
      response.headers.forEach((value, key) => {
        res.setHeader(key, value)
      })
      res.end(await response.text())
    } catch (error) {
      next(error as Error)
    }
  }
}

function readEnv(): TranslateEnv {
  return {
    DEEPL_API_KEY: process.env.DEEPL_API_KEY,
    DEEPL_API_URL: process.env.DEEPL_API_URL,
  }
}

export function translationProxyPlugin(env: TranslateEnv = readEnv()): Plugin {
  return {
    name: 'citizense-translation-proxy',
    configureServer(server) {
      server.middlewares.use(TRANSLATE_PATH, createMiddleware(env))
    },
    configurePreviewServer(server) {
      server.middlewares.use(TRANSLATE_PATH, createMiddleware(env))
    },
  }
}
