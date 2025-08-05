// Top-bar debloat
const TopbarCleanupInterval = setInterval(() => {
    const topbarElements = document.querySelector(".rbx-header .container-fluid .rbx-navbar")
    const topbarLeftSideQuickActions = topbarElements.querySelectorAll(".nav > li")

    function OnLoaded() {

        topbarLeftSideQuickActions.forEach((element) => {
            element.style.display = "none"
        })
    }

    if (topbarElements != undefined) {
        OnLoaded()
        clearInterval(TopbarCleanupInterval)
    }
}, 100)

// Left side menu debloat +Rename
const LeftSideMenuCleanup = setInterval(() => {
    const leftNavBar = document.querySelector("#left-navigation-container")
    const NavBarQuickLinks = leftNavBar.querySelectorAll(".simplebar-wrapper .simplebar-content > ul li")

    const whitelisted_options = {
        "byREF": [
            "/home",
            "/profile",
            "/inbox",
            "/friends",
            "/my/avatar",
            "/inventory",
            "/my/communities",
        ],
        "byID": [

        ]
    }

    function OnLoaded() {
        NavBarQuickLinks.forEach(element => {
            { // Initial debloat
                let isWhitelisted = false
                let HREF_Page = null
                let ID = null
                if (element.querySelector("a")) {
                    HREF_Page = element.querySelector("a").href
                }
                else {
                    ID = element.querySelector("*").id
                }
                

                if (HREF_Page) {
                    whitelisted_options.byREF.forEach(element => {
                        if (HREF_Page.includes(element)) isWhitelisted = true; return
                    });
                }

                if (ID) {
                    whitelisted_options.byID.forEach(element => {
                        if (ID.includes(element)) isWhitelisted = true; return
                    });
                }

                if (!isWhitelisted){
                    element.style.display = "none"
                }
            }

            { // Rename Connections and Communities into Friends and Groups
                // Doing it through IDs and not HREFs path is hella unreliable cuz roblox may update names any time in future
                const navID = element.querySelector("*").id
                const navigationTitleElement = element.querySelector(".font-header-2")
                if (navID == "nav-friends") navigationTitleElement.textContent = "Friends"
                else if (navID == "nav-group") navigationTitleElement.textContent = "Groups"
            }
        });
    }

    if (leftNavBar != undefined) {
        OnLoaded()
        clearInterval(LeftSideMenuCleanup)
    }
}, 100)

const SearchSuggestionsRename = setInterval(() => {
    const navbarSuggestionsContainer = document.querySelector(".navbar-search .dropdown-menu")

     function OnLoaded() {
        const allSuggestions = navbarSuggestionsContainer.querySelectorAll("li")

        allSuggestions.forEach(element => {
            const ValidSuggestion = element.querySelector("a")
            if (ValidSuggestion) {
                const HREF = ValidSuggestion
                
                if (HREF.href.includes("/discover")) { // x in Experiences
                    HREF.querySelector(".navbar-list-option-suffix").textContent = "in Games"
                }
                else if (HREF.href.includes("/communities")) { // x in People
                    HREF.querySelector(".navbar-list-option-suffix").textContent = "in Groups"
                }
                else if (HREF.href.includes("/users")) { // x in People
                    HREF.querySelector(".navbar-list-option-suffix").textContent = "in Players"
                }
                else if (HREF.href.includes("/catalog")) { // x in Marketplace
                    HREF.querySelector(".navbar-list-option-suffix").textContent = "in Avatar Shop"
                }
                else if (HREF.href.includes("/create")) { // x in People
                    HREF.querySelector(".navbar-list-option-suffix").textContent = "in Developer Store"
                }
            }
        });
     }

    if (navbarSuggestionsContainer) {
        OnLoaded()
        // clearInterval(SearchSuggestionsRename)
    }
})