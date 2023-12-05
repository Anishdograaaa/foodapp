import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
test("",()=>{
   render(<Contact/>)

   const heading = screen.getByRole("heading");

   expect(heading).toBeInTheDocument()
})
test("",()=>{
   render(<Contact/>)

   const heading = screen.getByText("submit");

   expect(heading).toBeInTheDocument()
})
test("",()=>{
   render(<Contact/>)

   const heading = screen.getByPlaceholderText("name");

   expect(heading).toBeInTheDocument()
})
test("",()=>{
   render(<Contact/>)

   const heading = screen.getAllByRole("textbox");

   expect(heading.length).toBe(2)
})