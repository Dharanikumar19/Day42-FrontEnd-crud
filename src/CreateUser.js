import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import {useNavigate} from "react-router-dom";

function CreateUser() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name : '',
            email: '',
        },
        onSubmit:async values => {
           try {
            axios.post("https://b29wd-node-crud-app.herokuapp.com/create-user",values)
            navigate("/")
           } catch (error) {
               console.log(error)
           }
        },
    });



    return (
        <div>
            <br />
            <h2>CreateUser</h2>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row' >

                        <div className='col-lg-6'>
                            <label>Name</label>
                            <input type="text" name='name' className='form-control' 
                                onChange={formik.handleChange}
                                value={formik.values.name} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Email</label>
                            <input type="text" name='email' className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-info mt-4'>CreateUser</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
