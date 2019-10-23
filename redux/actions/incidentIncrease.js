export const INCREMENT_INCIDENT = 'INCREMENT_INCIDENT'

// action creators
export function addHazard(){
    console.log("FIRING UP THE hazard")
    return {
        type: INCREMENT_INCIDENT,
        payload: 'hazard'
    }
}

export function addNearMiss(){
    console.log("FIRING UP THE nearMiss")
    return {
        type: INCREMENT_INCIDENT,
        payload: 'Near Miss'
    }
}

export function addMaintenance(){
    console.log("FIRING UP THE Maintenance")
    return {
        type: INCREMENT_INCIDENT,
        payload: 'Maintenance'
    }
}

export function addInjury(){
    console.log("FIRING UP THE Injury")
    return {
        type: INCREMENT_INCIDENT,
        payload: 'Injury'
    }
}

export function addPropertyDamage(){
    console.log("FIRING UP THE property damage")
    return {
        type: INCREMENT_INCIDENT,
        payload: 'Property Damage'
    }
}

export function addTheft(){
    console.log("FIRING UP THE theft")
    return {
        type: INCREMENT_INCIDENT,
        payload: 'theft'
    }
}