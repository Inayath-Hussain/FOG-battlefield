import { PropsWithChildren } from "react";

interface Iprops {
    className?: string
}

const BorderProvider: React.FC<PropsWithChildren<Iprops>> = ({ children, className }) => {
    return (
        <div className={`justify-self-stretch self-stretch border-0 border-r-2 border-r-main-border-color ${className}`}>
            {children}
        </div>
    );
}

export default BorderProvider;