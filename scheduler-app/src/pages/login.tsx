import Button from 'react-bootstrap/Button';
import './basic.css';

function loginPage() {
    return (
        <div className="container">
            <Button href="/">Home</Button>
            <h1>Login Page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br></br>
                <button type="submit">Login</button>
            </form>
        </div >
    );
};

export default loginPage;