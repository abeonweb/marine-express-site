const features = [
    
    {
        title: "Ship and Air Freight Solutions",
        image: "../images/cargo-plane.webp",
        alt: "",
        text: "We offer solutions for both shipping and air frieght. Take your pick. We have you covered.",
    },
    {
        title: "Complete Transportation Offerings",
        image: "../images/delivery.webp",
        alt: "",
        text: "Once your shipment arrives we can get it to its final destination. We provide insured vehicles that tranport all across Nigeria",
    },
    {
        title: "Warehousing Solutions",
        image: "../images/warehouse.webp",
        alt: "",
        text: "We take care of that too. Warehouse facilities available when needed so as to keep your shipment secure.",
    },
    {
        title: "Detailed information",
        image: "../images/ships.webp",
        alt: "",
        text: "Do you want updates on your shipment? Our goal is to keep you connected. Get detailed reports whenever you want it",
    },
    {
    title: "Quality Assurance",
    image: "../images/quality.webp",
    alt: "",
        text: "Quality is our number one priority. We ensure that your property is safe from start of journey to destination",
    },
]

const about = [
    {
        title: "Introduction",
        image:"../images/wharf.webp",
        text: ["Marine Express Nigera Limited (MENL), incorporated on the 4th of May 1988 with RC number 112669 fully commenced business in Nigeria in June 1988 at 4 Ogunlana Drive, Surulere hitherto its registered office address."],
    },
    {
        title: "Mission Statement",
        image:"../images/marine-express-truck.webp",
        text: [`MENL sets the pace in the clearing and forwarding agency sector by making general importation and exportation an easy and comfortable venture. 
        We not only ensure a safe and timely delivery of merchandise, we get your business where it needs to be in terms of our service delivery.
        We secure cost effectiveness for you and your business without compromising quality of service. Bringing you the needed rest of mind.`],
    },
]

const services =[
    {
        id: "clearing",
        title: "Clearing",
        image: "../images/wharf.webp",
        text: "Specialised services we provide as a customs agent to our clients",
        list: [
            "Provision of a suitable environment conducive to clear your cargo in order to avoid payment of demurrage",
            "Adequate information about ship movement with their cargo. That is name of ship agents, arrival and berthing dates of the ship, and the port of discharge",
            "submission and completion of all necessary shipping / NPA documentation",
            "Processing of all customs documents to the final relaeasing stage",
            "Supervision of discharging and loading operations", ,
            "Supervision and sighting of goods discharged from the carrying vessel to arrange for private  protection so as to prevent pilfering",
            "Delivery of consignment to the importers premises or warehouse", ,
            "Providing information about duty payments through any of the designated banks to the importers, in order to avoid unnecessary delays",
            "Submission of all relevant document to the importe for remittance purposes throught he bank  after the goods have been cleared",
            "Informing the importer where necessary, through ddetailed report of the consignment condition as at the time of discharge",
        ]

    },
    {
        id: "forwarding",
        title: "Forwarding",
        image: "../images/cargo-plane.webp",
        text: "Our services as forwarders is complete. Full logistic support",
        list: [
            "Liase effectively with the exporters on how to register with the Nigerian Export Promotion Council",

            "Process of export Bill of Entry with customs",

            "Booking of space with the shipping company up to final destination",

            "Securing of competitive freight rates",

            "Provision of adequate warehousing if required",

            "Processing of export documents with the relevant port operators i.e Nigeria Ports Authority,  National Maritime Authority, Shipping Companies",

            " Securing all export clearances form the approriate Govenment agencies such as the National Drug Law Enforcement Agency, State Security Services, Ministry of Agriculture etc",

            " Collection of Bill of Lading and other vital documents from shipping companies for immediate deleivery to the exporter",

            " Effective haulage syatem for all cargoes both containarized and palleticed up to the carrying  shipping company terminal",
        ]

    },
    {
        id: "haulage",
        title: "Haulage",
        image: "../images/trucks.webp",
        text: "Point to point delivery of goods",
        list: [
            "Liase effectively with the exporters on how to register with the Nigerian Export Promotion Council",

            "Process of export Bill of Entry with customs",

            "Booking of space with the shipping company up to final destination",

            "Securing of competitive freight rates",

            "Provision of adequate warehousing if required",

            "Processing of export documents with the relevant port operators i.e Nigeria Ports Authority,  National Maritime Authority, Shipping Companies",

            " Securing all export clearances form the approriate Govenment agencies such as the National Drug Law Enforcement Agency, State Security Services, Ministry of Agriculture etc",

            " Collection of Bill of Lading and other vital documents from shipping companies for immediate deleivery to the exporter",

            " Effective haulage syatem for all cargoes both containarized and palleticed up to the carrying  shipping company terminal",
        ]

    },
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
    {
        name: "Our Business",
        path: "/about"
    },
    {
        name: "Contact us",
        path: "/contact"
    },
]

const testimonials = [
    {
        image: "",
        text: `From a business standpoint, it was excellent woking with them. The previous company didn't do a good job and we had to pay extra fees on our consignment. With MENL no such issues occured. They were very on point with their service delivery. I will surely work with then again.`,
        info: "Haruna A."
    },
    {
        image: "",
        text: `I will recommend Marine Express to all my friends. Very easy to work with. It made sending my packages overseas very easy.`,
        info: "Cynthia J."
    },
    {
        image: "",
        text: `I made a great choice when I decided to use them. My goods got to me without any problems. It was expensive and I did not suffer any headaches doing it by myself like before.`,
        info: "Ebuka N."
    },
    {
        image: "",
        text: `I often had difficulties getting my goods into the country. This was mainly because 
        I just didn't have time to take care of the logistics by my self. A friend of mine told me about 
        Marine Express so I gave them a try. That was 2 years ago. My business has since grown more than double thanks to the effiency and 
        thoughtfulness from Marine Express. Thank you so much.`,
        info: "Kenneth O."
    },

]

export { features, links, testimonials, about, services }