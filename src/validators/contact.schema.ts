import yup from "../config/yup";

const contactSchema = yup.object({
    name: yup.string().min(1).max(255).required(),
    email: yup.string().min(1).max(255).email().required(),
    phone: yup.string().min(1).max(255).required(),
});


export default contactSchema