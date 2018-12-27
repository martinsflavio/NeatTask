++ LIST OF VALIDATION
    matchRegexp
    isEmpty
    required
    trim
    isString
    minStringLength
    maxStringLength
    isPositive
    maxNumber
    minNumber
    maxFloat
    minFloat
    isEmail = example@provider.com
    isZipCode = 00000 US
    isNumber
    isFloat
    isDate = mm/dd/yyyy
    isTime = "00:00" 24h
    isRange = {range: {max: 10, min: 0}}

++ HOW TO USE
    Obj must follow this format

    formData: {
        [inputType]: {
            value: "",
            isValid: bool,
            errorMessage: ""
            validations: [...]
        }
    }