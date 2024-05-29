
interface Valid {
    valid: true
}

interface InValid {
    valid: false
    errorMessage: string
}


export const nameOrDescriptionValidator = (value: any, fieldName: "name" | "description"): Valid | InValid => {
    switch (true) {
        // if value is falsy then 
        case (!value):
            return { valid: false, errorMessage: `${fieldName} is required` }

        case (typeof value !== "string"):
            return { valid: false, errorMessage: `${fieldName} should be of type string` }


        default:
            return { valid: true }
    }
}