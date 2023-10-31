import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices]=useState([])

    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className=" mt-4">
            <div className=" text-center space-y-3">
                <h3 className=" text-2xl font-bold text-orange-600">Services</h3>
                <h2 className="text-4xl  font-bold">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;