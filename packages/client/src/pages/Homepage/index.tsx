import React, { FC, useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import Games from '../../containers/homepage/Games';

interface IProps { }

const Homepage: FC<IProps> = () => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        const isMobile = window.matchMedia("(max-width: 1279px)").matches;
        setIsMobile(isMobile)
    }
    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <MainLayout isMobile={isMobile}>
            <Games isMobile={isMobile} />
        </MainLayout>
    );
}

export { Homepage };