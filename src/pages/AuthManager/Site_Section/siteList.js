import React, {useState,useEffect} from 'react'
import firebase from '../../../Firebase'
import AuthManagerNavBar from '../../../components/main/Navigation_Bar/authManagerNavBar'

function useSites(){
    const [sites,setSites] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('sites')
            .onSnapshot((snapshot) => {
                const newSites= snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setSites(newSites)
            })

            return () => unsubscribe()
    },[])

    return sites
}


const SiteList = () =>{


    const sites = useSites();

    return (
        <>
       <AuthManagerNavBar/>

      
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Site List </h2>
                
                {sites.map((site) => 
                   
               
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Site ID : {site.id}</h6></li>
                             <li><h6>Site NAme      : {site.name}</h6></li>
                        </ul>
                            
                        </li>
                    
                )}
            </ul>
       </>
    )
}

export default SiteList