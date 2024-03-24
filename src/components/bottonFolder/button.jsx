function Button(props){
    console.log(props);
    return(
        <section>
            <div className="button">
                <button style={{
                    padding : " 10px 15px",
                    border : "none",
                    fontSize : "1rem",
                    color : "white",
                    borderRadius : props.borderRadius,
                    backgroundColor : props.bgColor
                }}>{props.children}</button>
            </div>
        </section>
    );
}

export default Button;