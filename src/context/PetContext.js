// import React, { useState, useEffect } from 'react';
// import data from '../data/pets.json'



// export const PetContext = React.createContext()

// // Filter based on location, animal, and breed


// const PetContextProvider = (props) => {
//     const [pets, setPets] = useState([])

//     const fetchData = async() =>{
//         const response = await fetch('https://pets-v2.dev-apis.com/pets?animal=cat')
//         const data = await response.json()
//         setPets(data.pets)
//     }
//     useEffect(() => {
//         fetchData()
//     }, [])

//     console.log(pets)

//     const FilterPet = (location, animal) => {
//         const filteredPet = pets.filter(pet => `${pet.city}, ${pet.state}` === location && pet.animal === animal)
//         if (!filteredPet) {
//          setPets(pets)
//         } else {
//             setPets(filteredPet)
//         }
//     }
//     const location = pets.map((loc) => `${loc.city}, ${loc.state}`)
//     const uniqueLocation = [...new Set(location)]
//     const animalName = pets.map((animal) => animal.animal)
//     const uniqueAnimalName = [...new Set(animalName)]



//     return (
//         <PetContext.Provider value={{
//          pets,
//          uniqueLocation,
//          uniqueAnimalName, 
//          FilterPet
//          }} >
//             {props.children}
//         </PetContext.Provider>
//     )
// }


// export default PetContextProvider