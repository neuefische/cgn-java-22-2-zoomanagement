import React from "react";
import useMe from "./useMe";
import Login from "./LogIn";

export default function Header() {
    const loginHook=useMe();

    return (
        <>

            <h1> Zoo-Management</h1>

            {
                !(loginHook.me==="anonymousUser") ?
                    (
                        <div>
                            <h1>Hallo {loginHook.me}</h1>
                            <button onClick={loginHook.logout}>logout</button>
                        </div>
                    )

                    : (
                     <h1>Kein User ist eingelogt</h1>

                    )

            }


        </>
    );
}
