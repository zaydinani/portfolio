//my styles
import "../../styles/Auth.scss";
import data from "../../data/data.json"


function Auth() {
    
    return(
        <main>
            <div className="auth_container">
                <img src={data['zayd-data'].about.logo} alt="" />
                <form>
                    <input className="input" name="user_name" type="text" placeholder="Enter your name"  required/>
                    <input className="input" name="password" type="password" placeholder="Enter your passoword"  required/>
                    <input className="input" name="password" type="password" placeholder="confirm passoword"  required/>

                    <label>
                        <input
                            type="checkbox"
                        />
                        Stay signed in
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </main>

    )
}
export default Auth;
