import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import * as yup from "yup";
import { FormikProps, useFormik } from "formik";

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm = () => {
  const formik: FormikProps<LoginFormProps> = useFormik<LoginFormProps>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <Toolbar />
      <form
        onSubmit={formik.handleSubmit}
        className="w-3/6 border rounded p-6 shadow-md"
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight={"bold"}
          sx={{ mb: 2 }}
        >
          Silahkan Login
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ width: "50%" }}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
