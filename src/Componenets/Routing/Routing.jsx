import { Route, Routes } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import { lazy, Suspense } from "react";
import PageLoader from "../PageLoader/PageLoader"
import CustomErrorBoundary from "../ErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../Pages/Home"))
const CoinDetailsPage = lazy(() => import("../../Pages/CoinDetailsPage"))

function Routing() {
    return (
        <CustomErrorBoundary>
            <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={
                    <Suspense fallback={<PageLoader />}>
                        <Home />
                    </Suspense>
                } />
                <Route path="/details/:coinId" element={
                    // and these suspense component take a props called as fallback , what is the fallback in the fallback you tell what UI you want to show till the time something been downloaded, in our case what is something , something is our CoinDetailsPage
                    <Suspense fallback={<PageLoader />}>
                        <CoinDetailsPage />
                    </Suspense>
                } />
            </Route>
            
        </Routes>
        </CustomErrorBoundary>
        
    )
}

export default Routing;