import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    title: Yup.string().min(2).required(),
    description: Yup.string().required().min(10).max(350),
    slug: Yup.string().required(),
    category: Yup.array()
        .of(Yup.string())
        .min(1, 'Select at least one category'),
    year: Yup.number(),

    // publish: Yup.boolean(),
});
