import React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

/* function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
} */

class App extends React.Component {
    render() {
        const date = new Date();
        return (
            <div>
                <Header />
                <h2>{date.toLocaleString()}</h2>
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App