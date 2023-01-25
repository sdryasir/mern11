import { useFormik } from "formik"
import * as Yup from 'yup'
function Login() {

  const {handleSubmit, handleReset, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues:{
      name:'',
      email:'',
      contact:''
    },
    validationSchema:Yup.object({
      name:Yup.string()
        .min(4, 'Please provide atleast 4 characters')
        .max(20, 'long name are not allowed')
        .required('Name can not be empty'),
      email:Yup.string().required().email(),
      contact:Yup.number().required()
    }),
    onSubmit:(values)=>{
      console.log(values);
    }
  })

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-8">
          <form className='mt-5' onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' id="name"/>
                <p style={{color:'red'}}>{touched.name && errors.name ? errors.name:null}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">email</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' id="email"/>
                <p style={{color:'red'}}>{touched.email && errors.email ? errors.email:null}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Contact</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.contact} name='contact' id="contact"/>
                <p style={{color:'red'}}>{touched.contact && errors.contact ? errors.contact:null}</p>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button type="reset" onClick={handleReset} className="btn btn-primary">Reset</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login