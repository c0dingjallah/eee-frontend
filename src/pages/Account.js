import { useNavigate, Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"
import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogin } from "../hooks/useLogin"


const Dashboard = () => {

  const { user } = useAuthContext()
 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [emailornum, setEmailornum] = useState('');
  const [password, setPassword] = useState('');

  const [lemailornum, setLemailornum] = useState('');
  const [lpassword, setLpassword] = useState('');
  const {login, lerror, lisLoading} = useLogin()

  const [sname, setSname] = useState('');
  const [semailornum, setSemailornum] = useState('');
  const [spassword, setSpassword] = useState('');
  const {signup, error, isLoading, userObj} = useSignup()
  const [oerror, setOerror] = useState(null)

  //const delay = async (ms) => new Promise(res => setTimeout(res, ms));
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailornum(semailornum)
        setPassword(spassword)
        setName(sname)

        await signup(name, emailornum, password)
        //await delay(000);
        
            

            if (error !== null) {
              setOerror(error)
             console.log(oerror)

            }else{

              setName('')
              setEmailornum('')
              setPassword('')
              setOerror(null)
               
              alert("signup successful")
              }
                       
      }

      const handleLogin = async (e) => {
        e.preventDefault();
        setEmailornum(lemailornum)
        setPassword(lpassword)

        await login(emailornum, password)

        if (lerror !== null) {
          setOerror(error)
         console.log(oerror)

        }else{
          return(
            navigate('/', { replace: true })
            )
        }
    
      }
 
  return (
    <>
     {/* catg header banner section */}
  <section id="aa-catg-head-banner">
    <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
    <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>Account Page</h2>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>                   
          <li className="active">Account</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  {/* / catg header banner section */}

 {/* Cart view section */}
 <section id="aa-myaccount">
   <div className="container">
     <div className="row">
       <div className="col-md-12">
        <div className="aa-myaccount-area">         
            <div className="row">
              <div className="col-md-6">
                <div className="aa-myaccount-login">
                <h4>Login</h4>
                 <form onSubmit={handleLogin} className="aa-login-form">
                  <label >Username or Email address<span>*</span></label>
                   <input type="text" 
                   value={lemailornum}
                   onChange={(e) => setLemailornum(e.target.value)}
                   placeholder="Username or email" required />
                   <label >Password<span>*</span></label>
                    <input type="password" 
                    value={lpassword}
                    onChange={(e) => setLpassword(e.target.value)}
                    placeholder="Password" required />
                    <button type="submit" className="aa-browse-btn">Login</button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="aa-myaccount-register">                 
                 <h4>Register</h4>
                 <form onSubmit={handleSubmit} className="aa-login-form">
                    <label >Full Name<span>*</span></label>
                    <input type="text"
                     value={sname}
                     onChange={(e) => setSname(e.target.value)}
                     placeholder="Full Name" 
                     required />
                    <label >Email Address or Phone Number<span>*</span></label>
                    <input type="text" 
                      value={semailornum}
                      onChange={(e) => setSemailornum(e.target.value)}
                      placeholder="Email Address or Phone Number" 
                      required />
                    <label >Password<span>*</span></label>
                    <input type="password" 
                     value={spassword}
                     onChange={(e) => setSpassword(e.target.value)}
                     placeholder="Password" 
                     required />
                    <button type="submit" className="aa-browse-btn">Register</button>                    
                  </form>
                </div>
              </div>
            </div>          
         </div>
       </div>
     </div>
   </div>
 </section>
 {/* / Cart view section */}
    </>
  )
}

export default Dashboard