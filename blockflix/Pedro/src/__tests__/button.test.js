import React from "react";
import { ButtonDetails } from "../components/button/button.style"

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

test("teste > Component > Button.styled.js", async () => {
    const { container, getByText} = render(<ButtonDetails>BUTTON1</ButtonDetails>)
    const button_test2 = render(<ButtonDetails w="32" h="32" center font="20">BUTTON2</ButtonDetails>)
    expect(getByText("BUTTON1")).toBeInTheDocument()
    expect(getByText("BUTTON2")).toBeInTheDocument()

})

