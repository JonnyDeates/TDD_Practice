import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import ImageCarousel from "./ImageCarousel";

describe("Image Carousel Component", ()=>{
    it("Carousel Loads", ()=>{
        render(<ImageCarousel/>)
        const image = screen.getByRole("img", {name: "Login"})
        expect(image).toBeVisible();
    })

});