import { createContext, useState, useEffect, useContext } from "react"
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, orderBy, query, collectionGroup } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [cities, setCities] = useState([])
    const { user } = useContext(AuthContext)

    const db = getFirestore()

    useEffect(() => {
        const getCities = async() => {
            if (!user.id) {
                return
            }
            const collectionRef = collection(db, "users", user.id, "cities")
            const collectionSnap = await getDocs(collectionRef)
            // const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            // const collectionSnap = await getDocs(q)

            let citiesArr = []

            collectionSnap.forEach((docSnap) => {
                citiesArr.push({
                    ...docSnap.data(),
                    id: docSnap.id
                })
            })

            console.log(citiesArr)

            setCities(citiesArr)
        }
        getCities()
    }, [user.loggedIn])

    const getSingleCity = async (id) => {
        const collectionRef = collection(db, "cities")
        const collectionSnap = await getDocs(collectionRef)
 
        let citiesArr = []

        let resultDoc = {}

        collectionSnap.forEach((docSnap) => {
            if (docSnap.id === id) {
                resultDoc = {
                    id: id,
                    ...docSnap.data()
                }
            }
        })

        return resultDoc

    }

    const addCity = async(name) => {
        if (!user.loggedIn) {
            throw new Error("You can't add a City if you're not logged in.")
        }

        const newCity = {
            name: name
        }

        const docRef = await addDoc(collection(db, "users", user.id, "cities"), newCity)

        newCity.id = docRef.id

        setCities([newCity, ...cities])

        console.log(docRef)
        console.log("New city added", docRef.id)
    }

    const values = {
        cities,
        getSingleCity,
        addCity
    }

    return (
        <DataContext.Provider value={values}>
            { props.children }
        </DataContext.Provider>
    )
}