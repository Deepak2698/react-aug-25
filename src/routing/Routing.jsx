import React from 'react';

import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Customer from './Customer';
import About from './About';

const Routing = () => {
  return (
<div>
    <Router>
        <ul>
            <li>
                <Link to='/home'>
                    Home
                </Link>
            </li>
            <li><Link to='/product'>
                    Product
                </Link>
            </li>
            <li><Link to='/customer'>
                    Customer
                </Link>
            </li>
            <li><Link to='/About'>
                    About
                </Link>
            </li>
        </ul>
        <Routes>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/product' element = {<Product/>}/>
            <Route path='/customer' element = {<Customer/>}/>
            <Route path='/about' element = {<About/>}/>
        </Routes>
    </Router>

    </div>
  )
}

export default Routing
