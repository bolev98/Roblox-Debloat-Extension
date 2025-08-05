const CleanupMyConnectionsAreIn = setInterval(() => {

    function OnLoaded() {
        document.querySelector(".game-instances #rbx-friends-running-games h2").textContent = "Servers My Friends Are In"
    }

    if (document.querySelector(".game-instances #rbx-friends-running-games")) {
        OnLoaded()
        clearInterval(CleanupMyConnectionsAreIn)
    }
}, 100)