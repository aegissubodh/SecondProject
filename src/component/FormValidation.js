
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const FormIk =() =>{

    const initialValues = {
        firstName:'',
        lastName:'',
        email:'',
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Name is Required'),
        lastName: Yup.string().required('Last name is required Required'),
        email: Yup.string().email("Invalid Email").required(" Email is Required")
  
    });

    const onSubmit = (values, { setSubmitting }) => {
        // Simulate form submission
        setTimeout(() => {
          alert(JSON.stringify(values));
          //console.log(values);
          setSubmitting(false);
        }, 40);
      };
   

    return(
        <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label>First Name:</label>
                    <Field type="text" name="firstName" id="firstName"/>
                    <ErrorMessage name="firstName" component="div"/>
                </div>

                <div>
                    <label>Last Name:</label>
                    <Field type="text" name="lastName" id="lastName"/>
                    <ErrorMessage name="lastName" component="div"/>
                </div>

                <div>
                    <label>Email:</label>
                    <Field type="email" name="email" id="email"/>
                    <ErrorMessage name="email" component="div"/>
                </div>
                <button type="submit">Submit</button>
            </Form>

        </Formik>
    </div>
    )

}

export default FormIk;