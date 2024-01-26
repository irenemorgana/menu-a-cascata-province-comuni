const citiesByProvince = {
    "prov1": ["Comune 1 A", "Comune 1 B", "Comune 1 C"],
    "prov2": ["Comune 2 A", "Comune 2 B", "Comune 2 C"],
    "prov3": ["Comune 3 A", "Comune 3 B", "Comune 3 C"],
    "prov4": ["Comune 4 A", "Comune 4 B", "Comune 4 C"]
};

function comuni() {
    const provinceSelect = document.getElementById("province");
    const citiesSelect = document.getElementById("cities");
    const selectedProvince = provinceSelect.value;

    citiesSelect.innerHTML = "<option value=''>Seleziona comune</option>";

    if (selectedProvince && citiesByProvince[selectedProvince]) {
        citiesByProvince[selectedProvince].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            citiesSelect.appendChild(option);
        });
    }
}
