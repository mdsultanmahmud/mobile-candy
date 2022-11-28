import { useEffect, useState } from "react"

const useRole = (email) => {
    const [dbUser, setDBUser] = useState('')
    const [rolesLoading, setRolesLoading] = useState(true)
    if (email) {
        useEffect(() => {
            fetch(`http://localhost:5000/users/admin?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setDBUser(data)
                    setRolesLoading(false)
                })

        }, [email])
    }

    return [dbUser, rolesLoading]
}

export default useRole