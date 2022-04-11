import yup from "../config/yup";

const fairySchema = yup.object({
    name: yup.string().min(1).max(255).required(),
    element: yup.string().min(1).max(255).required(),
    gender: yup.string().min(1).max(255).max(255).required(),
});


export default fairySchema