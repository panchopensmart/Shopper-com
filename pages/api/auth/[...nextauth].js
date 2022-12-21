import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Логин", type: "text" },
                password: { label: "Пароль", type: "password" }
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
            }
        })
    ],

}
export default NextAuth(authOptions)