
import { useState, useMemo } from "react";

function UseMemo() {

    const expensiveCal = () => {

        console.log("expensive cal running");

        let temp = 0;

        for (let i = 0; i < 10; i++) {
            temp = temp + i;
        }
        return temp;
    }

    const data = useMemo(() => {
        let payload = expensiveCal();
        return payload;
    }, []);

    return (
        <>
            {
                data
            }{
                data
            }{
                data
            }{
                data
            }{
                data
            }{
                data
            }
        </>
    );
}

export default UseMemo;