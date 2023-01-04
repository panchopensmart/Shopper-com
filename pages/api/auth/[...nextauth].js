import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Jeanne",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Login", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials,) {
                const res = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({

                        username: credentials.username,
                        password: credentials.password,

                    })
                })
                const data = await res.json()
                if (!data.message) {
                    return data
                }
                console.log('ошибка - ', data.message)
            },
            jwt: {
                signingKey: {"kty":"oct","kid":"--","alg":"HS256","k":"--"},
                verificationOptions: {
                    algorithms: ["HS256"]
                }
            }
        })
    ],

}
export default NextAuth(authOptions)