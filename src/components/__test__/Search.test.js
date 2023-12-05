import { fireEvent, render,screen,act } from "@testing-library/react";
import BodyComponent from "../BodyComponent";
import MOCK_DATA from "./mocks/searchmockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("",async ()=>{
    await act(async()=>render(
        <BrowserRouter>
            <BodyComponent/>
        </BrowserRouter>
    ))
    const button1 = screen.getByRole("button",{name:"val"})
    const searchinput = screen.getByTestId("searchinput")
    fireEvent.change(searchinput,{target:{value:"burger"}})
    fireEvent.click(button1)
    const rescard = screen.getAllByTestId("rescard")
    expect(rescard.length).toBe(3)


    
})