import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate("/");
    };



    return (
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Login</h5>
                            <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" />
                                        <label htmlFor="email">Email</label>
                                    </span>
                            </div>
                            <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" toggleMask/>
                                        <label htmlFor="password">Password</label>
                                    </span>
                            </div>
                            <Button type="submit" label="Login" className="mt-2" onClick={onSubmit} />

                </div>
            </div>
        </div>
    );
}


export default Login;
