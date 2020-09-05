import React, { Fragment,useState,useEffect,useCallback } from 'react';
import {Form} from 'reactstrap'
import {Grid} from 'react-feather'
import {MENUITEMS} from '../sidebar/menu'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Leftbar = (props) => {

    const[sidebartoogle,setSidebartoogle] = useState(true)
    // eslint-disable-next-line
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [searchValue, setsearchValue] = useState('');
    // eslint-disable-next-line
    const [searchResult, setSearchResult] = useState(false);
    // eslint-disable-next-line
    const [searchResultEmpty, setSearchResultEmpty] = useState(false);
    const configDB = useSelector(content => content.Customizer.customizer);
    const [searchresponsive,setSearchresponsive] = useState(false)
    
    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
          setsearchValue('')
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
      }, [escFunction]);

      const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix()
        const items = [];
        setsearchValue(keyword)
        mainmenu.filter(menuItems => {
            if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            if (!menuItems.children) return false
            menuItems.children.filter(subItems => {
                if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon
                    items.push(subItems);
                }
                if (!subItems.children) return false
                subItems.children.filter(suSubItems => {
                    if (suSubItems.title.toLowerCase().includes(keyword)) {
                        suSubItems.icon = menuItems.icon
                        items.push(suSubItems);
                    }
                    return suSubItems
                })
                return subItems
            })
            checkSearchResultEmpty(items)
            setsearchValue(items);
            return menuItems
        });
    }
  
    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchResultEmpty(true);
            document.querySelector(".empty-menu").classList.add('is-open');
        } else {
            setSearchResultEmpty(false);
            document.querySelector(".empty-menu").classList.remove('is-open');
        }
    }
  
    const addFix = () => {
        setSearchResult(true);
        document.querySelector(".Typeahead-menu").classList.add('is-open');
    }
  
    const removeFix = () => { 
        setSearchResult(false)
        setsearchValue('')
        document.querySelector(".Typeahead-menu").classList.remove('is-open');
    }

    const openCloseSidebar = (toggle) => {
        if (toggle){ 
          setSidebartoogle(!toggle);
          document.querySelector(".page-main-header").className = "page-main-header close_icon";
          document.querySelector(".main-nav").className = "main-nav close_icon " + configDB.settings.sidebar_background_setting;
        }else {
          setSidebartoogle(!toggle);
          document.querySelector(".page-main-header").className = "page-main-header";
          document.querySelector(".main-nav").className = "main-nav " + configDB.settings.sidebar_background_setting;
        }
      };

    const SeacrhResposive = (searchresponsive) => {
        if(searchresponsive){
            setSearchresponsive(!searchresponsive)
            document.querySelector(".form-control-plaintext").classList.add("open");
        }else{
            setSearchresponsive(!searchresponsive)
            document.querySelector(".form-control-plaintext").classList.remove("open");
        }
    }

    return (
        <Fragment>
        <div className="main-header-left">
          <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src={require("../../assets/images/logo/logo.png")} alt=""/></a></div>
        </div>
        <div className="toggle-sidebar" onClick={() => openCloseSidebar(sidebartoogle)}><Grid className="status_toggle middle" id="sidebar-toggle" /></div>
        <div className="left-menu-header col">
          <ul>
            <li>
              <Form className="form-inline search-form">
                <div className="search-bg"><i className="fa fa-search"></i></div>
                <input 
                    type="search"
                    id="search"
                    className="form-control-plaintext" 
                    placeholder="Search here....."
                    defaultValue={searchValue}
                    onChange={(e) => handleSearchKeyword(e.target.value)}
                    />
                    <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                        {searchValue ?
                            searchValue.map((data, index) => {
                                return (
                                    <div className="ProfileCard u-cf" key={index}>
                                        <div className="ProfileCard-avatar">
                                            <data.icon />
                                        </div>
                                        <div className="ProfileCard-details">
                                            <div className="ProfileCard-realName">
                                                <Link 
                                                    to={data.path} 
                                                    className="realname" 
                                                    onClick={removeFix}
                                                >
                                                    {data.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ''
                        }
                    </div>
                    <div className="Typeahead-menu empty-menu">
                        <div className="tt-dataset tt-dataset-0">
                            <div className="EmptyMessage">
                                Opps!! There are no result found.
                            </div>
                        </div>
                    </div>
              </Form>
              <span className="d-sm-none mobile-search search-bg" onClick={() => SeacrhResposive(searchresponsive)}><i className="fa fa-search"></i></span>
            </li>
          </ul>
        </div>
        </Fragment>
    );
}

export default Leftbar;