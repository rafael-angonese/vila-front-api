import yup from "../config/yup";

const spellSchema = yup.object({
    name: yup.string().min(1).max(255).required(),
    element: yup.string().min(1).max(255).required(),
    spell_word: yup.string().min(1).max(255).required(),
    mana: yup.number().integer().required(),
});


export default spellSchema