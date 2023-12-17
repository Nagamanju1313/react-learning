import "./footer.style.css"

const FooterSection = ({author}) =>{
    return(
        <div className="Footer">
            <p>Developed By {author}</p>
        </div>
    )
}

export default FooterSection;