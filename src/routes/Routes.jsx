import Layout from "../components/Layout/Layout"
import Login from "../components/Sidebar/Authentication/Login"
import Register from "../components/Sidebar/Authentication/Register"
import Typography from "../components/Sidebar/Utilities/Typo"
import Color from "../components/Sidebar/Utilities/Color"
import Shadow from "../components/Sidebar/Utilities/Shadow"
import SamplePage from "../components/Sidebar/Support/Sample"




export const routes=[
    {
        path:"/login",
        element:(
        <Layout>
            <Login/>{" "}
        </Layout>)
    },

     {
        path:"/register",
        element:(
        <Layout>
            <Register/>{" "}
        </Layout>)
    },

    {
        path:"/typography",
        element:(
        <Layout>
            <Typography/>{" "}
        </Layout>)
    },

    {
        path:"/color",
        element:(
        <Layout>
            <Color/>{" "}
        </Layout>)
    },

    {
        path:"/shadow",
        element:(
        <Layout>
            <Shadow/>{" "}
        </Layout>)
    },

    {
        path:"/sample-page",
        element:(
        <Layout>
            <SamplePage/>{" "}
        </Layout>)
    },


]