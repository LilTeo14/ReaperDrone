document.addEventListener('click', function (e) {
    const label = e.target.closest('.tabs__button');
    if (!label) return;
    const input = label.querySelector('input[name="product-category"]');
    if (!input) return;
    const slug = input.value;
    const redirectTabs = {
        "repeater-drones": "https://taf-ua.com/products/kolibri-13-fr1/",
        "repeater-drones-en": "https://taf-ua.com/en/products/kolibri-13-fr1-en/",
        "tactical-uav": "https://taf-ua.com/en/products/babka/",
        "tactical-uav-en": "https://taf-ua.com/en/products/babka-en/",
    };
    if (!redirectTabs[slug]) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    window.location.replace(redirectTabs[slug]);
}, true); 