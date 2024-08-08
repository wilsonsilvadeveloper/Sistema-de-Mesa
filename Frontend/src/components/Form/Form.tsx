import React from "react";

interface FormProps {
    method: string;
    submitHandler?: (event: React.FormEvent<HTMLFormElement>) => void | null;
    children: React.ReactNode;
}

export default function Form({method, submitHandler, children} : FormProps) {
    return (
        <div>
            <form method={method} onSubmit={submitHandler}>
                {children}
            </form>
        </div>
    )
}