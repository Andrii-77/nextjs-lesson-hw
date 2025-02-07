import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CreateCarsLayout metadata'
}
type Props = { children: React.ReactNode }
const CreateCarsLayout= ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CreateCarsLayout;