import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
    // Render
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    {/* Cart Page */}
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>

                    {/* Home Page */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
