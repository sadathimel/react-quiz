import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";


export default function LoginForm(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const[error,setError] = useState();
    const[loading,setLoading] = useState();

    const {login} = useAuth();
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setError("");
            setLoading(true);
            await login(email,password);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to Login!");
        } 
    }


    return(
        <Form style={{height: "330px"}} onSubmit = {handleSubmit}>
          
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
            value={email}
            required 
            onChange={(e)=> setEmail(e.target.value)}
          />

          <TextInput 
            type="password" 
            placeholder="Enter password" 
            icon="lock"
            value={password}
            required 
            onChange={(e)=> setPassword(e.target.value)} 
          />
          
          <Button disabled={loading} type= "submit"> 
              <span>Submit now</span>
          </Button>

          {error && <p className = "error">{error}</p>}

          <div className="info">
            Don't have an account?  <Link to="login.html">Login</Link> instead.
          </div>
        </Form>
    )
}