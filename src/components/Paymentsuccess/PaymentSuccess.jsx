import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        let isSuccess = true;

        const timeoutId = setTimeout(() => {
            if (isSuccess) {
                navigate("/");
            }
        }, 3000);

        return () => {
            isSuccess = false;
            clearTimeout(timeoutId); 
        };
    }, [navigate]);

    return (
        <div className="payment-success flex justify-center items-center h-screen">
            <img
                src="https://cdn.dribbble.com/users/253392/screenshots/6906291/check.gif"
                alt="Success"
                className="w-1/2 h-1/2"
            />
        </div>
    );
}
