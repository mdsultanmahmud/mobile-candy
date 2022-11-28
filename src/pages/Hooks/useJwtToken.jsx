import { useEffect, useState } from "react"

const useJwtToken = email => {
    fetch(`https://mobile-candy-server.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('AccessToken', data.accessToken)
            }
        })
}

export default useJwtToken