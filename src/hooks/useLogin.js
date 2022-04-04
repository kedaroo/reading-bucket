import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export const useLogin = () => {
    const [error, setError] = useState(null)

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res.user))
        .catch(err => setError(err.message))
    }

    return { error, login }
}