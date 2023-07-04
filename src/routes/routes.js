import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/ErrorPage";
import Root from "../layout/root/Root";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from "../pages/about-page/AboutPage";
import ProjectsPage from "../pages/projects-page/ProjectsPage";
import NewsPage from "../pages/news-page/NewsPage";
import ContactPage from "../pages/contact-page/ContactPage";
import Gallery from "../pages/gallery-page/Gallery";
import SignInPage from "../pages/sign-in-page/SignInPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/projects",
                element: <ProjectsPage></ProjectsPage>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/news",
                element: <NewsPage></NewsPage>
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>
            },
            {
                path: "/signIn",
                element: <SignInPage></SignInPage>
            }
        ]
    }
])