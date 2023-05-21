import classes from "./App.module.css";
import ChessBoard from "./components/ChessBoard/ChessBoard";

function App() {
    return (<div className={classes.app}>
        <ChessBoard/>
    </div>);
}

export default App;
