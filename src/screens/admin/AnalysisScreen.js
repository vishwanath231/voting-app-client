import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import axios from 'axios';
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { getVoteLocation, getVoteLocationGender } from '../../redux/actions/adminActions';
import { connect } from 'react-redux';


const AnalysisScreen = ({ voteDistrict, getVoteLocation, getVoteLocationGender, voteDistrictGender  }) => {

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
   

    const [userVoteLocation, setUserVoteLocation] = useState([]);

    const [districtLocation, setDistrictLocation] = useState({
        location: ''
    });

    const [show, setShow] = useState(false);



    // VOTE ANALYSIS
    useEffect(() => {
        axios.get(`https://voting-app-server.onrender.com/api/analysis/voteCount`)
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
     
        axios.get(`https://voting-app-server.onrender.com/api/analysis/handGender`)
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
     
        axios.get(`https://voting-app-server.onrender.com/api/analysis/leafGender`)
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
     
        axios.get(`https://voting-app-server.onrender.com/api/analysis/userGender`)
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
     
        axios.get(`https://voting-app-server.onrender.com/api/analysis/userLocation`)
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
     
        axios.get(`https://voting-app-server.onrender.com/api/analysis/voteGender`)
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
     
        axios.get(`https://voting-app-server.onrender.com/api/analysis/voteLocation`)
        .then((res) => {
            setUserVoteLocation(Object.keys(res.data))
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

    
    const {loading:districtLoading, vote, error} = voteDistrict;
    
    useEffect(() => {
      
        if (vote?.hand || vote?.leaf) {
            setShow(true)
        }

        if (error) {
            setShow(false)
        }

    }, [vote, error])
    

    const handleChange = (e) => {
        const { name, value } = e.target;

        setDistrictLocation({
            [name]: value
        })
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        getVoteLocation(districtLocation)
        getVoteLocationGender(districtLocation)
    }
  
  
    const{ loading:userVoteLoading, userVote, error:userVoteError } = voteDistrictGender;

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

                    {error && <Message error msg={error} />}

                    <form onSubmit={handleSubmit} className='my-10'>
                        <label htmlFor="location" className="block mb-2 text-md font-medium uppercase text-black ">Location Analysis</label>
                        <div className='flex flex-col md:flex-row'>
                            <select id="district" onChange={handleChange} name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-60 w-full p-2.5">
                                <option value=''>Choose a district</option>
                                {
                                    userVoteLocation.map((val, index) => (
                                        <option value={val} key={index}>{val}</option>
                                    ))
                                }
                            </select>
                            <button type='submit' className='bg-black px-4 rounded text-md text-white md:ml-5 md:mt-0 mt-4 md:py-0 py-2 '>search</button>
                        </div>
                    </form>

                    {
                        show ? (
                            <>
                                {
                                    districtLoading ? <Loader /> : (
                                        <div className='mt-10  mb-16'>
                                            <h2 className='mt-2 mb-4 uppercase text-[#34508D] font-bold text-lg'>{districtLocation.location}</h2>
                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                                                <div className='lg:w-96 w-full flex justify-between  shadow-xl rounded p-4 bg-white'>
                                                    <div className='w-60'>
                                                        <div className='mb-3 text-[#ca6702] font-medium text-3xl'>Hand</div>
                                                        <div className='font-medium text-2xl'>+{vote?.hand ? vote?.hand : '0'}</div>
                                                    </div>

                                                    <div className='border-r-2 '></div>
                            
                                                    <div className='flex justify-evenly items-center w-full '>
                                                        <div className='p-1 rounded text-center'>
                                                            <div className='font-medium text-lg'>Male</div>
                                                            { userVoteLoading ? <Loader /> : <div className='font-medium text-2xl'>+ {userVote?.hand ? userVote?.hand.male ? userVote?.hand.male : '0' : '0' }</div>}
                                                        </div>

                                                        <div className='p-1 rounded text-center'>
                                                            <div className='font-medium text-lg'>Female</div>
                                                            { userVoteLoading ? <Loader /> : <div className='font-medium text-2xl'>+ {userVote?.hand ? userVote?.hand.female ? userVote?.hand.female : '0'  : '0' }</div> }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='lg:w-96 w-full flex justify-between shadow-xl rounded p-4 bg-white'>
                                                    <div className='w-60'>
                                                        <div className='mb-3 text-[#bc4749] font-medium text-3xl'>Leaf</div>
                                                        <div className='font-medium text-2xl'>+{vote?.leaf ? vote?.leaf : '0'}</div>
                                                    </div>

                                                    <div className='border-r-2 '></div>
                            
                                                    <div className='flex justify-evenly items-center w-full '>
                                                        <div className='p-1 rounded text-center'>
                                                            <div className='font-medium text-lg'>Male</div>
                                                            { userVoteLoading ? <Loader /> : <div className='font-medium text-2xl'>+ {userVote?.leaf ? userVote?.leaf.male ? userVote?.leaf.male : '0' : '0' }</div> }
                                                        </div>

                                                        <div className='p-1 rounded text-center'>
                                                            <div className='font-medium text-lg'>Female</div>
                                                            { userVoteLoading ? <Loader /> : <div className='font-medium text-2xl'>+ {userVote?.leaf ? userVote?.leaf.female ? userVote?.leaf.female : '0' : '0' }</div> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        ) : null
                    }


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


const mapStateToProps = (state) =>({
    voteDistrict: state.voteDistrict,
    voteDistrictGender: state.voteDistrictGender
})

export default connect( mapStateToProps, { getVoteLocation, getVoteLocationGender })(AnalysisScreen);
