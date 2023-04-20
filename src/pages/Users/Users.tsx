import React, { useEffect, useState } from 'react'
import './Users.scss'
import { userCardData } from '../../components/Card/userCardData'
import FilterIcon from "../../../src/assets/icons/filter-results-button.svg"
import NPView from "../../../src/assets/icons/np_view.svg"
import NPUser from "../../../src/assets/icons/np_user.svg"
import NPDeleteFriend from "../../../src/assets/icons/np_delete-friend.svg"
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'
import Menu from '../../components/Menu/Menu'
import { Table, TableBody, TableContainer, TablePagination } from '@mui/material'
import { fetchUsers } from './usersSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate } from 'react-router-dom'

const Users: React.FunctionComponent = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const users = useAppSelector((state: any) => state.users.users);
    const status = useAppSelector((state: any) => state.users.status);
    const error = useAppSelector((state: any) => state.users.error);

    useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
    }, [dispatch, status, users]);

      const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
    
    return (
        <div className='user-container'>
            <div className='user-page-title'>Users</div>
            <div className='user-page-top-section d-flex flex-wrap row g-3'>
                {
            userCardData.map((userCard) => (

                <Card key={userCard.id} icon={userCard.icon} title={userCard.title} amount={userCard.amount}/>
            ))
            }
            </div>
    <div className='user-page-bottom-section'>
        <div id="DataTable">
                     <div>
      <TableContainer>
        <Table>
                      <thead>
              <tr className='table-header'>
                <th className='text-nowrap'>organization
                    <span>
                        <img src={FilterIcon} alt="filter-icon" className=" filter-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />        
                        <Filter/>
                    </span>                                    
                </th>
                <th className='text-nowrap'>Username
                    <span>
                        <img src={FilterIcon} alt="filter-icon" className=" filter-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />        
                        <Filter/>
                    </span>    
                </th>
                <th className='text-nowrap'>email
                    <span>
                        <img src={FilterIcon} alt="filter-icon" className=" filter-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />        
                        <Filter/>
                    </span>    
                </th>
                <th className='text-nowrap'>Phone number
                    <span>
                        <img src={FilterIcon} alt="filter-icon" className=" filter-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />        
                        <Filter/>
                    </span>   
                </th>
                <th className='text-nowrap'>Date joined
                    <span>
                        <img src={FilterIcon} alt="filter-icon" className=" filter-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />        
                        <Filter/>
                    </span>
                </th>
                <th className='text-nowrap'>Status
                    <span>
                        <img src={FilterIcon} alt="filter-icon" className=" filter-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />        
                        <Filter/>
                    </span>
                </th>
                <th></th>
              </tr>
            </thead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user: any) => (

                            <tr>
                                <td>{user.orgName}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.createdAt}</td>
                                <td>N/A</td>
                                <td>
                                    <div>
                                        <i className="fa-solid fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false" ></i>
                                        <div className='dropdown-menu action-popup'>
                                            <Menu icon={NPView} title="View Details" isForActionMenu={true} hasClick={true} click={() => {
                                                navigate(`/users/${user.id}`)
                                            }} />
                                            <Menu  icon={NPDeleteFriend} title="Blacklist User" isForActionMenu={true} hasClick={false} />
                                            <Menu  icon={NPUser} title="Activate User" isForActionMenu={true} hasClick={false}/>
                                                        
                                        </div>
                                    </div>
                                </td>
                </tr>
                        
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
                            onRowsPerPageChange={(e) => {
                                setRowsPerPage(parseInt(e.target.value, 10));
                                setPage(0);
                            }}
       labelRowsPerPage={`Showing ${rowsPerPage} out of ${users.length}`}
                        />
                        
    </div>
        </div>
            </div>
</div>
        )
    }
    
export default Users