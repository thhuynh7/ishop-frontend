import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import Header from "./components/nav/Header"
import Footer from "./components/nav/Footer"


import RegisterComplete from "./pages/auth/RegisterComplete"
import ForgotPassword from "./pages/auth/ForgotPassword"
import History from "./pages/user/History"
import UserRoute from "./components/routes/UserRoute"
import AdminRoute from "./components/routes/AdminRoute"
import Password from "./pages/user/Password"
import AdminDashboard from "./pages/admin/AdminDashboard"
import Product from "./pages/Product"
import CategoryHome from "./pages/category/CategoryHome"
import SubHome from "./pages/sub/SubHome"
import Shop from "./pages/Shop"

import { auth } from "./firebase"
import { useDispatch } from "react-redux"
import { currentUser } from "./functions/auth"

const App = () => {
  const dispatch = useDispatch()

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
        // console.log("user", user);

        currentUser(idTokenResult.token)
          .then(res => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id
              }
            })
          })
          .catch(err => console.log(err))
      }
    })
    // cleanup
    return () => unsubscribe()
  }, [dispatch])

  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/user/password" component={Password} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/product/:slug" component={Product} />
        <Route exact path="/category/:slug" component={CategoryHome} />
        <Route exact path="/sub/:slug" component={SubHome} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
