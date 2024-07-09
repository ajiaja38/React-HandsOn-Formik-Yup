import { FormikProps, useFormik } from "formik";
import * as yup from "yup";

interface LoginFormProps {
  username: string;
  password: string;
}

const useLoginFrom = (): FormikProps<LoginFormProps> => {
  const formik: FormikProps<LoginFormProps> = useFormik<LoginFormProps>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object<LoginFormProps>({
      username: yup
        .string()
        .required("Username is required")
        .min(3, "Username should be of minimum 3 characters length")
        .max(20, "Username should be of maximum 20 characters length"),
      password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        )
        .required("Password is required"),
    }),
    onSubmit: (values: LoginFormProps): void => {
      console.log(values);
    },
  });

  return formik;
};

export default useLoginFrom;
