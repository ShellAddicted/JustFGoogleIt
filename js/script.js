window.onload = () => {
    const secondsValue = document.getElementById("searchSeconds");
    const searchQuery = document.getElementById("SearchQuery");
    let secondsLeft = 5;
    let counterHandle = 0;

    searchQuery.value = window.location.pathname.slice(1).replace("+", " ");
    if (searchQuery.value != "") {
        let classlist = document.getElementById("searchCounter").classList;
        classlist.remove("d-none");
        classlist.add("d-inline");
        secondsValue.innerText = parseInt(secondsLeft);
        counterHandle = setInterval(() => {
            secondsLeft--;
            secondsValue.innerText = parseInt(secondsLeft);
            if (secondsLeft <= 0) {
                clearInterval(counterHandle);
                document.getElementById("searchBtn").click();
            }
        }, 1000);
    }
}