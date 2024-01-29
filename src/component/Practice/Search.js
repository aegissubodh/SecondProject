import React, { useState } from "react";
//import IconButton from "@material-ui/core/IconButton";
//import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
// import TextField from "@material-ui/core/TextField";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";

import './Practice.css';
//import './MOCK_DATA.json'
const Search = () => {

    let cars = [
        { "first_name": "Ange", "last_name": "Dosdill", "email": "adosdill0@virginia.edu", "gender": "Male" },
        { "first_name": "Jeffy", "last_name": "Golagley", "email": "jgolagley1@example.com", "gender": "Male" },
        { "first_name": "Abie", "last_name": "Sacaze", "email": "asacaze2@discovery.com", "gender": "Male" },
        { "first_name": "Dillon", "last_name": "McGrorty", "email": "dmcgrorty3@myspace.com", "gender": "Male" },
        { "first_name": "Edmund", "last_name": "Iles", "email": "eiles4@aboutads.info", "gender": "Male" },
        { "first_name": "Karlene", "last_name": "Jarret", "email": "kjarret5@wikipedia.org", "gender": "Female" },
        { "first_name": "Ranna", "last_name": "Esselin", "email": "resselin6@com.com", "gender": "Female" },
        { "first_name": "Alberto", "last_name": "Besque", "email": "abesque7@wikispaces.com", "gender": "Male" },
        { "first_name": "Chad", "last_name": "Rowbury", "email": "crowbury8@google.es", "gender": "Female" },
        { "first_name": "Kellina", "last_name": "Bosward", "email": "kbosward9@seesaa.net", "gender": "Female" },
        { "first_name": "Adara", "last_name": "McGuffog", "email": "amcguffoga@meetup.com", "gender": "Female" },
        { "first_name": "Loise", "last_name": "Ciccetti", "email": "lciccettib@tuttocitta.it", "gender": "Female" },
        { "first_name": "Chere", "last_name": "Tinham", "email": "ctinhamc@theatlantic.com", "gender": "Female" },
        { "first_name": "Ryon", "last_name": "Balhatchet", "email": "rbalhatchetd@wikia.com", "gender": "Male" },
        { "first_name": "Natassia", "last_name": "Frenzl", "email": "nfrenzle@npr.org", "gender": "Female" },
        { "first_name": "Eugenia", "last_name": "Server", "email": "eserverf@walmart.com", "gender": "Female" },
        { "first_name": "Morley", "last_name": "Tenby", "email": "mtenbyg@fda.gov", "gender": "Male" },
        { "first_name": "Cullin", "last_name": "Calvey", "email": "ccalveyh@biglobe.ne.jp", "gender": "Male" },
        { "first_name": "Tasia", "last_name": "Rapelli", "email": "trapellii@gizmodo.com", "gender": "Female" },
        { "first_name": "Floyd", "last_name": "Fairman", "email": "ffairmanj@goo.ne.jp", "gender": "Polygender" },
        { "first_name": "Mohandas", "last_name": "Lamming", "email": "mlammingk@domainmarket.com", "gender": "Male" },
        { "first_name": "Peter", "last_name": "Dreher", "email": "pdreherl@nationalgeographic.com", "gender": "Male" },
        { "first_name": "Kalvin", "last_name": "Cavie", "email": "kcaviem@liveinternet.ru", "gender": "Male" },
        { "first_name": "Kinnie", "last_name": "Turbill", "email": "kturbilln@vinaora.com", "gender": "Male" },
        { "first_name": "Taite", "last_name": "Hazley", "email": "thazleyo@opensource.org", "gender": "Male" },
        { "first_name": "Ginni", "last_name": "McGonigal", "email": "gmcgonigalp@weather.com", "gender": "Female" },
        { "first_name": "Ruperta", "last_name": "Mengo", "email": "rmengoq@weebly.com", "gender": "Female" },
        { "first_name": "Xerxes", "last_name": "Crookshanks", "email": "xcrookshanksr@geocities.jp", "gender": "Male" },
        { "first_name": "Freida", "last_name": "Windham", "email": "fwindhams@pbs.org", "gender": "Female" },
        { "first_name": "Hymie", "last_name": "Merrifield", "email": "hmerrifieldt@abc.net.au", "gender": "Male" },
        { "first_name": "Sella", "last_name": "Bradbury", "email": "sbradburyu@nytimes.com", "gender": "Female" },
        { "first_name": "Klement", "last_name": "Leveritt", "email": "kleverittv@ow.ly", "gender": "Male" },
        { "first_name": "Giraldo", "last_name": "Lachaize", "email": "glachaizew@furl.net", "gender": "Male" },
        { "first_name": "Robbert", "last_name": "Wardall", "email": "rwardallx@gnu.org", "gender": "Male" },
        { "first_name": "Gualterio", "last_name": "Shervil", "email": "gshervily@wp.com", "gender": "Male" },
        { "first_name": "Abigael", "last_name": "Jukubczak", "email": "ajukubczakz@friendfeed.com", "gender": "Female" },
        { "first_name": "Effie", "last_name": "Noyce", "email": "enoyce10@berkeley.edu", "gender": "Female" },
        { "first_name": "Agata", "last_name": "Westrey", "email": "awestrey11@vk.com", "gender": "Female" },
        { "first_name": "Falito", "last_name": "Nears", "email": "fnears12@independent.co.uk", "gender": "Male" },
        { "first_name": "Sammie", "last_name": "Rootes", "email": "srootes13@europa.eu", "gender": "Male" },
        { "first_name": "Virgie", "last_name": "Valintine", "email": "vvalintine14@samsung.com", "gender": "Male" },
        { "first_name": "Townie", "last_name": "Rosindill", "email": "trosindill15@weather.com", "gender": "Male" },
        { "first_name": "Matelda", "last_name": "Jephcote", "email": "mjephcote16@shareasale.com", "gender": "Female" },
        { "first_name": "Cara", "last_name": "Arlidge", "email": "carlidge17@craigslist.org", "gender": "Female" },
        { "first_name": "Brietta", "last_name": "Ofield", "email": "bofield18@vimeo.com", "gender": "Female" },
        { "first_name": "Kassia", "last_name": "Brennenstuhl", "email": "kbrennenstuhl19@reverbnation.com", "gender": "Female" },
        { "first_name": "Alis", "last_name": "Shellibeer", "email": "ashellibeer1a@cam.ac.uk", "gender": "Female" },
        { "first_name": "Gram", "last_name": "Legion", "email": "glegion1b@irs.gov", "gender": "Male" },
        { "first_name": "Cosimo", "last_name": "Habbin", "email": "chabbin1c@examiner.com", "gender": "Polygender" },
        { "first_name": "Ysabel", "last_name": "Coldbath", "email": "ycoldbath1d@zimbio.com", "gender": "Female" },
        { "first_name": "Red", "last_name": "Monday", "email": "rmonday1e@wp.com", "gender": "Male" },
        { "first_name": "Clifford", "last_name": "Drinan", "email": "cdrinan1f@macromedia.com", "gender": "Male" },
        { "first_name": "Julina", "last_name": "Ege", "email": "jege1g@tinypic.com", "gender": "Genderqueer" },
        { "first_name": "Gerome", "last_name": "Dibnah", "email": "gdibnah1h@narod.ru", "gender": "Genderqueer" },
        { "first_name": "Delinda", "last_name": "Pauley", "email": "dpauley1i@meetup.com", "gender": "Female" },
        { "first_name": "Yolanda", "last_name": "Cupitt", "email": "ycupitt1j@umn.edu", "gender": "Female" },
        { "first_name": "Riobard", "last_name": "Jellico", "email": "rjellico1k@opensource.org", "gender": "Male" },
        { "first_name": "Sigrid", "last_name": "Dameisele", "email": "sdameisele1l@livejournal.com", "gender": "Bigender" },
        { "first_name": "Minor", "last_name": "Della", "email": "mdella1m@usa.gov", "gender": "Male" },
        { "first_name": "Randy", "last_name": "West", "email": "rwest1n@tinyurl.com", "gender": "Female" },
        { "first_name": "Wandie", "last_name": "Kunisch", "email": "wkunisch1o@discuz.net", "gender": "Non-binary" },
        { "first_name": "Rhody", "last_name": "Sarsfield", "email": "rsarsfield1p@yelp.com", "gender": "Agender" },
        { "first_name": "Cindelyn", "last_name": "Derycot", "email": "cderycot1q@surveymonkey.com", "gender": "Female" },
        { "first_name": "Leighton", "last_name": "Keeton", "email": "lkeeton1r@w3.org", "gender": "Male" },
        { "first_name": "Kendall", "last_name": "Littlefield", "email": "klittlefield1s@mit.edu", "gender": "Male" },
        { "first_name": "Eda", "last_name": "Firth", "email": "efirth1t@time.com", "gender": "Female" },
        { "first_name": "Yvon", "last_name": "Cogdon", "email": "ycogdon1u@yelp.com", "gender": "Male" },
        { "first_name": "Norbert", "last_name": "Mignot", "email": "nmignot1v@cam.ac.uk", "gender": "Male" },
        { "first_name": "Wald", "last_name": "Tabourier", "email": "wtabourier1w@abc.net.au", "gender": "Male" },
        { "first_name": "Lian", "last_name": "McPhelimey", "email": "lmcphelimey1x@studiopress.com", "gender": "Non-binary" },
        { "first_name": "Gunner", "last_name": "Edmand", "email": "gedmand1y@bloglovin.com", "gender": "Male" },
        { "first_name": "Joell", "last_name": "Dormon", "email": "jdormon1z@nhs.uk", "gender": "Female" },
        { "first_name": "Geraldine", "last_name": "Scotts", "email": "gscotts20@tripadvisor.com", "gender": "Female" },
        { "first_name": "Andrey", "last_name": "Housley", "email": "ahousley21@examiner.com", "gender": "Male" },
        { "first_name": "Almeta", "last_name": "Jakes", "email": "ajakes22@blog.com", "gender": "Female" },
        { "first_name": "Heddi", "last_name": "Cuddon", "email": "hcuddon23@businesswire.com", "gender": "Female" },
        { "first_name": "Jeannie", "last_name": "Kennealy", "email": "jkennealy24@zdnet.com", "gender": "Agender" },
        { "first_name": "Maxim", "last_name": "Blaydon", "email": "mblaydon25@symantec.com", "gender": "Male" },
        { "first_name": "Tatiana", "last_name": "Eger", "email": "teger26@washington.edu", "gender": "Non-binary" },
        { "first_name": "Corrinne", "last_name": "Poat", "email": "cpoat27@nhs.uk", "gender": "Female" },
        { "first_name": "Johnette", "last_name": "Chew", "email": "jchew28@rambler.ru", "gender": "Female" },
        { "first_name": "Alyda", "last_name": "Berntssen", "email": "aberntssen29@furl.net", "gender": "Female" },
        { "first_name": "Lazarus", "last_name": "Bruhnicke", "email": "lbruhnicke2a@ucsd.edu", "gender": "Agender" },
        { "first_name": "Beltran", "last_name": "Haddrell", "email": "bhaddrell2b@elpais.com", "gender": "Male" },
        { "first_name": "Shea", "last_name": "Tink", "email": "stink2c@indiatimes.com", "gender": "Genderqueer" },
        { "first_name": "Amber", "last_name": "Heinritz", "email": "aheinritz2d@aboutads.info", "gender": "Female" },
        { "first_name": "Hermine", "last_name": "Vedishchev", "email": "hvedishchev2e@ft.com", "gender": "Female" },
        { "first_name": "Inglis", "last_name": "Mannie", "email": "imannie2f@de.vu", "gender": "Male" },
        { "first_name": "Rickie", "last_name": "Benedit", "email": "rbenedit2g@clickbank.net", "gender": "Male" },
        { "first_name": "Vladimir", "last_name": "Earie", "email": "vearie2h@hud.gov", "gender": "Male" },
        { "first_name": "Vonni", "last_name": "Eadon", "email": "veadon2i@google.ca", "gender": "Female" },
        { "first_name": "Ancell", "last_name": "Screach", "email": "ascreach2j@joomla.org", "gender": "Male" },
        { "first_name": "Bernice", "last_name": "Levermore", "email": "blevermore2k@hao123.com", "gender": "Female" },
        { "first_name": "Perla", "last_name": "Stott", "email": "pstott2l@ning.com", "gender": "Female" },
        { "first_name": "Curtis", "last_name": "Harker", "email": "charker2m@bandcamp.com", "gender": "Male" },
        { "first_name": "Zelda", "last_name": "Brooks", "email": "zbrooks2n@livejournal.com", "gender": "Female" },
        { "first_name": "Matthew", "last_name": "Abercrombie", "email": "mabercrombie2o@ycombinator.com", "gender": "Male" },
        { "first_name": "Indira", "last_name": "Garment", "email": "igarment2p@yale.edu", "gender": "Female" },
        { "first_name": "Hedvig", "last_name": "Glasheen", "email": "hglasheen2q@ustream.tv", "gender": "Female" },
        { "first_name": "Tristan", "last_name": "Vaneev", "email": "tvaneev2r@jimdo.com", "gender": "Male" }
    ]
    const [serchTerm, setSearchTerm] = useState("");
    return (
        <>  <div className="search-container mt-5">
            <input className=" justify-content-center search " type="text" placeholder="Search...." onChange={(e) => setSearchTerm(e.target.value)} />
            {cars.filter((val) => {
                if (serchTerm === "") {
                    return val
                } else if (val.first_name.toLocaleLowerCase().includes(serchTerm.toLocaleLowerCase())) {
                    return val;
                }

            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p className="text-center">{val.first_name}</p>
                    </div>
                )

            })
            }

        </div>
        </>
    )

}

export default Search;