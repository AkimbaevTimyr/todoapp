import React from "react";

const Error = ({click, error}) => {
    return (
        <div
            class="flex items-center justify-between p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10 w-1/3 m-auto mt-3"
            role="alert"
        >
            <strong class="text-sm font-medium">{error}</strong>
            <button onClick={click} class="opacity-90" type="button">
                <span class="sr-only"> Close </span>
                <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Error