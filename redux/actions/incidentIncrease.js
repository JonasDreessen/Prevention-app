export const INCREMENT_INCIDENT_HAZARD = 'INCREMENT_INCIDENT_HAZARD'
export const INCREMENT_INCIDENT_NEARMISS = 'INCREMENT_INCIDENT_NEARMISS'
export const INCREMENT_INCIDENT_MAINTENANCE = 'INCREMENT_INCIDENT_MAINTENANCE'
export const INCREMENT_INCIDENT_INJURY = 'INCREMENT_INCIDENT_INJURY'
export const INCREMENT_INCIDENT_PROPERTYDAMAGE = 'INCREMENT_INCIDENT_PROPERTYDAMAGE'
export const INCREMENT_INCIDENT_THEFT = 'INCREMENT_INCIDENT_THEFT'

// action creators
export function addHazard(){
    return {
        type: INCREMENT_INCIDENT_HAZARD,
        payload: 'hazard'
    }
}

export function addNearMiss(){
    return {
        type: INCREMENT_INCIDENT_NEARMISS,
        payload: 'Near Miss'
    }
}

export function addMaintenance(){
    return {
        type: INCREMENT_INCIDENT_MAINTENANCE,
        payload: 'Maintenance'
    }
}

export function addInjury(){
    return {
        type: INCREMENT_INCIDENT_INJURY,
        payload: 'Injury'
    }
}

export function addPropertyDamage(){
    return {
        type: INCREMENT_INCIDENT_PROPERTYDAMAGE,
        payload: 'Property Damage'
    }
}

export function addTheft(){
    return {
        type: INCREMENT_INCIDENT_THEFT,
        payload: 'theft'
    }
}