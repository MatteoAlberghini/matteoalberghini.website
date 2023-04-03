/* Imports */
import { client } from "../../../database/client"

/* Body for request */
type Body = {
    success: boolean,
    error?: string,
    message?: string,
}
/* Support function to generate unique OTP */
function generateOTP(): string {
    const digits: string = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let otp: string = ''
    for (let i: number = 0; i < 8; i++) {
        otp += digits[Math.floor(Math.random() * 36)]
    }
    return otp
}
/* Api route for generating random code */
export async function GET({ request } : { request: Request }) {
    /* generate otp & insert in db */
    console.log(request)
    const ip: string | null = request.headers.get('x-forwarded-for')
    const otp: string = generateOTP()
    /*
    const { error }: { data: unknown, error: unknown } = await client.from('Codes').insert([{ code: otp }])
    const body: Body = { success: false }
    /* check for errors */
    /*    
    if (error && typeof error === 'object' && 'code' in error && error.code !== '') {
        body.error = 'DB-001'
        body.message = 'Error in database query'
    } else {
        body.message = otp
        body.success = true
    }
    */
    
    /* return correct body or error body */
    const body: Body = { success: true, message: ip || 'NULL' }
    return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })
}
