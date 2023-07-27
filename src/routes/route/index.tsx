import { AllPage, MainPage, DeletedPage, TestPage, StudioPage, ChatPage, ChildrenPage, ForwardRefPage } from "../../pages";
import { Navigate, Route, Routes } from "react-router-dom";


export const ROUTES = {
    Login: '/login',
    Main: '/main',
    All: '/main/all',
    Deleted: '/main/deleted',
    Chat: '/main/chat',
    Children: '/main/children',
    Studio: '/main/studio',
    Test: '/test',
    ForwardRef: '/main/forwardRef'
}

export const RoutePage = () => {
    return (
        <Routes>
            <Route path='/' element={(<Navigate to='/main/'></Navigate>)}></Route>
            <Route path={ROUTES.Login} element={<div >log in</div>}></Route>
            <Route path={ROUTES.Test} element={<TestPage />}></Route>
            <Route path='/main/*' element={<MainPage />}></Route>
        </Routes>
    )
}

export const MainRoutePage = () => { 
    return (
        <Routes>
            <Route path='all' element={<AllPage />}></Route>
            <Route path='deleted' element={<DeletedPage />}></Route>
            <Route path='studio' element={<StudioPage/>}></Route>
            <Route path='chat' element={<ChatPage/>}></Route>
            <Route path='children' element={<ChildrenPage/>}></Route>
            <Route path='forwardRef' element={<ForwardRefPage/>}></Route>
        </Routes>
    )
}