import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react"
function Userlist() {
    const [userlist, setuserlist] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            let userdata = await axios.get("https://b29wd-node-crud-app.herokuapp.com/users")
            setuserlist(userdata.data)
        } catch (error) {
            console.log(error)
        }
    }
    // let handleDelete = async (id) => {
    //     try {
    //         let result = window.confirm("Are you sure want to delete?")
    //         if (result) {
    //             await axios.delete(`https://b29wd-node-crud-app.herokuapp.com/${id}`)
    //             fetchUsers()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleDelete = ( async (id) => {
        try {
          if(window.confirm('Are you sure want to delete')){
          await fetch(`https://b29wd-node-crud-app.herokuapp.com/${id}`,{
          method : "DELETE",
          headers : {
            "Content-type" : "application/json"
          }
        })}
        } catch (error) {
          console.log(error)
        }
        fetchUsers()
     })


    return (
        <>
            <br />
            <div className='row'>
                <div className='col-lg-6'>
                    <h3>UserList</h3>
                </div>
                <div className='col-lg-6 text-end'>
                    <Link to={"/create"}><button className='btn btn-primary'>Create User</button></Link>
                </div>
            </div>


            <table class="table table-striped mt-3">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index) => {
                            return <tr key={index}>

                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit-user/${user._id}`}>
                                        <button className='btn btn-primary'>Edit</button>
                                    </Link>
                                </td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </>
    )
}

export default Userlist
