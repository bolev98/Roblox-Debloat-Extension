// Home page "Sponsored" and "Recommended" tabs removal
const HomePageTabsCleanupInterval = setInterval(() => {
    const HomePageWidgetRows = document.getElementsByClassName("game-home-page-container")[0].firstElementChild;
    const recommendationTabs = HomePageWidgetRows.querySelectorAll('[data-testid="home-page-game-grid"]')
    recommendationTabs.forEach(tab => tab.remove()) // Removes all the "recommended" tabs, not the "Sponsored" though
    
    if (HomePageWidgetRows.childNodes.length == 0) return
    HomePageWidgetRows.childNodes[2].remove() // Now all tabs except "Recently played" and "Favorites" are hidden (they're completely demolished and sent into the void)

    if (recommendationTabs.length != 0) clearInterval(HomePageTabsCleanupInterval)
}, 100)

// Rename "Connections" back into "Friends" on the home page
const HomePageFriendsCleanupInterval = setInterval(() => {

    function OnLoaded() {
        document.querySelector(".friend-carousel-container h2").childNodes[0].textContent = "Friends"
        document.querySelector(".friend-carousel-container .friends-carousel-tile .friends-carousel-display-name").textContent = "Add Friends"
    }

    if (document.querySelector(".friend-carousel-container h2")) {
        OnLoaded()
        clearInterval(HomePageFriendsCleanupInterval)
    }
}, 100)