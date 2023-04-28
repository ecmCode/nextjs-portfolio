import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-between p-20">
            <h1>404</h1>
            <p>Page not found</p>
            <Link href="/">Home</Link>
            <br />
        </div>
    );
}
 
export default NotFound;