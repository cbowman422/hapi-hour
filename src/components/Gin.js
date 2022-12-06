import React from 'react'

const Gin = () => {
  const [gin , setGin] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
        fetch(url)// url string
        .then((response) => response.json())//wait for json response
        .then((json) => {// then take json and exec
          setSearch(json)
        })
        .catch(console.error) // Catch and log any errors to the console
      }, []);
  return (
    <div>Gin</div>
  )
}

export default Gin