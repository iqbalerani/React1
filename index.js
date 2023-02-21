// import { createRoot } from 'react-dom/client';

// const h1 = document.createElement('h1');

// // h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// const root = document.getElementById("root")
// // const root = createRoot(container);

// const navBar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// const page = 
//     <div>
//         {/* <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p> */}
//         {navBar}
//     </div>
// console.log(page)

// ReactDOM.render(page, root)

// const page = (
//     <div>
//         <img src="/images/React-icon.svg.png" alt="React-icon" width="40px"></img>
//         <h1>Fun Facts About React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Its maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// // document.getElementById("root").append(JSON.stringify(page))
// const root = document.getElementById("root")

// ReactDOM.render(page, root)

function Header() {
            return (
            <header>
                <nav className="nav">
                    <img src="/images/React-icon.svg.png" alt="React-icon" className="nav-logo"></img>
                    <ul className="nav-items">
                        <a href="Pricing" className="active">Pricing</a>
                        <a href="About">About</a>
                        <a href="Contact">Contact</a>
                    </ul>
                </nav>
            </header>
)}

function Footer() {
    return (
        <footer className="footer">
            <small className="small">2023 Iqbal Development. All rights reserved.</small>
        </footer>
)}

function Body() {
    return (
        <body>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Its maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </body>
)}

//Componenet in React
function TemporaryPage() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<TemporaryPage />, root)