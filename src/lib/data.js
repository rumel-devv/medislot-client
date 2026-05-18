

export const doctorsData = async () => {
    const res = await fetch(`http://localhost:5000/doctors`)
    const data = await res.json()
    return data ;
}

export const doctorsDetailsData = async (id) => {
    const res = await fetch(`http://localhost:5000/doctors/${id}`)
    const data = await res.json()
    return data ;
}

