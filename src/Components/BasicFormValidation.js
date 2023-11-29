// BasicFormValidation.js
/* The source code was found here; https://codesandbox.io/s/simple-mui-formik-yup-form-validation-jlr1o?file=/src/Components/YupValidation.js
*/
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material"; // install by; npm install @mui/material @emotion/react @emotion/styled

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState, useContext } from "react";
import YupValidation from "./YupValidation";
import { FormDataContext } from "./FormDataContext";

const BasicFormValidation = () => {
  const initialValue = {
    name: "",
    nannyName:"",
    date: "",
    activity1: "",  // simple layout that allows up to 4 activities and their duration
    time1: "",
  };

  const {setFormData} = useContext(FormDataContext);

  const handleSubmit = (values, props) => {
    console.log(values);
    setFormData(values); // send data
    alert(JSON.stringify(values));
    props.resetForm();
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Basic Formik Form Validation</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
                return (
                  <Form>
                    {/* First Way */}
                    <TextField
                      label="Parent's Name"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      value={name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.name && props.touched.name}
                      required // only required field currently
                    />
                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Nanny's name"
                      type="text"
                      name="nannyName"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="nannyName" />}
                      error={props.errors.email && props.touched.email}
                    />

                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Date to schedule the nanny"
                      type="text"
                      name="date"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="date" />}
                      error={props.errors.email && props.touched.email}
                    />

                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Activity 1"
                      type="text"
                      name="activity1"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="activity1" />}
                      error={props.errors.email && props.touched.email}
                    />

                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Time to do activity 1"
                      type="text"
                      name="time1"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="time1" />}
                      error={props.errors.email && props.touched.email}
                    />

                    

                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};

export default BasicFormValidation;
