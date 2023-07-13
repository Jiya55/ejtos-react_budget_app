import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	const { expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const  handleChange=(e)=>{
        if(e.target.value >=20000){ 
          window.alert("the Budget cannot exceed 20000")
          return
        }
        if (e.target.value < totalExpenses){
            window.alert("the budget cannot be less than allocated expenses")
            return
        }
        setValue(e.target.value);
    
      }
    return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={ handleChange}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;