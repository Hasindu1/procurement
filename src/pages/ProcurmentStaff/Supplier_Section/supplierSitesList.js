import React, {useState,useEffect} from 'react'
import firebase from '../../../Firebase'


function useSites(siteName){
   const [sites,setSites] = useState([])


    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('sitesOfSupplier')
            .where('site','==',siteName)
            .onSnapshot((snapshot) => {
                const newSites= snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setSites(newSites)
            })

            return () => unsubscribe()
    },[siteName])

    return sites

}

const SiteList = (props) =>{

    const siteName = props.supplierName;
    const sites = useSites(siteName);

    return (
        <>
        <div> {props.supplierName}</div>
                <ul>
                {sites.map((site) => 

                     <li><h6>Site Name : {site.site}</h6></li>

                            
                       
                )}
                </ul>
                </>
    )
}

export default SiteList