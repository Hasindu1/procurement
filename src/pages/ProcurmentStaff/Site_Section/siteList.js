import React, {useState,useEffect} from 'react'
import NavBar from '../../../components/main/Navigation_Bar/navbar'
import { Link } from 'react-router-dom';
import {getSites} from '../../../Services/siteServices'

function useSites(){
    const [sites,setSites] = useState([])

    useEffect(() => {
        const unsubscribe = getSites()
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
        <NavBar/>

        <div style={{float:'right'}}>
        <Link to={"/newSite"}><button className="btn btn-primary" > + new Site</button> </Link>
          </div>
        <ul className="list-group my-5">
                <h2 className="text-capitalize text-center">Site List </h2>
                
                {sites.map((site) => 
                   
                   <Link to={"/modifySite"+site.id}>
                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <ul>
                             <li> <h6>Site ID : {site.id}</h6></li>
                             <li><h6>Site NAme      : {site.name}</h6></li>
                        </ul>
                            
                        </li>
                    </Link>
                )}
            </ul>
       </>
    )
}

export default SiteList