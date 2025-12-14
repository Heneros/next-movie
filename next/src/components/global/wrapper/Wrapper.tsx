import { ReactNode } from "react";

type WrapperProps = {
    children: ReactNode;
    className?: string
    id?: string
};


export default function Wrapper({ children, id, className }: WrapperProps) {
    return (
        <div
            id={id}
            className={`mx-5  xl:mx-auto  max-w-[1223px]   py-20  my-12 ${className}`}>
            {children}
        </div>
    );
}
