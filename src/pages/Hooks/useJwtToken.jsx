const useJwtToken = email => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data =>{
        if(data.accessToken){
            localStorage.setItem('AccessToken', data.accessToken)
        }
    })
}

export default useJwtToken