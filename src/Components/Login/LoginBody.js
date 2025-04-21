import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

const LoginBody = () => {
    const { user, LoginUser } = useContext(UserContext);
    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (user != null){
            navigate("/");
        }
        // eslint-disable-next-line
    }, [user])

    return (
        <>
            <div className="vh-100 bg-light">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-4 card shadow-lg">
                            <div className="card-body p-5">
                                <div className="my-4">
                                    <h2 className="fw-bold mb-2 text-center">LOGIN</h2>
                                    <p className="mb-5 text-center">Vul email en password in.</p>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" type="email" id="email" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Wachtwoord</label>
                                        <input className="form-control" type="password" id="password" placeholder="Wachtwoord" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
                                        <button className="btn btn-primary btn-lg px-5" type="submit" onClick={() => {LoginUser(userEmail, userPassword)}}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginBody;