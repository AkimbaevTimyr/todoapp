import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [buttonValid, setButtonValid] = useState(true)
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail':
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLocaleLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
            }
        }
    }, [value])
    useEffect(()=>{
        if(isEmpty || minLengthError || maxLengthError || emailError ){
            setButtonValid(false)
        }else{
            setButtonValid(true)
        }
    },[isEmpty, minLengthError, maxLengthError, emailError])
    
    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        buttonValid
    }
}