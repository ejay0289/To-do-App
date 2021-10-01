const Footer = () => {
    const today = new Date()
    return (
      <footer>

          <div className="copyright"> &copy; {today.getFullYear()}</div>
          <div className="developer">ejay</div>
         
      </footer>
    )
}

export default Footer
