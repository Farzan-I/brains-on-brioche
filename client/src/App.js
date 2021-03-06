import React, { useEffect, useState } from "react"; 
import Meals from './components/Meals/Meals.js'
import Navbar from './components/Navbar.js'
import Input from './components/Input.js'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'
import Footer from './components/Footer.js'
import Fridge from './components/Fridge.js'

import { useDispatch } from "react-redux";

import { getMealData } from './actions/fetchMeals.js'
import { getMealInstructions} from './actions/fetchInstructions.js'

import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import SignUpDropDown from "./components/SignUpDropDown.js";

const App = () => {

  const dispatch = useDispatch();

  // this is the call to the backend
  useEffect(() => {
    dispatch(getMealData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMealInstructions());
  }, [dispatch]);


  // const [loggedInStatus, setLoggedInStatus] = useState(false)
    
  const [showInstruction, setShowInstruction] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState({"usedIngredients": [{"id": 0, "name": ""}], "missedIngredients": [{"id": 0, "name": ""}]})

 
  return (
    <div>

      <Navbar />
      <div class="main-body-container">
        <div class="fridge--container">
          <Fridge 
            showInstruction={showInstruction} 
            selectedMeal={selectedMeal}
            />
          <div className="search-container">
          {/* <Input /> */}
          </div>
        </div>
          {/* <div className="search-container">
            
          </div> */}

          <div className="meals-container">
            <Meals 
              setShowInstruction={setShowInstruction}
              setSelectedMeal={setSelectedMeal}
              />
          </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;