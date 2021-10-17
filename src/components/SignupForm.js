import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";


export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {signup} = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        // do validation

        if(password !== confirmPassword){
            return setError("Password don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!")
        }
        
    }



    return (
        <div>
        <Form className={{height: "500px"}} onSubmit = {handleSubmit}>
          <TextInput 
            type="text" 
            placeholder="Enter name" 
            icon="person" 
            value={username}
            required 
            onChange={(e)=> setUsername(e.target.value)}
          />

          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
            required
            value={email} 
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

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirmPassword}
            required 
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />

          <Checkbox
            required 
            text="I agree to the Terms Conditions" 
            value={agree} 
            onChange={(e)=> setAgree(e.target.value)} 
          />

          <Button disabled={loading} type= "submit">
              <span>Submit now</span>
          </Button>

          {error && <p className = "error">{error}</p>}

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
        </div>
    )
}

