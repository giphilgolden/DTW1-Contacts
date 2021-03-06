let ShiftSelect = document.querySelector("#Shift-Select")
let DepartmentSelect = document.querySelector("#Department-Select")
let Button = document.querySelector("#Drop-Boxes-Button")
let FHDNIR = document.querySelector("#FHD-NIR")
let BHDNIR = document.querySelector("#BHD-NIR")
let FHNNIR = document.querySelector("#FHN-NIR")
let RTNIR = document.querySelector("#RT-NIR")
let FHDIBD = document.querySelector("#FHD-Inbound-Dock")
let BHDIBD = document.querySelector("#BHD-Inbound-Dock")
let FHNIBD = document.querySelector("#FHN-Inbound-Dock")
let RTIBD = document.querySelector("#RT-Inbound-Dock")
let FHDStow = document.querySelector("#FHD-Inbound-Stow")
let BHDStow = document.querySelector("#BHD-Inbound-Stow")
let FHNStow = document.querySelector("#FHN-Inbound-Stow")
let RTStow = document.querySelector("#RT-Inbound-Stow")
let FHDOutboundDock = document.querySelector("#FHD-Outbound-Dock")

    
    Button.addEventListener("click", function () {
        let ShiftSelectText = ShiftSelect.options[ShiftSelect.selectedIndex].text
        let DepartmentSelectText = DepartmentSelect.options[DepartmentSelect.selectedIndex].text
    if (ShiftSelectText === "Front Half Days" && DepartmentSelectText === "Non Inventory") {
        FHDNIR.style.display = "inline-block"
        BHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Back Half Days" && DepartmentSelectText === "Non Inventory") {
        BHDNIR.style.display = "inline-block"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Front Half Nights" && DepartmentSelectText === "Non Inventory") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "inline-block"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "RT Shift" && DepartmentSelectText === "Non Inventory") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "inline-block"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Front Half Days" && DepartmentSelectText === "Inbound Dock") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "inline-block"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Back Half Days" && DepartmentSelectText === "Inbound Dock") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "inline-block"
        RTIBD.style.display = "none"
        RTNIR.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Front Half Nights" && DepartmentSelectText === "Inbound Dock") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "inline-block"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "RT Shift" && DepartmentSelectText === "Inbound Dock") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "inline-block"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Front Half Days" && DepartmentSelectText === "Inbound Stow") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "inline-block"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    }  if (ShiftSelectText === "Back Half Days" && DepartmentSelectText === "Inbound Stow") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "inline-block"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Front Half Nights" && DepartmentSelectText === "Inbound Stow") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "inline-block"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "RT Shift" && DepartmentSelectText === "Inbound Stow") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "inline-block"
        FHDOutboundDock.style.display = "none"
    } if (ShiftSelectText === "Front Half Days" && DepartmentSelectText === "Outbound Dock") {
        BHDNIR.style.display = "none"
        FHDNIR.style.display = "none"
        FHNNIR.style.display = "none"
        RTNIR.style.display = "none"
        FHDIBD.style.display = "none"
        BHDIBD.style.display = "none"
        FHNIBD.style.display = "none"
        RTIBD.style.display = "none"
        FHDStow.style.display = "none"
        BHDStow.style.display = "none"
        FHNStow.style.display = "none"
        RTStow.style.display = "none"
        FHDOutboundDock.style.display = "inline-block"
    } 
    })