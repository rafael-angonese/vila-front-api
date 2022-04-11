import yup from "../config/yup";

const fairySchema = yup.object({
    name: yup.string().min(1).max(255).required(),
    element: yup.string().min(1).max(255).required(),
    health_point: yup.number().required(),
});


export default fairySchema