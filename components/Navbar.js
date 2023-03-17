import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
        <Link href="/">Home</Link>
        <Link href="about/">About</Link>
        <Link href="/ninjas">Ninja Listing</Link>
      </div>
    </nav>
  );
}

export default Navbar;
