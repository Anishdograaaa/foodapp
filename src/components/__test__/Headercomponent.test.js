import Headercomponent from "../../components/Headercomponent"
import { screen,render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"



test("",()=>{
    render(
   <BrowserRouter>
    <Provider store = {appStore}>
             <Headercomponent/>
    </Provider>
   </BrowserRouter>
    )

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
})
test("",()=>{
    render(
   <BrowserRouter>
    <Provider store = {appStore}>
             <Headercomponent/>
    </Provider>
   </BrowserRouter>
    )

    const loginbutton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginbutton)
    const logoutbutton = screen.getByRole("button",{name:"Logout"}) 
    expect(logoutbutton).toBeInTheDocument()
})