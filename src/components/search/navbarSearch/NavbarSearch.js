import React, {useEffect, useState} from "react"
import NonProfitsData from "../NonProfitsData";
import {Link} from "react-router-dom";
import "./navbarSearch.css";

export function NavbarSearch(){
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    function handleSearch(value) {
        setSearch(value)
    }
    useEffect(() => {
        setResults([])
        NonProfitsData.map(nonprofit => {
            if (nonprofit.name.toLowerCase().includes(search.toLowerCase())){
                setResults(prevState => [...prevState, nonprofit])
            }
        })
    }, [search])

    return(
        <div className={"search-navbar"}>
            <div className={"searchcontainer"}>
                <input className={"input-navbar"} value={search} onChange={(e) => handleSearch(e.target.value)} placeholder={"Search..."}/>
            </div>
             {(search !== "") &&
                <div className={"results-search"}>
                    {(results.length === 0) &&
                        <b>No results...</b>
                    }
                    {(results.length !== 0) &&
                        <>
                            <b>Nonprofits:</b>
                            <ul>
                                {results.map(nonprofit => (
                                    <li style={{textStyle: "none "}}><Link to={"/non-profit/"+ nonprofit.name.replace(/ /g,'')}>{nonprofit.name}</Link></li>
                                ))}
                            </ul>

                            </>
                    }
                </div>

                }
        </div>
    )
}