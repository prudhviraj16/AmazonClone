import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebases'
import './login.css'


const Login = () => {

    const [data,setData] = useState({
        email : '',
        password : ''
    })

    const changeHandler = (e) => {
        const {name,value} = e.target


        setData((prevState)=>{
            return {
               ...prevState,
                [name]: value
            }
        })
    }


    const submitHandler= (e) =>{
        e.preventDefault()
        
    }


    const registerHandler = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(data.email,data.password).then((auth)=>{
            console.log(auth)
        }).catch((err)=>console.log(err.message))

    }

  return (
    <div className='login'>
        <Link to="/">
        <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>

            <form action="" onSubmit={submitHandler}>
                <h5>
                    E-mail</h5>
                    <input type="email" name="email" onChange={changeHandler}/>
                

                <h5>Password</h5>
                <input type="password" name="password" onChange={changeHandler}/>


                <button className='login_signInButton'>Sign in</button>

                <p>By signing-in you agree to the AMAZON FAKE CLONE Condition of Use & Sale. Please see out Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice</p>

                <button className='login_registerButton' onClick={registerHandler}>Create your Amazon account</button>
            </form>
        </div>
    </div>
  )
}

export default Login