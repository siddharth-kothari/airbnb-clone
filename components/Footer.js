
function Footer() {
    return (
        <div className="grid items-center lg:justify-evenly grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 px-20 py-16 bg-gray-100 ">
            <div className=" space-y-3 text-sm text-gray-600">
                <h5 className="font-bold">Support</h5>
                <p>Help Centre</p>
                <p>Safety information</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Supporting people with disabilities</p>
                <p>Report a neighbourhood concern</p>
            </div>
         
            <div className=" space-y-3 text-sm text-gray-700">
                <h5 className="font-bold">Community</h5>
                <p>Airbnb.org: disaster relief housing</p>
                <p>Support Afghan refugees</p>
                <p>Combating discrimination</p>
                <p>Housing to Ukrainian refugees</p>
                <p></p>
            </div>
        
            <div className=" space-y-3 text-sm text-gray-700">
                <h5 className="font-bold">Hosting</h5>
                <p>Try hosting</p>
                <p>AirCover: protection for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>
            
            <div className=" space-y-3 text-sm text-gray-700">
                <h5 className="font-bold">About</h5>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Airbnb Luxe</p>
            </div>
        </div>
    )
}

export default Footer