import { Parallax } from 'react-parallax';
import image3 from "../images/moonmoon.jpeg"
import {TbBrandLinkedin} from 'react-icons/tb'
import {FiGithub, FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import Email from './Email';
import Phone from './Phone';
import { useState } from 'react';

const linkedIn = () => (
    window.open("https://www.linkedin.com/in/cameronguadagnino/")
)
const gitHub = () => (
    window.open("https://github.com/C-Guadagnino")
)


export default function ImageTwo() {
    const [showEmail, setShowEmail] = useState(false)
    const [showPhone, setShowPhone] = useState(false)

    const handleOnCloseEmail = () => setShowEmail(false)
    const handleOnClosePhone = () => setShowPhone(false)

    return(
    <Parallax className='image bg-gradient-to-b from-gray-900 to-gray-300' wstrength={800}>
        <div className='content'>
            <span className='image-txt'> Contact me</span>
        </div>
        <div className='othercontent'>
            <button className='socialbutton' onClick={() => linkedIn()}> <TbBrandLinkedin size="2.1em" /> </button>
            <button className='socialbutton' onClick={() => gitHub()}> <FiGithub size="1.9em" /> </button>
            <button className='socialbutton' onClick={() => setShowEmail(true)}> <HiOutlineMail size="2em" /> </button>
            <button className='socialbutton' onClick={() => setShowPhone(true)}> <FiPhoneCall size="1.8em" /> </button>
        </div>
        <Email onClose={handleOnCloseEmail} visible={showEmail} />
        <Phone onClose={handleOnClosePhone} visible={showPhone} />
    </Parallax>
    )
}

