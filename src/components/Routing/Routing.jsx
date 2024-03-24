import { createBrowserRouter , RouterProvider } from "react-router-dom"
import HomePage from "../DisplayFolder/HomePage"
import QuotePage from "../DisplayFolder/QuotePage"
import { ResturentPage } from "../DisplayFolder/ResturentPage"
import { FoodPage } from "../DisplayFolder/FoodPage"
import { ContactPage } from "../DisplayFolder/ContactPage"
function Routing(){
    const routers = createBrowserRouter([
        {
            path : "/",
            Component : HomePage,
        },

        {
            path : "/Home",
            Component : HomePage,
        },

        {
            path : "/Quote",
            Component : QuotePage,
        },

        {
            path : "/Resturent",
            Component : ResturentPage,
        },

        {
            path : "Foods",
            Component : FoodPage,
        },

        {
            path : "/contacts",
            Component : ContactPage,
        }

    ])
    return(
        <>
            <RouterProvider router={routers}></RouterProvider>
        </>
    )
}
export default Routing