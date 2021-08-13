import React from 'react';
import './form.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addVideogame } from '../actions';


export default function Form () {
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genre1: '',
        genre2: '',
        platforms: []    
    })
  
    // const dispatch = useDispatch();

    function handleChange(e){    
        setInput({       
          ...input,
          [e.target.name]: e.target.value
        })
    }
    function handleSelect(e){
        setInput({
            ...input,
            genre1: e.target.value
        })
    }
    function handleSelect2(e){
        setInput({
            ...input,
            genre2: e.target.value
        })
    }

    function handleCheckbox(e){
        const isChecked = e.target.checked;
       if(isChecked){
           setInput({
               ...input,
               platforms: [...input.platforms, e.target.value]
           })
       } 
    console.log(e.target.checked)
    }
    console.log(input)

    async function handleSubmit(e){
        e.preventDefault()
        // dispatch(addVideogame(input))
       await axios.post('http://localhost:3001/videogame', input)
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            genre1: '',
            genre2: '',             //puedo crear dos key genre1 y genre2, y enviar al back y que lleguen fuera del array
            platforms: []    
        })
    }
    return (
        <div className = "back">

            <form className = "form" onSubmit={handleSubmit}>
                <h2 className ="title">Create Videogame</h2>
                <div className = "input-container ic1">

                    <input type="text" className ="input" name ="name" value={input.name} onChange={handleChange} placeholder = "Name"/>
                </div>
                <div className = "input-container ic1">

                    <input type="text" className ="input" name ="description" value={input.description} onChange={handleChange} placeholder = "Description" />
                </div>
                <div className = "input-container ic1">

                    <input type="date" className ="input" name = "released" value ={input.released} onChange={handleChange} placeholder = "Released" />
                </div>
                <div className = "input-container ic1">

                   <input type="number" className ="input" name= "rating" value ={input.rating} onChange={handleChange} placeholder = "Rating"/>
                </div>

                <div  className ="genres">
                    <div>
                    <span>Genre 1</span>     
                        <select name="genre1" id ="genres" value ={input.genre1} onChange ={handleSelect}>
                            <option value= ""> -- select an option -- </option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                        </select>
                    </div>    
                    <div >
                    <label>Genre 2</label>     
                        <select name="genre2" id ="genres" value ={input.genre2} onChange ={handleSelect2} >
                            <option value= ""> -- select an option -- </option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                        </select>   
                    </div>  
                </div>  
                <p className = "plat">Platforms</p> 
                <div className = "platforms">  
                    <label><input type= "checkbox" name ="ps5" value ="PS5" onChange ={handleCheckbox}/> PS5 </label>
                    <label><input type= "checkbox" value ="Nintendo" onChange ={handleCheckbox}/> Nintendo </label>
                    <label><input type= "checkbox" value ="Pc" onChange ={handleCheckbox}/> PC </label>
                    <label><input type= "checkbox" value ="Xbox" onChange ={handleCheckbox}/> Xbox </label>
                    <label><input type= "checkbox" value ="PS4" onChange ={handleCheckbox}/> PS4 </label>
                    
                </div> 
                
                <button className ="submit">Create</button>
                        <div className ="contbackhome">
                            <Link to= "/home">
                            <button className ="backhome">Home</button>
                            </Link>
                        </div>



            </form>


        </div>
    )
}