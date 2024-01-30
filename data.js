const features = [
    
    {
        title: "Ship and Air Freight",
        image: "/images/container-ship.webp",
        alt: "cargo ship on the sea",
        text: "Logistics solutions that have a global reach. You can rely on us to provide a tailored service from experts. With us, you shipment always arrives.",
    },
    {
        title: "To Final Destination",
        image: "/images/delivery.webp",
        alt: "Delivery man handling boxes",
        text: "Once your shipment arrives we can get it to its final destination. We provide insured vehicles that transport all across Nigeria",
    },
    {
        title: "Shipment Updates",
        image: "/images/information.webp",
        alt: "A couple at a computer",
        text: "Do you want updates on your shipment? Our goal is to keep you connected. Get detailed reports whenever you want it",
    },
    {
        title: "Warehousing Solutions",
        image: "/images/warehouse.webp",
        alt: "warehouse full of merchandise",
        text: "We take care of that too. Warehouse facilities available when needed so as to keep your shipment secure.",
    },
    {
    title: "Quality Assurance",
    image: "/images/quality.webp",
    alt: "A man sign checking documents",
        text: "Quality is our number one priority. We ensure that your property is safe from start of journey to destination",
    },
]

const about = [
    {
        title: "Introduction",
        image:"/images/wharf.webp",
        text: ["Marine Express Nigera Limited (MENL), incorporated on the 4th of May 1988 with RC number 112669 fully commenced business in Nigeria in June 1988 at 4 Ogunlana Drive, Surulere hitherto its registered office address."],
    },
    {
        title: "Mission Statement",
        image:"/images/marine-express-truck.webp",
        text: [`Marine Express sets the pace in the clearing and forwarding agency sector by making general importation and exportation an easy and comfortable venture. 
        We not only ensure a safe and timely delivery of merchandise, we get your business where it needs to be in terms of our service delivery.
        We secure cost effectiveness for you and your business without compromising quality of service. Bringing you the needed rest of mind.`],
    },
]

const services =[
    {
        id: "maritime",
        title: "Maritime Clearance",
        image: "/images/wharf.webp",
        icon: "/images/ship.png",
        text: "Specialised services we provide as a customs agent to our clients",
        list: [
            "Open cargo / groupage containers",
            "Containerized cargo",
            "Roll on Roll off automobile clearance",
            "New project cargo clearance",
            "Bulk cargo clearance: Monitoring of such vessels from point of departure to any Nigerian port",
        ]

    },
    {
        id: "air",
        title: "Air Freight Clearance",
        image: "/images/cargo-plane.webp",
        icon: "/images/airplane.png",
        text: "Faster than than sea freight which can take several weeks.",
        list: [
            "Air freight is the faster way to import goods into Nigeria",
            "We work with all airlines carrying cargo by air into any designated cargo shed in Nigeria",
            "Arrival and departure times are very reliable",
            "Cargo can be sent almost anywhere"
        ]

    },
    {
        id: "other",
        title: "Other Activities",
        image: "/images/trucks.webp",
        icon: "/images/truck.png",
        text: "Point to point delivery of goods. Guaranteed to serve your needs.",
        list: [
            "Provision of warehouse services to our clients.",
            "Cargo survey and superintendence",
            "Specialized haulage services for whenever the need arises",
        ]

    },
    // {
    //     id: "ro-ro",
    //     title: "Ro-Ro",
    //     image: "/images/ro-ro.webp",
    //     icon: "/images/suv-car.png",
    //     text: "Want to ship your vehicle? We handle vehicle processing to destination.",
    //     list: [
    //         "All transportation is coverd by In-transit insurance. This protects your merchandise from origin to destination.",
    //         "Provision of adequate warehousing if required",
    //         "Effective haulage system for all cargoes both containarized and palleticed up to the carrying  shipping company terminal",
    //     ]

    // },
]

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    // {
    //     name: "Our Business",
    //     path: "/about"
    // },
    {
        name: "Contact us",
        path: "/contact"
    },
]

const footerLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Our Business",
        path: "/about"
    },
    {
        name: "Contact us",
        path: "/contact"
    },
    {
        name: "Privacy Policy",
        path: "/privacy"
    },
    {
        name: "Terms & Conditions",
        path: "/terms"
    },
]

const testimonials = [
    {
        image: "",
        text: `It is great working with them. They are better than the previous company I shipped with. At Marine Express were very on point with their service delivery. I will surely work with then again.`,
        info: "Haruna A."
    },
    {
        image: "",
        text: "I will recommend Marine Express to all my friends. Very easy to work with. It made sending my packages overseas very easy.",
        info: "Cynthia"
    },
    {
        image: "",
        text: "Great choice using them. My shipment got to me without any problems. It was not as expensive and I did not suffer any headaches like I used to.",
        info: "Ebuka N."
    },
    {
        image: "",
        text: "I never have time to worry logistics. A friend of mine told me about marine express almost 2 years ago. My business has grown more than thanks to the efforts of their team. Thank you so much.",
        info: "Bolade"
    },

]

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"]

export { features, links, footerLinks, testimonials, about, services, days }