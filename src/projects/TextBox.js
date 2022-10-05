import React from "react";
import {BsFillRecordCircleFill} from 'react-icons/bs'
// import {View} from 'react-native'

const TextBox = () => {
    return(
        <div className="text-box h-[500px] flex">
            <div className="self-center m-auto font-sans font-medium text-lg">
            <p>

            I am a recent Hack-Reactor 19-week Software Engineering Bootcamp graduate,<br />
            who is a results-oriented and people focused, as well I am an adaptable <br />
            software engineer who loves the ever-changing programming landscape and<br />
            learning new tools, editors, programming languages, and frameworks to create <br />
            useful software for users I am excited to work in software engineering due to my  <br />
            love of learning new skills. This is a field that allows for upwards growth in terms <br />
            of career and technical skills, and that prospect is very exciting to me. As someone  <br />
            who used to work in the health-care field, adaptability is something I have grown to love, <br />
            and is something I will hope to use to leverage my way into a successful career as a software engineer.<br />
            </p>

            <div className="mt-5">
            <p className="underline font-bold">Technical Skills :</p> <br />
            JavaScript, Python, Django 4, React.js, Redux<br />
            HTML, CSS, PostgreSQL, MongoDB, Heroku, JSON <br />
            </div>
        </div>
        </div>
    )
}

export default TextBox