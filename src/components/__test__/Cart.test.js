import { fireEvent, render,screen,act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Headercomponent from "../Headercomponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart"
import MOCK_DATA from "./mocks/resItemsmock.json"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
           return Promise.resolve(MOCK_DATA);
        }
    })
})


it("", async()=>{
    await act(async()=>render(
      <Provider store = {appStore}>
        <BrowserRouter>
           <Headercomponent/>
           <RestaurantMenu/>
           <Cart/>
        </BrowserRouter>
      </Provider>
    ))

    const accordianheader = screen.getByText("Thalis(3)");
    fireEvent.click(accordianheader)
    expect(screen.getAllByTestId("fooditems").length).toBe(3)
    const addbtn = screen.getAllByRole("button",{name:"Add"})
    fireEvent.click(addbtn[0])
    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("fooditems").length).toBe(4)
    


})
    