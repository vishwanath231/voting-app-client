import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import axios from 'axios';
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from '../../components/Loader';



const AnalysisScreen = () => {

    const [handGender, setHandGender] = useState({datasets: [{}]});
    const [handGenderLoader, setHandGenderLoader] = useState(false);

    const [leafGender, setLeafGender] = useState({datasets: [{}]});
    const [leafGenderLoader, setLeafGenderLoader] = useState(false);
    
    const [userGender, setUserGender] = useState({datasets: [{}]});
    const [userGenderLoader, setUserGenderLoader] = useState(false);

    const [userLoation, setUserLocation] = useState({datasets: [{}]});
    const [userLoationLoader, setUserLocationLoader] = useState(false);
    
    const [voteGender, setVoteGender] = useState({datasets: [{}]});
    const [voteGenderLoader, setVoteGenderLoader] = useState(false);

    const [voteLoation, setVoteLocation] = useState({datasets: [{}]});
    const [voteLoationLoader, setVoteLocationLoader] = useState(false);
    
    const [voteCount, setVoteCount] = useState({});
    const [voteCountLoader, setVoteCountLoader] = useState(false);
   

    // VOTE ANALYSIS
    useEffect(() => {
        axios.get(`/api/analysis/voteCount`)
        .then((res) => {
            setVoteCountLoader(true)
            setVoteCount(res.data.vote)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
    

   // HAND GENDER ANALYSIS
    useEffect(() => {
     
        axios.get(`/api/analysis/handGender`)
        .then((res) => {
            setHandGenderLoader(true)
            setHandGender({
                labels: ['MALE', 'FEMALE'],
                datasets:[{
                    label: "HAND USER GENDER",
                    data: [res.data.user.male, res.data.user.female],
                    backgroundColor: [
                        "#2a9d8f",
                        "#e9c46a",
                    ],
                    borderColor: "#f4f4f4",
                    borderWidth: 2,
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])


    // LEAF GENDER ANALYSIS
    useEffect(() => {
     
        axios.get(`/api/analysis/leafGender`)
        .then((res) => {
            setLeafGenderLoader(true)
            setLeafGender({
                labels: ['MALE', 'FEMALE'],
                datasets:[{
                    label: "LEAF USER GENDER",
                    data: [res.data.user.male, res.data.user.female],
                    backgroundColor: [
                        "#98c1d9",
                        "#ee6c4d",
                    ],
                    borderColor: "#f4f4f4",
                    borderWidth: 2,
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])


    // USER GENDER ANALYSIS
    useEffect(() => {
     
        axios.get(`/api/analysis/userGender`)
        .then((res) => {
            setUserGenderLoader(true)
            setUserGender({
                labels: ['MALE', 'FEMALE'],
                datasets:[{
                    label: "USER GENDER",
                    data: [res.data.user.male, res.data.user.female],
                    backgroundColor: [
                        "#d62828",
                        "#003049",
                    ],
                    borderColor: "#f4f4f4",
                    borderWidth: 2,
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
  

    
   // USER LOCATION ANALYSIS
    useEffect(() => {
     
        axios.get(`/api/analysis/userLocation`)
        .then((res) => {
            setUserLocationLoader(true)
            setUserLocation({
                labels: Object.keys(res.data),
                datasets:[{
                    label: "USER LOCATION",
                     data: Object.values(res.data),
                     fill: false,
                     backgroundColor: [
                        "#f7f7f7",
                        "#264653",
                        "#2a9d8f",
                        "#e9c46a",
                        "#f4a261",
                        "#e76f51",
                        "#22223b",
                        "#4a4e69",
                        "#bc6c25",
                        "#dda15e",
                        "#606c38",
                        "#283618",
                        "#003049",
                        "#d62828",
                        "#f77f00",
                        "#2f3e46",
                        "#354f52",
                        "#52796f",
                        "#219ebc",
                        "#344e41",
                        "#3a5a40",
                        "#457b9d",
                        "#000000",
                        "#14213d",
                        "#006d77",
                        "#83c5be",
                        "#ee6c4d",
                        "#293241",
                        "#5e548e",
                        "#2b2d42",
                        "#9d0208",
                        "#0a9396",
                        "#005f73",
                        "#ca6702",
                        "#bc4749",
                        "#f7b538",
                        "#db7c26",
                        "#d8572a",
                        "#c32f27",
                     ],
                     
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
    
    
    
    // VOTE GENDER ANALYSIS
    useEffect(() => {
     
        axios.get(`/api/analysis/voteGender`)
        .then((res) => {
            setVoteGenderLoader(true)
            setVoteGender({
                labels: ['MALE', 'FEMALE'],
                datasets:[{
                    label: "VOTE GENDER",
                    data: [res.data.user.male, res.data.user.female],
                   
                    backgroundColor: [
                        "#d5c7bc",
                        "#785964",
                    ],
                    borderColor: "#f4f4f4",
                    borderWidth: 2,
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
  


    // VOTE LOCATION ANALYSIS
    useEffect(() => {
     
        axios.get(`/api/analysis/voteLocation`)
        .then((res) => {
            setVoteLocationLoader(true)
            setVoteLocation({
                labels: Object.keys(res.data),
                datasets:[{
                    label: "VOTE LOCATION",
                     data: Object.values(res.data),
                     backgroundColor: [
                        "#264653",
                        "#2a9d8f",
                        "#e9c46a",
                        "#f4a261",
                        "#e76f51",
                        "#22223b",
                        "#4a4e69",
                        "#bc6c25",
                        "#dda15e",
                        "#606c38",
                        "#283618",
                        "#003049",
                        "#d62828",
                        "#f77f00",
                        "#2f3e46",
                        "#354f52",
                        "#52796f",
                        "#219ebc",
                        "#344e41",
                        "#3a5a40",
                        "#457b9d",
                        "#000000",
                        "#14213d",
                        "#006d77",
                        "#83c5be",
                        "#ee6c4d",
                        "#293241",
                        "#5e548e",
                        "#2b2d42",
                        "#9d0208",
                        "#0a9396",
                        "#005f73",
                        "#ca6702",
                        "#bc4749",
                        "#f7b538",
                        "#db7c26",
                        "#d8572a",
                        "#c32f27",
                     ],
                     borderColor: "#f4f4f4",
                     borderWidth: 2,
                 }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
  
  

    return (
        <div className='bg-gray-100 min-h-screen'>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                <div className='my-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3 text-[#ca6702] font-medium text-3xl'>Hand</div>
                            { voteCountLoader ? <div className='font-medium text-2xl'>+{voteCount.hand}</div> : <Loader /> }
                        </div>
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3 text-[#bc4749] font-medium text-3xl'>Leaf</div>
                            { voteCountLoader ? <div className='font-medium text-2xl'>+{voteCount.leaf}</div> : <Loader /> }
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'><span className='text-[#ca6702]'>HAND</span> GENDER ANALYSIS</div>
                            { handGenderLoader ? <Doughnut data={handGender} /> : <Loader /> } 
                        </div>
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'><span className='text-[#bc4749]'>LEAF</span> GENDER ANALYSIS</div>
                            { leafGenderLoader ? <Pie data={leafGender} /> : <Loader /> } 
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'>USER GENDER ANALYSIS</div>
                            { userGenderLoader ? <Pie data={userGender} />  : <Loader />  }
                        </div>
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'>VOTE GENDER ANALYSIS</div>
                            { voteGenderLoader ? <Doughnut data={voteGender} /> : <Loader /> } 
                        </div>
                    </div>
                    <div className='w-full shadow rounded p-4 bg-white mb-10 '>
                        <div className='mb-3 '>USER LOCATION ANALYSIS</div>
                        { userLoationLoader ? <Line data={userLoation} /> : <Loader /> } 
                    </div>
                    <div className='w-full shadow rounded p-4 bg-white'>
                        <div className='mb-3'>VOTE LOCATION ANALYSIS</div>
                        { voteLoationLoader ? <Bar data={voteLoation} /> : <Loader /> } 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AnalysisScreen;
