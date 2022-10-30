import {useState} from 'react'


function Furniture() {
    const [furnitureList, setFurnitureList] = useState()
    const getFurniture = () => {
        fetch(`https://mongo-api-nj.web.app/furniture`)
            .then(response => response.json())
            .then(setFurnitureList)
            .catch(console.error)
    }
    return (
        <>
            <button onClick={() => getFurniture()}>Get Furniture
            </button>
            <div className="button-list">
                {furnitureList &&
                    furnitureList.map((item) => {
                        return(
                            <>
                         <p key={item.type}>{item.type}</p>
                         <p key={item.price}>{item.price}</p>
                         <p key={item.model}>{item.model}</p>
                            </>
                        )
                    }
                    )}
            </div>
        </>
    )
}


export default Furniture