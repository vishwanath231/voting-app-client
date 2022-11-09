import React,{ useEffect } from 'react';
import SideBar from './components/SideBar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';
import Placeholder from '../../assets/img/Placeholder.png';
import useNominationForm from '../../hooks/useNominationForm';
import { connect }  from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const NominationFormScreen = ({ newNomination }) => {

    const navigate = useNavigate();

    const { 
        step, 
        stepOneCheck, 
        stepTwoCheck,
        stepThreeCheck,
        stepFourCheck,
        prevStep,
        progress,
        handleProfileClick,
        handleProfile,
        handlePartyLogoClick,
        handlePartyLogo,
        handleSubmit,
        handleChange,
        values,
        errors
    } = useNominationForm()
    
    
    const { loading, success, error } = newNomination; 
    
    
    useEffect(() => {
    
        if(success){
            navigate('/admin/nominationList')
        }
    
    },[success, navigate])
    


    return (
        <div className='bg-gray-100 min-h-screen'>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                <div className='my-6 text-3xl font-bold tracking-wide uppercase md:text-center'>
                    nomination form
                </div>
                { loading && <Loader /> }
                { error && <Message error msg={error} /> }
                <div className='flex justify-center items-center max-w-lg mx-auto my-10'>
                    <div className='w-full p-4 shadow-md rounded bg-white'>
                        { progress > 0 && <div className='text-md font-medium text-right mb-3 text-red-500'>{progress}%</div> }
                        <form onSubmit={handleSubmit} encType='multipart/formdata' >
                            {
                                step === 1 && 
                                <StepOne 
                                    stepOneCheck={stepOneCheck} 
                                    handleProfile={handleProfile}
                                    handleProfileClick={handleProfileClick}
                                    handleChange={handleChange}
                                    values={values}
                                    errors={errors}
                                />
                            }
                            {
                                step === 2 && 
                                <StepTwo 
                                    stepTwoCheck={stepTwoCheck} 
                                    prevStep={prevStep}
                                    handleChange={handleChange}
                                    values={values}
                                    errors={errors}
                                />
                            }
                            {
                                step === 3 && 
                                <StepThree
                                    stepThreeCheck={stepThreeCheck} 
                                    prevStep={prevStep}
                                    handleChange={handleChange}
                                    values={values}
                                    errors={errors}
                                />
                            }
                            {
                                step === 4 && 
                                <StepFour
                                    stepFourCheck={stepFourCheck} 
                                    prevStep={prevStep}
                                    handleChange={handleChange}
                                    values={values}
                                    errors={errors}
                                />
                            }
                            {
                                step === 5 && 
                                <StepFive
                                    handlePartyLogoClick={handlePartyLogoClick}
                                    handlePartyLogo={handlePartyLogo}
                                    handleSubmit={handleSubmit} 
                                    prevStep={prevStep}
                                    handleChange={handleChange}
                                    values={values}
                                    errors={errors}
                                />
                            }
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
  newNomination: state.newNomination

})


export default connect(mapStateToProps, null)(NominationFormScreen);



const StepOne = ({ stepOneCheck, handleProfile, handleProfileClick, handleChange, values, errors }) => {
    return (
        <React.Fragment>
            <div className='w-full'>
                <div className='flex justify-center mb-4'>
                    <img src={Placeholder} className='w-40 h-40 object-cover rounded-full' id='placeholder' alt='placeholder' onClick={handleProfileClick} />
                </div>
                
                <label htmlFor="profile" className="flex justify-center mb-2 text-sm font-medium text-gray-900">Profile <span className='text-red-500 text-base'>*</span></label>
                <input 
                    type='file'
                    name='profile'
                    id='profile'
                    accept=".png, .jpg, .jpeg"
                    className='w-40 rounded-full'
                    style={{display: "none"}} 
                    onChange={handleProfile}
                />
            </div>
            {errors.profile && <div className="text-red-500 my-1">{errors.profile}</div>}
            <div className='w-full'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    onChange={handleChange}
                    value={values.name}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            {errors.name && <div className="text-red-500 my-1">{errors.name}</div>}
            <button type='button' className='uppercase w-full bg-[#34508D] hover:bg-black text-white text-sm text-center p-2.5 rounded shadow mt-8' onClick={stepOneCheck} >next</button>
        </React.Fragment>
    )
}



const StepTwo = ({ stepTwoCheck, prevStep, handleChange, values, errors  }) => {
    return (
        <React.Fragment>
            <div className='w-full mb-4'>
                <label htmlFor="reg_no" className="block mb-2 text-sm font-medium text-gray-900">Reg No <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='reg_no'
                    id='reg_no'
                    onChange={handleChange}
                    value={values.reg_no}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.reg_no && <div className="text-red-500 my-1">{errors.reg_no}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    value={values.email}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.email && <div className="text-red-500 my-1">{errors.email}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="phone_no" className="block mb-2 text-sm font-medium text-gray-900">Phone No <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='number'
                    name='phone_no'
                    id='phone_no'
                    onChange={handleChange}
                    value={values.phone_no}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.phone_no && <div className="text-red-500 my-1">{errors.phone_no}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender <span className='text-red-500 text-base'>*</span></label>
                <select 
                	id="gender" 
                	name='gender' 
                	onChange={handleChange} 
                	className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                    <option value="">Gender</option>	
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender && <div className="text-red-500 my-1">{errors.gender}</div>}
            </div>
            <button type='button' className='uppercase w-full bg-[#34508D] hover:bg-black text-white text-sm text-center p-2.5 rounded shadow' onClick={stepTwoCheck} >next</button>
            <button type='button' className='uppercase w-full border border-black text-black text-sm text-center p-2.5 rounded shadow mt-4' onClick={prevStep} >back</button>
        </React.Fragment>
    )
}




const StepThree = ({ stepThreeCheck, prevStep,  handleChange, values, errors  }) => {
    return (
        <React.Fragment>
            <div className='w-full mb-4'>
                <label htmlFor="birth_date" className="block mb-2 text-sm font-medium text-gray-900">Birth Date <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='date'
                    name='birth_date'
                    id='birth_date'
                    onChange={handleChange}
                    value={values.birth_date}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.birth_date && <div className="text-red-500 my-1">{errors.birth_date}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="community" className="block mb-2 text-sm font-medium text-gray-900">Community <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='community'
                    id='community'
                    onChange={handleChange}
                    value={values.community}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.community && <div className="text-red-500 my-1">{errors.community}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="parent_name" className="block mb-2 text-sm font-medium text-gray-900">Parent Name <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='parent_name'
                    id='parent_name'
                    onChange={handleChange}
                    value={values.parent_name}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.parent_name && <div className="text-red-500 my-1">{errors.parent_name}</div>}
            </div>
            <button type='button' className='uppercase w-full bg-[#34508D] hover:bg-black text-white text-sm text-center p-2.5 rounded shadow' onClick={stepThreeCheck} >next</button>
            <button type='button' className='uppercase w-full border border-black text-black text-sm text-center p-2.5 rounded shadow mt-4' onClick={prevStep} >back</button>
        </React.Fragment>
    )
}


const StepFour = ({ stepFourCheck, prevStep, handleChange, values, errors  }) => {
    return (
        <React.Fragment>
            <div className='w-full mb-4'>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='city'
                    id='city'
                    onChange={handleChange}
                    value={values.city}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.city && <div className="text-red-500 my-1">{errors.city}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="taluk" className="block mb-2 text-sm font-medium text-gray-900">Taluk <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='taluk'
                    id='taluk'
                    onChange={handleChange}
                    value={values.taluk}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.taluk && <div className="text-red-500 my-1">{errors.taluk}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="post" className="block mb-2 text-sm font-medium text-gray-900">Post <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='post'
                    id='post'
                    onChange={handleChange}
                    value={values.post}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.post && <div className="text-red-500 my-1">{errors.post}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900">District <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='district'
                    id='district'
                    onChange={handleChange}
                    value={values.district}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.district && <div className="text-red-500 my-1">{errors.district}</div>}
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Pincode <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='number'
                    name='pincode'
                    id='pincode'
                    onChange={handleChange}
                    value={values.pincode}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.pincode && <div className="text-red-500 my-1">{errors.pincode}</div>}
            </div>
            <button type='button' className='uppercase w-full bg-[#34508D] hover:bg-black text-white text-sm text-center p-2.5 rounded shadow' onClick={stepFourCheck} >next</button>
            <button type='button' className='uppercase w-full border border-black text-black text-sm text-center p-2.5 rounded shadow mt-4' onClick={prevStep} >back</button>
        </React.Fragment>
    )
}



const StepFive = ({handlePartyLogo, handlePartyLogoClick, prevStep, handleChange, values, errors  }) => {
    return (
        <React.Fragment>
            <div className='w-full'>
                <div className='flex justify-center mb-4'>
                    <img src={Placeholder} className='w-40 h-40 object-cover rounded-full' id='logo'  alt='placeholder' onClick={handlePartyLogoClick}/>
                </div>
                
                <label htmlFor="party_logo" className="flex justify-center mb-2 text-sm font-medium text-gray-900">Party Logo <span className='text-red-500 text-base'>*</span></label>
                <input 
                    type='file'
                    name='party_logo'
                    id='party_logo'
                    accept=".png, .jpg, .jpeg"
                    style={{display: "none"}} 
                    onChange={handlePartyLogo}
                />
                {errors.party_logo && <div className="text-red-500 my-1">{errors.party_logo}</div>}
            </div>
            <div className='w-full'>
                <label htmlFor="party_name" className="block mb-2 text-sm font-medium text-gray-900">Party Name <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='party_name'
                    id='party_name'
                    onChange={handleChange}
                    value={values.party_name}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.party_name && <div className="text-red-500 my-1">{errors.party_name}</div>}
            </div>
            <button type='submit' className='uppercase w-full bg-[#34508D] hover:bg-black text-white text-sm text-center p-2.5 rounded shadow mt-8'>submit</button>
            <button type='button' className='uppercase w-full border border-black text-black text-sm text-center p-2.5 rounded shadow mt-4' onClick={prevStep} >back</button>
        </React.Fragment>
    )
}
