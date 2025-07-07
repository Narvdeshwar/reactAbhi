const Footer = () => {
    return (
        <footer className="bg-blue-600  ">
            <div className="flex align-middle gap-90">
                <div >
                    <h2 className="p-2">Legal</h2>
                    <span className="p-2">
                        Terms & Conditions</span>
                    <span className="p-2">Cookies policy</span>
                    <span className="p-2">Privacy policy</span>
                </div>
                <div className="flex flex-wrap">
                    <h3 className="p-2 mt-2">Social Media</h3>
                    <img className="w-[30px] h-[30px] mt-2" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-linkedin.png" />
                    <img className="w-[30px] h-[30px] mt-2" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-instagram.png" />
                    <img className="w-[30px] h-[30px] mt-2" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-facebook.png" />
                    <img className="w-[30px] h-[30px] mt-2" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-pinterest.png" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;