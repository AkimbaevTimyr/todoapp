import { useState } from "react"
import { useValidation } from "./useValidation"
export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const valid = useValidation(value, validations)
    const [isDirty, setIsDirty] = useState(false)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = () => {
        setIsDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

