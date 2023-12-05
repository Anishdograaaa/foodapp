import Card from "../Card";
import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom"
import MOCK_DATA from "./mocks/resDataMock.json"
import { WithPromotedLabel } from "../Card";



test("",()=>{
    render(<Card resData = {MOCK_DATA}/>)

    const name = screen.getByText("Domino's Pizza")
    expect(name).toBeInTheDocument()


})
// test("",()=>{
//     render(<WithPromotedLabel {...MOCK_DATA}/>)


//     const name = screen.getByText("open")
//     expect(name).toBeInTheDocument()


// })