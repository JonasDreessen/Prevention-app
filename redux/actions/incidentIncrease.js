export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creators
export function addHazard(){
    console.log("FIRING UP THE hazard")
    return {
        type: INCREMENT,
        payload: 'hazard'
    }
}

export function addNearMiss(){
    console.log("FIRING UP THE nearMiss")
    return {
        type: INCREMENT,
        payload: 'Near Miss'
    }
}

export function addMaintenance(){
    console.log("FIRING UP THE Maintenance")
    return {
        type: INCREMENT,
        payload: 'Maintenance'
    }
}

export function addInjury(){
    console.log("FIRING UP THE Injury")
    return {
        type: INCREMENT,
        payload: 'Injury'
    }
}

export function addPropertyDamage(){
    console.log("FIRING UP THE property damage")
    return {
        type: INCREMENT,
        payload: 'Property Damage'
    }
}

export function addTheft(){
    console.log("FIRING UP THE theft")
    return {
        type: INCREMENT,
        payload: 'theft'
    }
}