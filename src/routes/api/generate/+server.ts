/* Imports */
import path from 'path'
import { promises as fs } from 'fs'

/* Api route for generating random code */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET({ request } : { request: Request }) {
    const jsonDirectory: string = path.join(process.cwd(), 'data')
    const fileContents: string = await fs.readFile(jsonDirectory + '/generate.json', 'utf8')
    return new Response(fileContents, { headers: { 'Content-Type': 'application/json' } })
}
