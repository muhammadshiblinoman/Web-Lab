import styles from './Button.module.css'

function Button() {
    const styles = {
        padding: "8px 10px",
        backgroundColor: "#5c7d5a",
        color: "#aa0000",
        fontWeight: "700",
        fontSize: "25px",
        margin: "100px 200px",
        borderRadius: "8px",
        cursor: "pointer",
    }
    return(
        <button style = {styles}>Click Me</button>
    );
};

export default Button;