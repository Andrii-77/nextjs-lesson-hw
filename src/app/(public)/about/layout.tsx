import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'AboutLayout metadata',
    description: 'About Layout Description'
}
type Props = { children: React.ReactNode }
const AboutLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            About Layout
            {children}
            <hr/>
        </div>
    );
};

export default AboutLayout;