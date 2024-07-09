import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import useLoginFrom from "../../hooks/useLoginForm";

const LoginForm = () => {
  const formik = useLoginFrom();

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
