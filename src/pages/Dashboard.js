import { Link } from "react-router-dom";
import { useOrdersContext } from '../hooks/useOrdersContext'
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect }from 'react'


const Dashboard = () => {

  const {orders, dispatch} = useOrdersContext()
  const {user} = useAuthContext()

  useEffect(() => {

  const fetchOrders = async () => {
    const response = await fetch('/api/order/'+user.user._id, {
      headers: {'Authorization': `Bearer ${user.token}`},
    })
    const json = await response.json()

    if (response.ok) {
      console.log(json)
      dispatch({type: 'SET_ORDERS', payload: json})
    }else{
      console.log(response.error)
    }
  }

  if (user) {
    fetchOrders()
  }
}, [])
 
  return (
    <>
        {/* Content Header (Page header) */}
        <section >
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/Dashboard"><i className="fa fa-dashboard"></i> Home</Link></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          {/* Info boxes */}
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">{orders && <span className="center">{orders.length}</span>}</span>
                </div>{/* /.info-box-content */}
              </div>{/* /.info-box */}
            </div>{/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">{orders && <span className="center">{orders.length}</span>}</span>
                </div>{/* /.info-box-content */}
              </div>{/* /.info-box */}
            </div>{/* /.col */}

            {/* fix for small devices only */}
            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">{orders && <span className="center">{orders.length}</span>}</span>
                </div>{/* /.info-box-content */}
              </div>{/* /.info-box */}
            </div>{/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">{orders && <span className="center">{orders.length}</span>}</span>
                </div>{/* /.info-box-content */}
              </div>{/* /.info-box */}
            </div>{/* /.col */}
          </div>{/* /.row */}

          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Responsive Hover Table</h3>
                  <div className="box-tools">
                    <div className="input-group">
                      <input type="text" name="table_search" className="form-control input-sm pull-right" style={{width: 150}} placeholder="Search"/>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-default"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>{/* /.box-header */}
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Contact</th>
                    </tr>
                    </thead>
                    <tbody> 
                    {orders && orders.map((order, index) => (

                    <tr key={order._id}>
                      <td>{index + 1}</td>
                      <td>{order.username}</td>
                      <td><img src={`img/${order.itemname}/${order.image}`} /></td>
                      <td><span className="label label-success">{order.itemname}</span></td>
                      <td><span className="label label-warning">{order.price}</span></td>
                      <td><span className="label label-primary">{order.date}</span></td>
                      <td><span className="label label-danger">{order.time}</span></td>
                      <td>{order.contact}</td>
                    </tr>
                    ))}
                    </tbody>
                  </table>
                </div>{/* /.box-body */}
              </div>{/* /.box */}
            </div>
          </div>
          </section>
    </>
  )
}

export default Dashboard