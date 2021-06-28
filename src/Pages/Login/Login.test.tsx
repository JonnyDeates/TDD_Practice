import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import Login from "./Login";

describe("Login Page", ()=>{
    it("Login Loads", ()=>{
        render(<Login/>)
        const login = screen.getByRole("heading", {name: "Login"})
        expect(login).toBeVisible();
    })
    it("Login Render Inputs", ()=>{
        render(<Login/>)
        const usernameLabel = screen.getByLabelText("Username");
        const passwordLabel = screen.getByLabelText("Password");

        expect(usernameLabel).toBeVisible();
        expect(passwordLabel).toBeVisible();
        expect(usernameLabel).toHaveAttribute("placeholder", "Enter Username");
    })
    it("Login can enter Inputs", ()=> {
        render(<Login/>)
        const usernameLabel = screen.getByLabelText("Username");
        const passwordLabel = screen.getByLabelText("Password");

        fireEvent.change(usernameLabel, {target: {value: "Doge"}});
        fireEvent.change(passwordLabel, {target: {value: "tomato123!"}});

        expect(usernameLabel).toHaveValue("Doge");
        expect(passwordLabel).toHaveValue("tomato123!");
    })
    it("Modal is present", ()=> {
        // Assign
        render(<Login/>);
        const button = screen.getByRole("button", {name: "Submit"});

        // Action
        fireEvent.click(button);

        const header = screen.getByRole("heading", {name: 'Submitted!'});

        // Assert
        expect(header).toBeVisible();
    })
    it("Close Modal", () => {
        // Assign
        render(<Login/>);
        const button = screen.getByRole("button", {name: "Submit"});

        // Action
        fireEvent.click(button);

        const exitButton = screen.getByRole("button", {name: "X"});

        fireEvent.click(exitButton);

        const header = screen.queryByRole("heading", {name: 'Submitted!'});

        // Assert
        expect(header).not.toBeInTheDocument();
    })
})