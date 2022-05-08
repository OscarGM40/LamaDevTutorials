import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Login from "./Login";

jest.mock("axios",() => ({
  __esModule:true,
  default:{
    get: () => ({
      data:{id:1,name:"John"}
    })
  }
}))

describe("Pruebas en Login Component", () => {
  beforeEach(() => {
    render(<Login />);
  });

  test("username input should be rendered", () => {
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    expect(userInputEl).toBeInTheDocument();
  })

  test("password input should be rendered", () => {
    const passInputEl = screen.getByPlaceholderText(/Password/i);
    expect(passInputEl).toBeInTheDocument();
  })

  test("login button should be rendered", () => {
    const loginButtonEl = screen.getByRole("button", { name: /login/i });
    expect(loginButtonEl).toBeInTheDocument();
  });

  test("login button should be disabled", () => {
    const loginButtonEl = screen.getByRole("button", { name: /login/i });
    expect(loginButtonEl).toBeDisabled();
  });
  
  test("loading should not be rendered", () => {
    const loginButtonEl = screen.getByRole("button", { name: /login/i });
    expect(loginButtonEl).not.toHaveTextContent(/please wait/i);
  });
  
  test('username input should be empty', () => {
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    expect(userInputEl.value).toBe('');
  })

  test('password input should be empty', () => {
    const passInputEl = screen.getByPlaceholderText(/Password/i);
    expect(passInputEl.value).toBe('');
  })

  test("error message should be invisible", () => {
    const errorMessage = screen.getByTestId("error");
    expect(errorMessage).not.toBeVisible();
  })

  test('username input should change', () => {
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    // userInputEl.value = 'admin';
    // userInputEl.dispatchEvent(new Event('change'));
    fireEvent.change(userInputEl,{target:{value:'admin'}})
    expect(userInputEl.value).toBe('admin');
  })

  test('password input should change', () => {
    const passInputEl = screen.getByPlaceholderText(/Password/i);
    passInputEl.value = 'abcABC123'
    passInputEl.dispatchEvent(new Event('change'));
    expect(passInputEl.value).toBe('abcABC123');
  })

  test('button should not be disabled when inputs exist', () => {
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    fireEvent.change(userInputEl, { target: { value: "admin" } });
    const passwordInputEl = screen.getByPlaceholderText(/Password/i)
    fireEvent.change(passwordInputEl, { target: { value: "123456"}})
    const loginButtonEl = screen.getByRole("button", { name: /login/i }
    );
    expect(loginButtonEl).not.toBeDisabled();
  })

  test('loading should not be rendered after fetching', async () => {
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    const passwordInputEl = screen.getByPlaceholderText(/Password/i)
    const loginButtonEl = screen.getByRole("button", { name: /login/i });
    
    const testValue = "test"

    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue}})
    fireEvent.click(loginButtonEl)
    await waitFor(() =>expect(loginButtonEl).not.toHaveTextContent(/please wait/i));
  })
  
})
