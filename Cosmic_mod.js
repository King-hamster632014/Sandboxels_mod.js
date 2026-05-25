// Ensure the Sandboxels modding API is ready
runAfterLoad(function() {
    
    // 1. Create the Custom Category
    elements.nebula = {
        color: ["#4a154b", "#63116d", "#116d6e"], // Multicolored gas effect
        behavior: behaviors.GAS,
        category: "Cosmic",
        state: "gas",
        density: 1,
        viscosity: 10,
        glow: 1,
        displayName: "Nebula"
    };

    elements.dark_matter = {
        color: "#0d0d1a",
        behavior: behaviors.POWDER,
        category: "Cosmic",
        state: "solid",
        density: 5000, // Very heavy, sinks through everything
        hidden: false,
        displayName: "Dark Matter",
        desc: "Extremely dense cosmic matter that pulls things down."
    };

    // 2. Register the new category icon/color in the game UI
    elementGrid.Cosmic = {
        color: "#2a0845"
    };
});
