// 1. Define the Custom Element Properties
elements.nebula = {
    color: ["#4a154b", "#63116d", "#116d6e"], // Multicolored gas
    behavior: behaviors.GAS,
    category: "cosmic", // MUST be lowercase
    state: "gas",
    density: 1,
    glow: 1,
    displayName: "Nebula"
};

elements.dark_matter = {
    color: "#0d0d1a",
    behavior: behaviors.POWDER,
    category: "cosmic", // MUST be lowercase
    state: "solid",
    density: 5000, 
    displayName: "Dark Matter",
    desc: "Extremely dense cosmic matter."
};

// 2. Format the Category Tab Appearance
// This sets the display name and tab color in the UI
categoryNames.cosmic = "Cosmic";
