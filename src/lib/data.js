

export const doctorsData = async () => {
    const res = await fetch(`http://localhost:5000/all-doctors`)
    const data = await res.json()
    // console.log("from doctor da6ta", data);
    return data ;
}

export const doctorsSearch = async (searchTerm) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/search-doctors?search=${searchTerm}`,
    { cache: "no-store" }
  );

 const data = await res.json()
 return data ;

};

export const doctorsDetailsData = async (id) => {
    const res = await fetch(`http://localhost:5000/doctors/${id}`,
        {
            headers:{
                authorization: "loged on"
            }
        }
    )
    const data = await res.json()
    return data ;
}

