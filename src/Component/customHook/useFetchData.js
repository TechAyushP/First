import { useEffect, useState } from "react";
const useFetchData = (url) => {
    let [data, setdata] = useState(null)
    useEffect(() => {
        fetch(url).then((response) => {
            response.json().then((data) => {
                setdata(data)
            })

        })

    }, [url])
    return data

}
export default useFetchData;