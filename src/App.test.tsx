import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import DogeButton from "./DogeButton";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";


describe('App.tsx', () => {
    it('Page has a header with Much Wow', () => {
        // Assign
        renderApp();
        const header = screen.getByRole('heading', {name: "Much Wow!"});
        // Action
        // Assert
        expect(header).toBeVisible();
    });

    it("Routing Works", () => {
        const {history} = renderApp();
        // Assign
        const aboutLink = screen.getByRole("link", {name: "About"});


        // Action
        fireEvent.click(aboutLink)

        const header = screen.getByRole('heading', {name: "Shinu Inu Dets"});

        //Assert
        expect(header).toBeVisible();
        expect(history.location.pathname).toEqual('/about');
    });

    it("Routing Between About -> Home -> About Works", () => {
        const {history} = renderApp();
        // Assign
        const aboutLink = screen.getByRole("link", {name: "About"});
        const homeLink = screen.getByRole("link", {name: "Home"});


        // Action
        fireEvent.click(aboutLink);
        expect(history.location.pathname).toEqual('/about'); // Assert

        fireEvent.click(homeLink); // Action
        expect(history.location.pathname).toEqual('/'); // Assert

        fireEvent.click(aboutLink); // Action
        expect(history.location.pathname).toEqual('/about'); // Assert

        //Assert
        expect(history.entries).toHaveLength(4);
    });
    const renderApp = () => {
        const history = createMemoryHistory();
        return {
          ...render(<Router history={history}><App/></Router>),
          history
        }
    }


    // it("Button get Doge Coin", ()=> {
    //   render(<DogeButton/>);
    //   expect(screen.getByRole("button", {name: "Collect Doge"})).toBeVisible();
    //   expect(screen.getByText("Doges")).toBeVisible();
    //   expect(screen.getByText("0")).toBeVisible();
    //
    // })
    // it("Button click Doge Counter Up", ()=> {
    //   render(<DogeButton/>);
    //   userEvent.click(screen.getByRole("button"));
    //   expect(screen.getByText("1")).toBeVisible();
    // })
    // it("Button click Doge Counter Up to 50", ()=> {
    //   render(<DogeButton/>);
    //   for (let i = 0; i<50; i++)
    //     userEvent.click(screen.getByRole("button"));
    //   expect(screen.getByText("50")).toBeVisible();
    // })
});