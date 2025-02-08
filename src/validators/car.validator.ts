import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern.base": "Only one word from 1 to 20 letters."
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min": "min price is 0.",
        "number.max": "max price is 1000000",
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        "number.min": "min year is 1990.",
        "number.max": "max year is 2024",
    }),
})

export default carValidator;