import axios from 'axios';
import { useFormik } from 'formik';
import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    let params = useParams()
   
    useEffect(async function()  {
        let userdata = await axios.get(`https://b29wd-node-crud-app.herokuapp.com/${params.id}`)
        formik.setValues(userdata.data)
        console.log(params)
    }, [])
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {  
            name : '',
            email: '',
        },
        onSubmit: async (values) => {
           try {    
            delete values['_id'];
            await axios.put(`https://b29wd-node-crud-app.herokuapp.com/${params.id}`,values)
            navigate("/")
           } catch (error) {
               console.log(error)
           }
        }
    });


    return (
        <div>
            <br />
            <h2>Edit User</h2>
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
                    <button type='submit' className='btn btn-info mt-4'>EditUser</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
