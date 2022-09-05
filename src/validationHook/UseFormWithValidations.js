import { useState } from 'react'; 

function useFormWithValidations (startingValues) { //кастомный хук должен начинаться с use - правила реакт 
    const { inputValues, errValues, errStates } = startingValues;
    const [values, setValues] = useState(inputValues);
    const [errText, setErrText] = useState(errValues);
    const [isErrs, setIsErrs] = useState(errStates);

   function handleChangeValue (e) {
        const {target: { validationMessage, validity: {valid}, value, name }} = e;
        setValues({...values, [name]: value});  // чтобы обновить одно поле
        setIsErrs({...isErrs, [name]: !valid});
        if (!valid) {
            setErrText({...errText, [name]: validationMessage});
        } else {
            setErrText({...errText, [name]: ''});
        }
    };

    function resetErrs () { //очищает ошибки, кроме values
        setIsErrs(errStates);
        setErrText(errValues);
    }

    return { values, setValues, errText, isErrs, handleChangeValue, resetErrs };

}

export default useFormWithValidations;