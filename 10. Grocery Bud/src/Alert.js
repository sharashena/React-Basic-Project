import React from 'react';

export default function Alert({ type, message, removeAlert }) {
    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 3000)
        return () => clearTimeout(timeOut);
    }, [])
    return (
        <p className={`alert alert-${type}`}>{message}</p>
    )
}
