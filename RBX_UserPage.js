const CleanupConnectionsLabels = setInterval(() => {
    const FriendActionSection = document.querySelector(".profile-header-main .profile-header-buttons")
    const FriendsCountLabel = document.querySelector(".profile-header-main .profile-header-details .profile-header-social-count-label")
    const UserFriendShowcaseCountLabel = document.querySelector("#friends-carousel-container h2")
    const UserGroupShowcaseCommunityLabel = document.querySelector(".profile-tab-content .groups-showcase h2")

    function OnLoaded() {
        if (FriendActionSection.querySelector("#friend-button")) {
           FriendActionSection.querySelector("#friend-button > span").textContent = "Add Friend" //Add friend action
        }
        if (FriendActionSection.querySelector("#unfriend-button")) {
           FriendActionSection.querySelector("#unfriend-button > span").textContent = "Remove Friend" //unfriend action
        }

        UserGroupShowcaseCommunityLabel.textContent = "Groups" // Groups showcase on the user's profile
        FriendsCountLabel.textContent = "Friends" // XX Friends stat under the username

        UserFriendShowcaseCountLabel.childNodes[0].textContent = "Friends"
    }

    if ((FriendActionSection.querySelector("#friend-button") || FriendActionSection.querySelector("#unfriend-button")) && 
    FriendsCountLabel && 
    UserFriendShowcaseCountLabel &&
    UserGroupShowcaseCommunityLabel) {
        OnLoaded()
        clearInterval(CleanupConnectionsLabels)
    }
}, 100)