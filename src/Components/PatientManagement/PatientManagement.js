import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../../Reducer/PatientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    return (
        <div>
            <h1>patient Management{state.patients.length}</h1>
            <from>
                <input></input>
            </from>
        </div>
    );
};

export default PatientManagement;