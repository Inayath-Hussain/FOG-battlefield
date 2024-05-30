import { PropsWithChildren } from "react";

interface Iprops {
    className?: string
}

const GridProvider: React.FC<PropsWithChildren<Iprops>> = ({ children, className }) => {
    return (
        <div className={`grid grid-cols-main ${className}`}>
            {children}
        </div>
    );
}

export default GridProvider;