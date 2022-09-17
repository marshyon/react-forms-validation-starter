import MessageBox from "../components/MessageBox";

export default function SimpleComponent() {
    return (
        <>
            <div className="container mx-auto bg-blue-50 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-primary font-bold mb-5">
                    Simple Component
                </p>
                <p className="text-secondary text-lg">
                    React React Router Dom V6 and Tailwind CSS in action
                </p>
            </div>
            <div className="container mx-auto shadow-sm border p-8 m-10">
                <p className="text-center text-2xl text-secondary">Message Box !</p>
                <MessageBox 
                    messageTextPrimary={'Danger !'}
                    messageTextSecondary={'Will Robinson'}
                />
            </div>
        </>
    );
}