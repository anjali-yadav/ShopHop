import {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listUsers, deleteUser} from '../actions/userActions'

const UserListScreen = ({history}) =>{
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    const {loading, error, users} = userList

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const userDelete = useSelector(state=>state.userDelete)
    const {success: successDelete} = userDelete

    useEffect(() => {
        if(userInfo && userInfo.isAdmin)
        dispatch(listUsers())
        else
        history.push('/login')
    }, [dispatch,history, successDelete, userInfo])

    const deleteHandler= (id) =>{
        if(window.confirm('Are you sure you want to delete the user?'))
        dispatch(deleteUser(id))
    }

    return (
        <>
        <h1>Users</h1>
        {loading?<Loader></Loader>:error?<Message variant="danger">{error}</Message>:
            <Table hover responsive className="table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key = {user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                            <td>
                                {user.isAdmin? (<i className="fas fa-check" style={{color: '#59756f'}}></i>):
                                ( <i className="fas fa-times" style={{color: '#cb4c4e'}}></i>)
                                }
                            </td>
                            <td>
                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                    <Button variant="dark" className="btn-sm">
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                </LinkContainer>
                                &nbsp;
                                <Button className="btn-sm" variant="dark" onClick={()=>deleteHandler(user._id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        }
        </>
    )
}

export default UserListScreen