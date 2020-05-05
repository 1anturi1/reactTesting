import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(
            <Like/>,
            container
        );
    });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it("Defaults to be 0 likes", () => {
    const valor = container.querySelector("p");
    expect(valor.textContent).toBe("Likes: 0");
});

it("Likes increase when clicked on increment", () => {
    const boton = document.querySelector("#increment")
    const valor = container.querySelector("p");
    act(() => {
        boton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(valor.textContent).toBe("Likes: 1");
});

it("Likes increase when clicked on increment", () => { 
    const boton = document.querySelector("#decrement")
    const valor = container.querySelector("p");
    act(() => {
        boton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(valor.textContent).toBe("Likes: -1");
});