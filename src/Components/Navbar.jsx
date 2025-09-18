import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar(props) {
    let [search, setSearch] = useState("")
    let [searchParams, setSearchParams] = useSearchParams()
    let navigate=useNavigate()

    function postSearch(e) {
        e.preventDefault()
        navigate(`/?q=${search}&language=${searchParams.get("language")??"hi"}`)  
    }
    function changeQ(q) {
      navigate(`/?q=${q}&language=${searchParams.get("language")??"hi"}`)  
    }
    function changeLanguage(language){
      navigate(`/?=${searchParams.get("q")??"All"}&language=${language}`)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                <div className="container-fluid">
                    <button className="nav-link navbar-brand text-light" onClick={()=>changeQ("All")} >MyNewsApp</button>
                    <button className="navbar-toggler border-light border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bi bi-list text-light'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className='nav-item'><button className='nav-link text-light' onClick={()=>changeQ("All")} >All</button></li>
                            <li className='nav-item'><button className='nav-link text-light' onClick={()=>changeQ("Cricket")} >Cricket</button></li>
                            <li className='nav-item'><button className='nav-link text-light' onClick={()=>changeQ("Sports")} >Sports</button></li>
                            <li className='nav-item'><button className='nav-link text-light' onClick={()=>changeQ("Science")} >Science</button></li>
                            <li className='nav-item'><button className='nav-link text-light' onClick={()=>changeQ("Politics")} >Politics</button></li>
                            <li className='nav-item'><button className='nav-link text-light' onClick={()=>changeQ("Crime")} >Crime</button></li>

                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </button>
                                <ul className="dropdown-menu bg-body-secondary">
                                    <li><button className="dropdown-item" onClick={()=>changeQ("Education")} >Education</button></li>
                                    <li><button className="dropdown-item" onClick={()=>changeQ("World")} >World</button></li>
                                    <li><button className="dropdown-item" onClick={()=>changeQ("India")} >India</button></li>
                                    <li><button className="dropdown-item" onClick={()=>changeQ("Economics")} >Economics</button></li>
                                    <li><button className="dropdown-item" onClick={()=>changeQ("Jokes")}>Jokes</button></li>
                                    <li><button className="dropdown-item" onClick={()=>changeQ("Entertainment")} >Entertainment</button></li>
                                    <li><button className="dropdown-item" onClick={()=>changeQ("Technology")} >Technology</button></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </button>
                                <ul className="dropdown-menu bg-body-secondary">
                                    <li><button onClick={()=>changeLanguage("hi")} className="dropdown-item"  >Hindi</button></li>
                                    <li><button onClick={()=>changeLanguage("en")} className="dropdown-item"  >English</button></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
                            <input className="form-control me-2" type="search" name='search' onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

