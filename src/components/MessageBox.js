import React from 'react'

export default function MessageBox({messageTextPrimary, messageTextSecondary}) {
    return (
        <>

            <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
                <img className="h-12 w-12" src="/assets/images/warning.svg" alt="alert" />
                <div>
                    <div className="text-xl font-medium text-black">{messageTextPrimary}</div>
                    <p className="text-slate-500">{messageTextSecondary}</p>
                </div>
            </div>

        </>
    )
}
