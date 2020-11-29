import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../Reducer/PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>patient Management{state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} ></input>
            </form>
            {
                state.patients.map(pt =>
                    <li key={pt.id}
                    >{pt.name}-
                        <button onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })}
                        >Delete</button>
                    </li>
                )
            }
        </div>
    );
};

export default PatientManagement;