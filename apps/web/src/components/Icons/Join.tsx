import * as React from "react";

export type JoinProps = React.SVGProps<SVGSVGElement> & Partial<{ plusclassname: string }>

function Join(props: JoinProps) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 47 50" {...props}>
            <path d="M.352 0h46v50h-46z" />
            <path
                d="M24.139 24.272h4.992c.256 0 .384.118.384.352v.704c0 .235-.128.352-.384.352h-4.992v5.056c0 .256-.128.384-.384.384h-.736c-.256 0-.384-.128-.384-.384V25.68h-4.992c-.256 0-.384-.117-.384-.352v-.704c0-.234.128-.352.384-.352h4.992v-5.056c0-.256.128-.384.384-.384h.736c.256 0 .384.128.384.384v5.056z"
                className={props.plusclassname}
            />
        </svg>
    );
}

const JoinIcon = React.memo(Join);
export default JoinIcon;
